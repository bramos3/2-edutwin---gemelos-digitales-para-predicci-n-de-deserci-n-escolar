import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { School, Classroom, Student, TwinLevel, ThemeMode, SimulationParameters } from '../../types';
import { calculateSchoolSimulatedScore, calculateStudentRiskWithInterventions } from '../../services/mlEngine';
import { translations } from '../../i18n/translations';
import { RotateCw, Compass, Eye, ZoomIn, ZoomOut, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface DigitalTwinCanvasProps {
  level: TwinLevel;
  setLevel: (level: TwinLevel) => void;
  schools: School[];
  selectedSchool: School | null;
  setSelectedSchool: (school: School | null) => void;
  selectedClassroom: Classroom | null;
  setSelectedClassroom: (classroom: Classroom | null) => void;
  selectedStudent: Student | null;
  setSelectedStudent: (student: Student | null) => void;
  students: Student[];
  simulationParams: SimulationParameters;
  theme: ThemeMode;
  language: 'es' | 'en';
}

export const DigitalTwinCanvas: React.FC<DigitalTwinCanvasProps> = ({
  level,
  setLevel,
  schools,
  selectedSchool,
  setSelectedSchool,
  selectedClassroom,
  setSelectedClassroom,
  selectedStudent,
  setSelectedStudent,
  students,
  simulationParams,
  theme,
  language
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  const [autoRotate, setAutoRotate] = useState(false);
  const [hoveredLabel, setHoveredLabel] = useState<{ text: string; subtext?: string; x: number; y: number } | null>(null);
  const [cameraMode, setCameraMode] = useState<'perspective' | 'orthographic'>('perspective');

  // Three.js instances refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const dynamicGroupRef = useRef<THREE.Group | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const clickableObjectsRef = useRef<{ mesh: THREE.Object3D; data: any; type: 'school' | 'classroom' | 'studentNode' }[]>([]);

  // Orbit control custom state
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraSphericalRef = useRef({ radius: 24, theta: Math.PI / 4, phi: Math.PI / 3 });
  const targetCenterRef = useRef(new THREE.Vector3(0, 0, 0));

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Background color based on theme
    const bgColor = theme === 'dark' ? 0x090d16 : 0xf8fafc;
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.025);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    cameraRef.current = camera;
    updateCameraPosition();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    containerRef.current.replaceChildren(renderer.domElement);

    // Setup Lighting
    const ambientLight = new THREE.AmbientLight(theme === 'dark' ? 0x475569 : 0x94a3b8, theme === 'dark' ? 1.4 : 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, theme === 'dark' ? 1.5 : 2.0);
    dirLight.position.set(20, 40, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    const bluePointLight = new THREE.PointLight(0x38bdf8, 2, 50);
    bluePointLight.position.set(-15, 10, -15);
    scene.add(bluePointLight);

    const amberPointLight = new THREE.PointLight(0xf59e0b, 1.5, 50);
    amberPointLight.position.set(15, 10, 15);
    scene.add(amberPointLight);

    // Dynamic objects group
    const dynamicGroup = new THREE.Group();
    dynamicGroupRef.current = dynamicGroup;
    scene.add(dynamicGroup);

    // Resize listener with ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = newWidth / newHeight;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(containerRef.current);

    // Render loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (autoRotate && !isDraggingRef.current) {
        cameraSphericalRef.current.theta += delta * 0.25;
        updateCameraPosition();
      }

      // Animate floating beacons / rings in dynamic group
      dynamicGroup.children.forEach((child) => {
        if (child.userData?.animate) {
          child.userData.animate(elapsedTime, delta);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      resizeObserver.disconnect();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      renderer.dispose();
    };
  }, [theme]);

  // Update camera coordinates based on spherical coordinates
  const updateCameraPosition = useCallback(() => {
    if (!cameraRef.current) return;
    const { radius, theta, phi } = cameraSphericalRef.current;
    const target = targetCenterRef.current;

    const x = target.x + radius * Math.sin(phi) * Math.sin(theta);
    const y = target.y + radius * Math.cos(phi);
    const z = target.z + radius * Math.sin(phi) * Math.cos(theta);

    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(target);
  }, []);

  // Re-build 3D Scene when Level, Selection, or Simulation Parameters change
  useEffect(() => {
    if (!dynamicGroupRef.current || !sceneRef.current) return;
    const group = dynamicGroupRef.current;

    // Clean previous objects
    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
      if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
    }
    clickableObjectsRef.current = [];

    if (level === 'macro') {
      buildMacroView(group);
      targetCenterRef.current.set(0, 0, 0);
      cameraSphericalRef.current.radius = 28;
      cameraSphericalRef.current.phi = Math.PI / 3.2;
      updateCameraPosition();
    } else if (level === 'meso') {
      const school = selectedSchool || schools[0];
      buildMesoView(group, school);
      targetCenterRef.current.set(0, 1.5, 0);
      cameraSphericalRef.current.radius = 16;
      cameraSphericalRef.current.phi = Math.PI / 3.4;
      updateCameraPosition();
    } else if (level === 'micro') {
      const student = selectedStudent || students[0];
      buildMicroView(group, student);
      targetCenterRef.current.set(0, 1.2, 0);
      cameraSphericalRef.current.radius = 6.5;
      cameraSphericalRef.current.phi = Math.PI / 2.3;
      updateCameraPosition();
    }
  }, [level, selectedSchool, selectedClassroom, selectedStudent, simulationParams, theme, schools, students]);

  // ==========================================
  // 1. MACRO VIEW: Regional Terrain & Schools
  // ==========================================
  const buildMacroView = (group: THREE.Group) => {
    // 1. Digital Topographic Grid Terrain
    const gridSize = 32;
    const gridDivisions = 32;
    const gridHelper = new THREE.GridHelper(
      gridSize,
      gridDivisions,
      theme === 'dark' ? 0x0284c7 : 0x0ea5e9,
      theme === 'dark' ? 0x1e293b : 0xe2e8f0
    );
    gridHelper.position.y = -0.05;
    group.add(gridHelper);

    // Ground Plate
    const groundGeo = new THREE.PlaneGeometry(gridSize, gridSize, 24, 24);
    // Add subtle elevation waves to vertices
    const posAttr = groundGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i);
      const zVal = Math.sin(vx * 0.2) * Math.cos(vy * 0.2) * 0.4;
      posAttr.setZ(i, zVal);
    }
    groundGeo.computeVertexNormals();

    const groundMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x0f172a : 0xf1f5f9,
      roughness: 0.85,
      metalness: 0.15,
      flatShading: true
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    group.add(ground);

    // Connecting Transport Lines between Schools
    const lineMat = new THREE.LineDashedMaterial({
      color: theme === 'dark' ? 0x38bdf8 : 0x0284c7,
      dashSize: 0.6,
      gapSize: 0.3,
      linewidth: 2
    });

    for (let i = 0; i < schools.length; i++) {
      for (let j = i + 1; j < schools.length; j++) {
        if (Math.random() > 0.4) {
          const p1 = new THREE.Vector3(schools[i].position3D.x, 0.1, schools[i].position3D.z);
          const p2 = new THREE.Vector3(schools[j].position3D.x, 0.1, schools[j].position3D.z);
          const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
          const line = new THREE.Line(lineGeo, lineMat);
          line.computeLineDistances();
          group.add(line);
        }
      }
    }

    // 2. Render 3D School Nodes
    schools.forEach((school) => {
      const { simulatedRiskScore, buildingColor } = calculateSchoolSimulatedScore(school, students, simulationParams);

      const schoolNodeGroup = new THREE.Group();
      schoolNodeGroup.position.set(school.position3D.x, 0, school.position3D.z);

      // Height proportional to total students and risk
      const buildingHeight = 1.2 + (school.totalStudents / 200) * 0.8;
      const buildingWidth = 1.8;
      const buildingDepth = 1.8;

      // Base building geometry
      const buildingGeo = new THREE.BoxGeometry(buildingWidth, buildingHeight, buildingDepth);
      const buildingMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(buildingColor),
        roughness: 0.3,
        metalness: 0.4,
        emissive: new THREE.Color(buildingColor),
        emissiveIntensity: theme === 'dark' ? 0.25 : 0.12
      });

      const buildingMesh = new THREE.Mesh(buildingGeo, buildingMat);
      buildingMesh.position.y = buildingHeight / 2;
      buildingMesh.castShadow = true;
      buildingMesh.receiveShadow = true;
      schoolNodeGroup.add(buildingMesh);

      // Digital roof beacon
      const beaconGeo = new THREE.ConeGeometry(0.4, 0.8, 4);
      const beaconMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(buildingColor),
        emissive: new THREE.Color(buildingColor),
        emissiveIntensity: 0.8,
        wireframe: true
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.y = buildingHeight + 0.6;
      schoolNodeGroup.add(beacon);

      // Pulsing Ground Risk Aura
      const auraGeo = new THREE.RingGeometry(1.6, 2.4, 32);
      const auraMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(buildingColor),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45
      });
      const aura = new THREE.Mesh(auraGeo, auraMat);
      aura.rotation.x = -Math.PI / 2;
      aura.position.y = 0.05;
      schoolNodeGroup.add(aura);

      // Floating Hologram Risk Pin
      const pinGeo = new THREE.SphereGeometry(0.35, 16, 16);
      const pinMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(buildingColor),
        emissive: new THREE.Color(buildingColor),
        emissiveIntensity: 0.9,
        roughness: 0.2
      });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.y = buildingHeight + 1.6;
      schoolNodeGroup.add(pin);

      // Continuous animation
      schoolNodeGroup.userData = {
        animate: (time: number) => {
          beacon.rotation.y = time * 1.5;
          pin.position.y = buildingHeight + 1.6 + Math.sin(time * 3 + school.latitude) * 0.15;
          const pulse = 1.0 + Math.sin(time * 2.5 + school.longitude) * 0.2;
          aura.scale.set(pulse, pulse, pulse);
        }
      };

      group.add(schoolNodeGroup);

      clickableObjectsRef.current.push({
        mesh: buildingMesh,
        data: school,
        type: 'school'
      });
    });
  };

  // ==========================================
  // 2. MESO VIEW: School Campus & Classrooms
  // ==========================================
  const buildMesoView = (group: THREE.Group, school: School) => {
    // Campus Base Courtyard & Grounds
    const campusBaseGeo = new THREE.BoxGeometry(14, 0.4, 12);
    const campusBaseMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x1e293b : 0xe2e8f0,
      roughness: 0.8
    });
    const campusBase = new THREE.Mesh(campusBaseGeo, campusBaseMat);
    campusBase.position.y = -0.2;
    campusBase.receiveShadow = true;
    group.add(campusBase);

    // Central Sports Yard / Multipurpose Patio
    const yardGeo = new THREE.PlaneGeometry(5.5, 4.5);
    const yardMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x0f766e : 0x14b8a6,
      roughness: 0.6
    });
    const yard = new THREE.Mesh(yardGeo, yardMat);
    yard.rotation.x = -Math.PI / 2;
    yard.position.set(0, 0.01, 1.5);
    group.add(yard);

    // Cafeteria / Dining Hall (Comedor Escolar)
    const canteenGeo = new THREE.BoxGeometry(3.6, 1.6, 2.5);
    const canteenMat = new THREE.MeshStandardMaterial({
      color: school.mealPlanActive ? (theme === 'dark' ? 0x15803d : 0x22c55e) : (theme === 'dark' ? 0x64748b : 0x94a3b8),
      roughness: 0.5
    });
    const canteen = new THREE.Mesh(canteenGeo, canteenMat);
    canteen.position.set(4.2, 0.8, -3.2);
    canteen.castShadow = true;
    group.add(canteen);

    // Library & Digital Lab
    const libGeo = new THREE.BoxGeometry(3.6, 1.6, 2.5);
    const libMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x0284c7 : 0x38bdf8,
      roughness: 0.5
    });
    const library = new THREE.Mesh(libGeo, libMat);
    library.position.set(4.2, 0.8, 1.5);
    library.castShadow = true;
    group.add(library);

    // Administration & Counseling Office
    const adminGeo = new THREE.BoxGeometry(3.6, 1.6, 2.5);
    const adminMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x6366f1 : 0x818cf8,
      roughness: 0.5
    });
    const adminOffice = new THREE.Mesh(adminGeo, adminMat);
    adminOffice.position.set(4.2, 0.8, -0.8);
    adminOffice.castShadow = true;
    group.add(adminOffice);

    // Classrooms Wing (Interactive 3D Modular Blocks)
    school.classrooms.forEach((classroom) => {
      // Calculate classroom color based on risk score
      let clColor = '#10b981';
      if (classroom.riskScore >= 75) clColor = '#ef4444';
      else if (classroom.riskScore >= 50) clColor = '#f59e0b';

      const isSelected = selectedClassroom?.id === classroom.id;

      const clsGroup = new THREE.Group();
      clsGroup.position.set(classroom.position3D.x, classroom.position3D.y, classroom.position3D.z);

      // Classroom Room Structure
      const roomGeo = new THREE.BoxGeometry(
        classroom.dimensions3D.width,
        classroom.dimensions3D.height,
        classroom.dimensions3D.depth
      );

      const roomMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(clColor),
        roughness: 0.35,
        metalness: 0.2,
        emissive: new THREE.Color(clColor),
        emissiveIntensity: isSelected ? 0.6 : (theme === 'dark' ? 0.25 : 0.1),
        wireframe: false
      });

      const roomMesh = new THREE.Mesh(roomGeo, roomMat);
      roomMesh.castShadow = true;
      roomMesh.receiveShadow = true;
      clsGroup.add(roomMesh);

      // Glass Window cutout front
      const winGeo = new THREE.PlaneGeometry(classroom.dimensions3D.width * 0.7, classroom.dimensions3D.height * 0.5);
      const winMat = new THREE.MeshStandardMaterial({
        color: 0xbae6fd,
        transparent: true,
        opacity: 0.75,
        roughness: 0.1
      });
      const windowMesh = new THREE.Mesh(winGeo, winMat);
      windowMesh.position.set(0, 0, classroom.dimensions3D.depth / 2 + 0.02);
      clsGroup.add(windowMesh);

      // Classroom Alert Indicator Orb
      if (classroom.alertCount > 0) {
        const alertOrbGeo = new THREE.SphereGeometry(0.2, 16, 16);
        const alertOrbMat = new THREE.MeshStandardMaterial({
          color: 0xff0055,
          emissive: 0xff0055,
          emissiveIntensity: 0.9
        });
        const alertOrb = new THREE.Mesh(alertOrbGeo, alertOrbMat);
        alertOrb.position.set(0, classroom.dimensions3D.height / 2 + 0.4, 0);
        clsGroup.add(alertOrb);

        clsGroup.userData = {
          animate: (time: number) => {
            alertOrb.position.y = classroom.dimensions3D.height / 2 + 0.4 + Math.sin(time * 4) * 0.1;
          }
        };
      }

      group.add(clsGroup);

      clickableObjectsRef.current.push({
        mesh: roomMesh,
        data: classroom,
        type: 'classroom'
      });
    });
  };

  // ==========================================
  // 3. MICRO VIEW: Student 3D Risk Footprint
  // ==========================================
  const buildMicroView = (group: THREE.Group, student: Student) => {
    const { simulatedProbability, simulatedTier, updatedShap } = calculateStudentRiskWithInterventions(student, simulationParams);

    let tierColor = '#10b981';
    if (simulatedTier === 'high') tierColor = '#ef4444';
    else if (simulatedTier === 'medium') tierColor = '#f59e0b';

    // 1. Digital Hologram Platform Pedestal
    const basePedestalGeo = new THREE.CylinderGeometry(2.4, 2.6, 0.3, 32);
    const basePedestalMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x0f172a : 0xe2e8f0,
      metalness: 0.6,
      roughness: 0.3
    });
    const pedestal = new THREE.Mesh(basePedestalGeo, basePedestalMat);
    pedestal.position.y = -0.15;
    group.add(pedestal);

    // Glowing Pedestal Ring
    const ringGeo = new THREE.RingGeometry(2.1, 2.3, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tierColor),
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    group.add(ring);

    // 2. Stylized 3D Student Hologram Avatar Figure
    const avatarGroup = new THREE.Group();
    avatarGroup.position.set(0, 0, 0);

    // Torso
    const torsoGeo = new THREE.CylinderGeometry(0.35, 0.45, 1.1, 16);
    const avatarMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(tierColor),
      roughness: 0.25,
      metalness: 0.4,
      emissive: new THREE.Color(tierColor),
      emissiveIntensity: theme === 'dark' ? 0.4 : 0.2
    });
    const torso = new THREE.Mesh(torsoGeo, avatarMat);
    torso.position.y = 1.1;
    avatarGroup.add(torso);

    // Head
    const headGeo = new THREE.SphereGeometry(0.32, 24, 24);
    const head = new THREE.Mesh(headGeo, avatarMat);
    head.position.y = 1.95;
    avatarGroup.add(head);

    // Holographic Visor / Face Ring
    const visorGeo = new THREE.TorusGeometry(0.33, 0.04, 16, 32);
    const visorMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.rotation.x = Math.PI / 2;
    visor.position.y = 1.95;
    avatarGroup.add(visor);

    // 3. Orbiting SHAP Risk Factor Nodes
    const orbitalGroup = new THREE.Group();
    const factorCount = Math.min(6, updatedShap.length);
    const orbitalRadius = 2.0;

    updatedShap.slice(0, factorCount).forEach((factor, idx) => {
      const angle = (idx / factorCount) * Math.PI * 2;
      const factorColor = factor.contribution > 0 ? '#ef4444' : '#10b981';

      const factorNodeGroup = new THREE.Group();
      factorNodeGroup.position.set(
        Math.cos(angle) * orbitalRadius,
        1.3 + Math.sin(angle) * 0.4,
        Math.sin(angle) * orbitalRadius
      );

      const nodeSphereGeo = new THREE.SphereGeometry(0.22, 16, 16);
      const nodeSphereMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(factorColor),
        emissive: new THREE.Color(factorColor),
        emissiveIntensity: 0.8
      });
      const nodeSphere = new THREE.Mesh(nodeSphereGeo, nodeSphereMat);
      factorNodeGroup.add(nodeSphere);

      // Connecting line to center avatar
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-factorNodeGroup.position.x, 1.2 - factorNodeGroup.position.y, -factorNodeGroup.position.z)
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(factorColor),
        transparent: true,
        opacity: 0.5
      });
      const linkLine = new THREE.Line(lineGeo, lineMat);
      factorNodeGroup.add(linkLine);

      orbitalGroup.add(factorNodeGroup);

      clickableObjectsRef.current.push({
        mesh: nodeSphere,
        data: factor,
        type: 'studentNode'
      });
    });

    avatarGroup.add(orbitalGroup);

    // Holographic Risk Cylinder Shield
    const shieldGeo = new THREE.CylinderGeometry(2.3, 2.3, 2.6, 32, 1, true);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tierColor),
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      wireframe: true
    });
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    shield.position.y = 1.3;
    avatarGroup.add(shield);

    avatarGroup.userData = {
      animate: (time: number) => {
        orbitalGroup.rotation.y = time * 0.4;
        shield.rotation.y = -time * 0.2;
        head.position.y = 1.95 + Math.sin(time * 2) * 0.03;
      }
    };

    group.add(avatarGroup);
  };

  // ==========================================
  // Raycasting / Mouse Interaction Handlers
  // ==========================================
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseRef.current.set(x, y);

    if (isDraggingRef.current) {
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      cameraSphericalRef.current.theta -= deltaX * 0.008;
      cameraSphericalRef.current.phi = Math.max(
        0.1,
        Math.min(Math.PI / 2 - 0.05, cameraSphericalRef.current.phi - deltaY * 0.008)
      );

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      updateCameraPosition();
    } else {
      // Raycasting for hover tooltips
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const meshesToTest = clickableObjectsRef.current.map((item) => item.mesh);
      const intersects = raycasterRef.current.intersectObjects(meshesToTest, false);

      if (intersects.length > 0) {
        const hit = clickableObjectsRef.current.find((item) => item.mesh === intersects[0].object);
        if (hit) {
          if (hit.type === 'school') {
            const sch: School = hit.data;
            const { simulatedRiskScore } = calculateSchoolSimulatedScore(sch, students, simulationParams);
            setHoveredLabel({
              text: sch.name,
              subtext: `${t.metrics.dropoutProb}: ${simulatedRiskScore}% | ${sch.totalStudents} ${t.metrics.totalMonitored.toLowerCase()}`,
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
          } else if (hit.type === 'classroom') {
            const cls: Classroom = hit.data;
            setHoveredLabel({
              text: cls.name,
              subtext: `${cls.teacherName} | ${t.classroom.avgRiskScore}: ${cls.riskScore}%`,
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
          } else if (hit.type === 'studentNode') {
            const factor = hit.data;
            setHoveredLabel({
              text: factor.featureName[language],
              subtext: `${language === 'es' ? 'Aporte SHAP' : 'SHAP Impact'}: ${factor.contribution > 0 ? '+' : ''}${factor.contribution} | ${factor.value}`,
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
          }
          return;
        }
      }
      setHoveredLabel(null);
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !cameraRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseRef.current.set(x, y);

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const meshesToTest = clickableObjectsRef.current.map((item) => item.mesh);
    const intersects = raycasterRef.current.intersectObjects(meshesToTest, false);

    if (intersects.length > 0) {
      const hit = clickableObjectsRef.current.find((item) => item.mesh === intersects[0].object);
      if (hit) {
        if (hit.type === 'school') {
          setSelectedSchool(hit.data);
          setLevel('meso');
        } else if (hit.type === 'classroom') {
          setSelectedClassroom(hit.data);
          // Find first student in this classroom if exists
          const matchingStudent = students.find((s) => s.classroomId === hit.data.id) || students[0];
          setSelectedStudent(matchingStudent);
        }
      }
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomDelta = e.deltaY * 0.02;
    const minRadius = level === 'micro' ? 3.5 : (level === 'meso' ? 8 : 12);
    const maxRadius = level === 'micro' ? 14 : (level === 'meso' ? 32 : 55);

    cameraSphericalRef.current.radius = Math.max(minRadius, Math.min(maxRadius, cameraSphericalRef.current.radius + zoomDelta));
    updateCameraPosition();
  };

  const zoomIn = () => {
    cameraSphericalRef.current.radius = Math.max(3.5, cameraSphericalRef.current.radius - 3);
    updateCameraPosition();
  };

  const zoomOut = () => {
    cameraSphericalRef.current.radius = Math.min(50, cameraSphericalRef.current.radius + 3);
    updateCameraPosition();
  };

  const resetCamera = () => {
    if (level === 'macro') {
      cameraSphericalRef.current = { radius: 28, theta: Math.PI / 4, phi: Math.PI / 3.2 };
      targetCenterRef.current.set(0, 0, 0);
    } else if (level === 'meso') {
      cameraSphericalRef.current = { radius: 16, theta: Math.PI / 4, phi: Math.PI / 3.4 };
      targetCenterRef.current.set(0, 1.5, 0);
    } else {
      cameraSphericalRef.current = { radius: 6.5, theta: Math.PI / 4, phi: Math.PI / 2.3 };
      targetCenterRef.current.set(0, 1.2, 0);
    }
    updateCameraPosition();
  };

  return (
    <div
      id="digital-twin-viewport-container"
      className="relative w-full h-full min-h-[460px] lg:min-h-[580px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-inner select-none"
    >
      {/* 3D WebGL Canvas Mounting Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleClick}
        onWheel={handleWheel}
      />

      {/* Top HUD: Level Navigation Breadcrumb */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-xs sm:text-sm font-medium">
        <button
          id="btn-macro-level"
          onClick={() => setLevel('macro')}
          className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            level === 'macro'
              ? 'bg-sky-600 text-white font-semibold shadow'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{t.twinLevels.macro.split(':')[0]}</span>
        </button>

        <span className="text-slate-400">/</span>

        <button
          id="btn-meso-level"
          onClick={() => setLevel('meso')}
          className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            level === 'meso'
              ? 'bg-amber-600 text-white font-semibold shadow'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>{t.twinLevels.meso.split(':')[0]}</span>
        </button>

        <span className="text-slate-400">/</span>

        <button
          id="btn-micro-level"
          onClick={() => setLevel('micro')}
          className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            level === 'micro'
              ? 'bg-indigo-600 text-white font-semibold shadow'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.twinLevels.micro.split(':')[0]}</span>
        </button>
      </div>

      {/* Top Right Context Badge */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-medium text-slate-700 dark:text-slate-300">
          {level === 'macro' && `${schools.length} ${language === 'es' ? 'Planteles en Red' : 'Schools in Network'}`}
          {level === 'meso' && (selectedSchool?.name || schools[0].name)}
          {level === 'micro' && `${selectedStudent?.anonymousId || '#STD-7489X'} (Anon ID)`}
        </span>
      </div>

      {/* Floating 3D Interaction Tooltip */}
      {hoveredLabel && (
        <div
          className="pointer-events-none absolute z-30 transform -translate-x-1/2 -translate-y-full mb-3 bg-slate-900/95 text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-slate-700 backdrop-blur-sm max-w-xs transition-opacity duration-150"
          style={{ left: hoveredLabel.x, top: hoveredLabel.y }}
        >
          <p className="font-semibold text-slate-100">{hoveredLabel.text}</p>
          {hoveredLabel.subtext && <p className="text-sky-300 text-[11px] mt-0.5">{hoveredLabel.subtext}</p>}
        </div>
      )}

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-20 flex items-center justify-between sm:justify-end gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
        <div className="flex items-center gap-1">
          <button
            id="btn-camera-zoom-in"
            onClick={zoomIn}
            title="Zoom In"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            id="btn-camera-zoom-out"
            onClick={zoomOut}
            title="Zoom Out"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            id="btn-camera-rotate-toggle"
            onClick={() => setAutoRotate(!autoRotate)}
            title="Auto Rotate"
            className={`p-2 rounded-xl transition ${
              autoRotate
                ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 font-medium'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} />
          </button>
          <button
            id="btn-camera-reset"
            onClick={resetCamera}
            title="Reset Camera"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Legend Traffic Light */}
        <div className="hidden md:flex items-center gap-3 pl-3 pr-2 border-l border-slate-200 dark:border-slate-700 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-600 dark:text-slate-400 text-[11px]">{t.riskTiers.lowShort} (&lt;35%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-slate-600 dark:text-slate-400 text-[11px]">{t.riskTiers.mediumShort} (35-65%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="text-slate-600 dark:text-slate-400 text-[11px]">{t.riskTiers.highShort} (&gt;65%)</span>
          </div>
        </div>
      </div>

      {/* Subtle bottom hint */}
      <div className="absolute bottom-4 left-4 z-10 hidden lg:block text-[11px] text-slate-500 dark:text-slate-400 pointer-events-none bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
        {t.twinLevels.controlsHint}
      </div>
    </div>
  );
};
