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
  embeddedMode?: boolean;
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
  language,
  embeddedMode = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const t = translations[language];

  const [autoRotate, setAutoRotate] = useState(false);
  const autoRotateRef = useRef(false);
  useEffect(() => { autoRotateRef.current = autoRotate; }, [autoRotate]);
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
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Background color based on theme
    const bgColor = theme === 'dark' ? 0x070a10 : 0xf8fafc;
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.025);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    cameraRef.current = camera;
    updateCameraPosition();

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Setup Lighting
    const ambientLight = new THREE.AmbientLight(theme === 'dark' ? 0x475569 : 0x94a3b8, theme === 'dark' ? 1.4 : 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, theme === 'dark' ? 1.5 : 2.0);
    dirLight.position.set(20, 40, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    const bluePointLight = new THREE.PointLight(0x14b8a6, 1.35, 50);
    bluePointLight.position.set(-15, 10, -15);
    scene.add(bluePointLight);

    const amberPointLight = new THREE.PointLight(0xc9a968, 1.05, 50);
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

      if (autoRotateRef.current && !isDraggingRef.current) {
        cameraSphericalRef.current.theta += delta * 0.25;
        updateCameraPosition();
      }

      // Animate floating beacons / rings in dynamic group
      if (dynamicGroup.userData?.animate) {
        dynamicGroup.userData.animate(elapsedTime, delta);
      }
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
      animationFrameRef.current = null;
      renderer.dispose();
      if (rendererRef.current === renderer) rendererRef.current = null;
      sceneRef.current = null;
      dynamicGroupRef.current = null;
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
      targetCenterRef.current.set(0, 0.5, 0);
      cameraSphericalRef.current.radius = 34 / Math.min(1, cameraRef.current?.aspect || 1);
      cameraSphericalRef.current.theta = Math.PI / 5;
      cameraSphericalRef.current.phi = Math.PI / 2.6;
      updateCameraPosition();
    } else if (level === 'meso') {
      const school = selectedSchool || schools[0];
      if (school) buildMesoView(group, school);
      targetCenterRef.current.set(0, 1.8, 0);
      cameraSphericalRef.current.radius = 24 / Math.min(1, cameraRef.current?.aspect || 1);
      cameraSphericalRef.current.theta = Math.PI / 6;
      cameraSphericalRef.current.phi = Math.PI / 2.4;
      updateCameraPosition();
    } else if (level === 'micro') {
      const student = selectedStudent || students[0];
      if (student) buildMicroView(group, student);
      targetCenterRef.current.set(0, 1.3, 0);
      cameraSphericalRef.current.radius = 9 / Math.min(1, cameraRef.current?.aspect || 1);
      cameraSphericalRef.current.theta = Math.PI / 4;
      cameraSphericalRef.current.phi = Math.PI / 2.3;
      updateCameraPosition();
    }

    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    if (scene && camera && renderer) renderer.render(scene, camera);
  }, [level, selectedSchool, selectedClassroom, selectedStudent, simulationParams, theme, schools, students]);

  // ==========================================
  // 1. MACRO VIEW: Predictive Holographic Nucleus (Sci-Fi Professional)
  // ==========================================
  const buildMacroView = (group: THREE.Group) => {
    // ------------------------------------------------------------------
    // 0. PEDESTAL / CONTROL CONSOLE (Floating hologram platform)
    // ------------------------------------------------------------------
    const pedestalGroup = new THREE.Group();
    const baseMats = {
      outer: new THREE.MeshStandardMaterial({
        color: theme === 'dark' ? 0x0b1220 : 0xdbeafe,
        metalness: 0.85,
        roughness: 0.2
      }),
      mid: new THREE.MeshStandardMaterial({
        color: theme === 'dark' ? 0x0f172a : 0xbfdbfe,
        metalness: 0.9,
        roughness: 0.15
      }),
      core: new THREE.MeshStandardMaterial({
        color: 0x22d3ee,
        emissive: 0x06b6d4,
        emissiveIntensity: theme === 'dark' ? 0.9 : 0.45,
        metalness: 0.5,
        roughness: 0.2
      })
    };

    for (let ring = 0; ring < 4; ring++) {
      const r = 5.4 - ring * 0.75;
      const h = ring === 0 ? 0.35 : 0.22;
      const disc = new THREE.Mesh(
        new THREE.CylinderGeometry(r, r + 0.08, h, 64),
        ring === 0 ? baseMats.outer : baseMats.mid
      );
      disc.position.y = ring * 0.22;
      disc.castShadow = true;
      disc.receiveShadow = true;
      pedestalGroup.add(disc);

      const accent = new THREE.Mesh(
        new THREE.TorusGeometry(r - 0.02, 0.035, 10, 80),
        baseMats.core
      );
      accent.rotation.x = Math.PI / 2;
      accent.position.y = ring * 0.22 + h / 2;
      pedestalGroup.add(accent);
    }

    const topY = 3 * 0.22 + 0.11;
    for (let hx = -5; hx <= 5; hx++) {
      for (let hz = -5; hz <= 5; hz++) {
        const dist = Math.sqrt(hx * hx + hz * hz);
        if (dist > 3.6) continue;
        const hexMat = new THREE.MeshStandardMaterial({
          color: 0x22d3ee,
          emissive: 0x0891b2,
          emissiveIntensity: 0.25 + Math.random() * 0.55,
          metalness: 0.7,
          roughness: 0.2,
          transparent: true,
          opacity: 0.35 + Math.random() * 0.45
        });
        const hex = new THREE.Mesh(
          new THREE.CylinderGeometry(0.25, 0.25, 0.03, 6),
          hexMat
        );
        hex.position.set(
          hx * 0.48 + (hz % 2 === 0 ? 0 : 0.24),
          topY + 0.015,
          hz * 0.42
        );
        (hex.userData as any) = { baseEmissive: (hexMat as any).emissiveIntensity };
        pedestalGroup.add(hex);
      }
    }
    group.add(pedestalGroup);

    // ------------------------------------------------------------------
    // 1. CENTRAL PREDICTIVE CORE (Reactor sphere + atomic rings)
    // ------------------------------------------------------------------
    const coreGroup = new THREE.Group();
    coreGroup.position.y = topY + 0.6;

    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      emissive: 0x818cf8,
      emissiveIntensity: 1.15,
      metalness: 0.55,
      roughness: 0.15
    });
    const innerCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), innerCoreMat);
    coreGroup.add(innerCore);

    const wireCore = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.98, 1),
      new THREE.MeshStandardMaterial({
        color: 0xa78bfa,
        emissive: 0xc4b5fd,
        emissiveIntensity: 1.0,
        wireframe: true,
        transparent: true,
        opacity: 0.85
      })
    );
    coreGroup.add(wireCore);

    for (let auraL = 0; auraL < 3; auraL++) {
      const auraMat = new THREE.MeshBasicMaterial({
        color: auraL === 0 ? 0x22d3ee : auraL === 1 ? 0x818cf8 : 0xf472b6,
        transparent: true,
        opacity: 0.09,
        side: THREE.DoubleSide
      });
      const aura = new THREE.Mesh(
        new THREE.SphereGeometry(1.3 + auraL * 0.25, 32, 32),
        auraMat
      );
      (aura.userData as any) = { layer: auraL };
      coreGroup.add(aura);
    }

    const orbitConfigs = [
      { radius: 1.55, tiltX: Math.PI / 2, tiltZ: 0,               color: 0x22d3ee, speed:  0.35 },
      { radius: 1.85, tiltX: Math.PI / 3, tiltZ:  Math.PI / 5,    color: 0xa78bfa, speed: -0.28 },
      { radius: 2.15, tiltX: Math.PI / 4, tiltZ: -Math.PI / 4,    color: 0xf472b6, speed:  0.22 }
    ];
    const orbitRings: THREE.Mesh[] = [];
    orbitConfigs.forEach((cfg) => {
      const ringMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.85,
        metalness: 0.95,
        roughness: 0.05,
        transparent: true,
        opacity: 0.9
      });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(cfg.radius, 0.045, 14, 96), ringMat);
      ring.rotation.x = cfg.tiltX;
      ring.rotation.z = cfg.tiltZ;
      (ring.userData as any) = cfg;
      orbitRings.push(ring);
      coreGroup.add(ring);

      for (let sat = 0; sat < 3; sat++) {
        const satMat = new THREE.MeshStandardMaterial({
          color: cfg.color,
          emissive: cfg.color,
          emissiveIntensity: 1.1,
          metalness: 0.8,
          roughness: 0.1,
          flatShading: true
        });
        const satMesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.09, 0), satMat);
        const angle = (sat / 3) * Math.PI * 2;
        (satMesh.userData as any) = {
          orbitIdx: orbitRings.length - 1,
          angle,
          radius: cfg.radius,
          tiltX: cfg.tiltX,
          tiltZ: cfg.tiltZ
        };
        coreGroup.add(satMesh);
      }
    });

    for (let dir = -1; dir <= 1; dir += 2) {
      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.85, 4.2, 24, 1, true),
        new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.08,
          side: THREE.DoubleSide
        })
      );
      beam.position.y = dir * 2.4;
      coreGroup.add(beam);

      const beamParticles = new THREE.Group();
      for (let bp = 0; bp < 6; bp++) {
        const p = new THREE.Mesh(
          new THREE.SphereGeometry(0.045, 10, 10),
          new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.9 })
        );
        (p.userData as any) = { idx: bp };
        beamParticles.add(p);
      }
      (beamParticles.userData as any) = { dir };
      coreGroup.add(beamParticles);
    }

    group.add(coreGroup);

    // ------------------------------------------------------------------
    // 2. ORBITING SCHOOL NODES — Crystalline shards floating in layers
    // ------------------------------------------------------------------
    const orbitRadii = [6.5, 8.8, 11.0];
    const orbitTilts = [0.12, -0.22, 0.18];
    const orbitSpeeds = [0.08, -0.06, 0.05];
    const schoolCount = schools.length;

    schools.forEach((school, idx) => {
      const orbitIdx = idx % orbitRadii.length;
      const { buildingColor } = calculateSchoolSimulatedScore(school, students, simulationParams);
      const orbitalRadius = orbitRadii[orbitIdx];
      const baseAngle = (idx / Math.max(1, schoolCount)) * Math.PI * 2 + orbitIdx * 0.55;

      const nodeGroup = new THREE.Group();
      const orbitArm = new THREE.Group();
      orbitArm.rotation.z = orbitTilts[orbitIdx];
      nodeGroup.add(orbitArm);

      const shardGroup = new THREE.Group();
      shardGroup.position.set(orbitalRadius, 0, 0);
      orbitArm.add(shardGroup);

      const tierColorObj = new THREE.Color(buildingColor);

      const shardGeo = new THREE.OctahedronGeometry(0.55, 0);
      const shardMat = new THREE.MeshStandardMaterial({
        color: tierColorObj,
        emissive: tierColorObj,
        emissiveIntensity: theme === 'dark' ? 0.85 : 0.5,
        metalness: 0.85,
        roughness: 0.12,
        flatShading: true,
        transparent: true,
        opacity: 0.95
      });
      const shard = new THREE.Mesh(shardGeo, shardMat);
      shard.scale.set(0.8, 1.6, 0.8);
      shard.castShadow = true;
      shardGroup.add(shard);

      const shard2 = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.32, 0),
        shardMat.clone()
      );
      shard2.position.set(0.3, 0.25, 0.2);
      shard2.scale.set(0.7, 1.1, 0.7);
      ((shard2 as any).material as THREE.MeshStandardMaterial).opacity = 0.75;
      shardGroup.add(shard2);

      const cageMat = new THREE.MeshBasicMaterial({
        color: tierColorObj,
        wireframe: true,
        transparent: true,
        opacity: 0.55
      });
      const cage = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.6, 6, 1, true), cageMat);
      cage.rotation.y = Math.PI / 6;
      shardGroup.add(cage);

      const ringColors = [0x22d3ee, 0xfbbf24];
      for (let rr = 0; rr < 2; rr++) {
        const rMat = new THREE.MeshStandardMaterial({
          color: ringColors[rr],
          emissive: ringColors[rr],
          emissiveIntensity: 1.0,
          metalness: 0.95,
          roughness: 0.05,
          transparent: true,
          opacity: 0.85
        });
        const rMesh = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.035, 12, 48), rMat);
        rMesh.rotation.x = rr === 0 ? Math.PI / 2 : Math.PI / 3;
        rMesh.rotation.z = rr === 1 ? Math.PI / 4 : 0;
        shardGroup.add(rMesh);
      }

      const mast = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.03, 0.85, 6),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.15 })
      );
      mast.position.y = 1.25;
      shardGroup.add(mast);

      const beaconMat = new THREE.MeshStandardMaterial({
        color: tierColorObj,
        emissive: tierColorObj,
        emissiveIntensity: 1.3
      });
      const beacon = new THREE.Mesh(new THREE.IcosahedronGeometry(0.08, 0), beaconMat);
      beacon.position.y = 1.72;
      shardGroup.add(beacon);

      const baseDisc = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 1.0, 0.08, 32),
        new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          metalness: 0.9,
          roughness: 0.15
        })
      );
      baseDisc.position.y = -0.65;
      shardGroup.add(baseDisc);

      const baseRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.92, 0.05, 10, 48),
        new THREE.MeshStandardMaterial({
          color: tierColorObj,
          emissive: tierColorObj,
          emissiveIntensity: 0.9,
          metalness: 0.9,
          roughness: 0.1
        })
      );
      baseRing.rotation.x = Math.PI / 2;
      baseRing.position.y = -0.62;
      shardGroup.add(baseRing);

      for (let ps = 0; ps < 3; ps++) {
        const pillarGroup = new THREE.Group();
        for (let pn = 0; pn < 5; pn++) {
          const prt = new THREE.Mesh(
            new THREE.BoxGeometry(0.05, 0.1, 0.05),
            new THREE.MeshStandardMaterial({
              color: tierColorObj,
              emissive: tierColorObj,
              emissiveIntensity: 1.0,
              transparent: true,
              opacity: 0.9
            })
          );
          (prt.userData as any) = { pIdx: pn, slot: ps };
          pillarGroup.add(prt);
        }
        const ang = (ps / 3) * Math.PI * 2;
        pillarGroup.position.set(Math.cos(ang) * 0.32, -0.15, Math.sin(ang) * 0.32);
        shardGroup.add(pillarGroup);
      }

      // DATA TUBE connecting each school back to the central core
      const p1 = new THREE.Vector3(0, 0, 0);
      const pMid = new THREE.Vector3(
        -orbitalRadius * 0.5,
        2.6 + Math.sin(baseAngle * 2) * 0.8,
        Math.sin(baseAngle) * orbitalRadius * 0.25
      );
      const pEnd = new THREE.Vector3(-orbitalRadius, 0, 0);
      const tubeCurve = new THREE.QuadraticBezierCurve3(pEnd, pMid, p1);
      const tubeMesh = new THREE.Mesh(
        new THREE.TubeGeometry(tubeCurve, 64, 0.045, 8, false),
        new THREE.MeshStandardMaterial({
          color: tierColorObj,
          emissive: tierColorObj,
          emissiveIntensity: 0.7,
          metalness: 0.85,
          roughness: 0.1,
          transparent: true,
          opacity: 0.7
        })
      );
      shardGroup.add(tubeMesh);

      const streamGroup = new THREE.Group();
      for (let st = 0; st < 4; st++) {
        const sp = new THREE.Mesh(
          new THREE.SphereGeometry(0.075, 12, 12),
          new THREE.MeshStandardMaterial({
            color: tierColorObj,
            emissive: tierColorObj,
            emissiveIntensity: 1.4,
            transparent: true,
            opacity: 0.95
          })
        );
        (sp.userData as any) = { t: (st / 4), curve: tubeCurve };
        streamGroup.add(sp);
      }
      shardGroup.add(streamGroup);

      (nodeGroup.userData as any) = {
        orbitIdx,
        baseAngle,
        orbitalRadius,
        tilt: orbitTilts[orbitIdx],
        orbitSpeed: orbitSpeeds[orbitIdx],
        type: 'schoolNode'
      };

      group.add(nodeGroup);

      clickableObjectsRef.current.push({
        mesh: shard,
        data: school,
        type: 'school'
      });
    });

    // ------------------------------------------------------------------
    // 3. AMBIENT FLOATING PARTICLES (dust/data motes)
    // ------------------------------------------------------------------
    const ambientGroup = new THREE.Group();
    for (let ap = 0; ap < 120; ap++) {
      const size = 0.02 + Math.random() * 0.05;
      const colorPick = Math.random();
      const col = colorPick < 0.33 ? 0x22d3ee : colorPick < 0.66 ? 0xa78bfa : 0xfbbf24;
      const mote = new THREE.Mesh(
        new THREE.SphereGeometry(size, 8, 8),
        new THREE.MeshBasicMaterial({
          color: col,
          transparent: true,
          opacity: 0.4 + Math.random() * 0.5
        })
      );
      const r = 3 + Math.random() * 10;
      const a = Math.random() * Math.PI * 2;
      const y = -1 + Math.random() * 5.5;
      mote.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
      (mote.userData as any) = { r, a, y, speed: 0.1 + Math.random() * 0.3, sway: Math.random() * Math.PI * 2 };
      ambientGroup.add(mote);
    }
    group.add(ambientGroup);

    // ------------------------------------------------------------------
    // 4. MAIN ANIMATION ORCHESTRATOR
    // ------------------------------------------------------------------
    group.userData = {
      animate: (time: number, delta: number) => {
        pedestalGroup.children.forEach((ch) => {
          const anyCh = ch as any;
          if (anyCh.geometry?.type === 'CylinderGeometry' && anyCh.material?.emissive && anyCh.userData?.baseEmissive !== undefined) {
            anyCh.material.emissiveIntensity = anyCh.userData.baseEmissive + Math.sin(time * 2 + ch.position.x * 3 + ch.position.z * 2) * 0.25;
          }
        });

        innerCore.scale.setScalar(1 + Math.sin(time * 2.6) * 0.06);
        innerCore.rotation.y = time * 0.6;
        innerCore.rotation.x = time * 0.22;
        wireCore.rotation.y = -time * 0.38;
        wireCore.rotation.z = time * 0.24;
        wireCore.scale.setScalar(1 + Math.sin(time * 1.8) * 0.05);

        coreGroup.children.forEach((c) => {
          const cc = c as any;
          if (cc.geometry?.type === 'SphereGeometry' && cc.material?.opacity !== undefined && cc.userData?.layer !== undefined) {
            const s = 1 + Math.sin(time * 1.4 + cc.userData.layer) * 0.12;
            cc.scale.setScalar(s);
            cc.material.opacity = 0.07 + Math.abs(Math.sin(time * 1.4 + cc.userData.layer)) * 0.08;
          }
        });

        orbitRings.forEach((ring, ri) => {
          const cfg = (ring.userData as any);
          ring.rotation.x = cfg.tiltX + Math.sin(time * 0.3 + ri) * 0.08;
          ring.rotation.y += cfg.speed * delta * 60;
        });

        coreGroup.children.forEach((c) => {
          const cc = c as any;
          const ud = cc.userData as any;
          if (ud?.orbitIdx !== undefined && ud.radius !== undefined && cc.geometry?.type === 'OctahedronGeometry') {
            const cfg = orbitConfigs[ud.orbitIdx];
            const ang = ud.angle + time * cfg.speed * 2;
            const x = Math.cos(ang) * ud.radius;
            const z = Math.sin(ang) * ud.radius;
            const v = new THREE.Vector3(x, 0, z);
            const q1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), ud.tiltX);
            const q2 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), ud.tiltZ);
            v.applyQuaternion(q2).applyQuaternion(q1);
            cc.position.copy(v);
            cc.rotation.x = time * 2.4;
            cc.rotation.y = time * 3.1;
            cc.scale.setScalar(1 + Math.sin(time * 3 + ud.angle) * 0.15);
          }
        });

        coreGroup.children.forEach((c) => {
          const cc = c as any;
          if (cc.children?.length > 0 && cc.userData?.dir !== undefined && cc.children[0].userData?.idx !== undefined) {
            const dir = cc.userData.dir;
            cc.children.forEach((p: any, pi: number) => {
              const t = ((time * 0.6 + pi * 0.17) % 1);
              const yT = dir === 1 ? t : 1 - t;
              p.position.y = -2.1 + yT * 4.2;
              p.scale.setScalar(0.6 + Math.sin(t * Math.PI) * 1.4);
              p.material.opacity = Math.sin(t * Math.PI) * 0.95;
              p.position.x = Math.sin(t * Math.PI * 3 + pi) * 0.12;
              p.position.z = Math.cos(t * Math.PI * 2.5 + pi * 0.7) * 0.12;
            });
          }
        });

        group.children.forEach((node) => {
          const nd = node as any;
          const ud = nd.userData as any;
          if (ud?.type === 'schoolNode') {
            const ang = ud.baseAngle + time * ud.orbitSpeed;
            nd.rotation.y = ang;
            nd.position.y = Math.sin(time * 0.9 + ud.baseAngle) * 0.35;
            const shardArm = (nd.children[0] as THREE.Group)?.children?.[0] as THREE.Group | undefined;
            if (shardArm) {
              shardArm.position.y = 0.35 + Math.sin(time * 1.6 + ud.baseAngle * 3) * 0.22;
              shardArm.rotation.y = time * 0.55 + ud.baseAngle;
              shardArm.children.forEach((sc) => {
                const scc = sc as any;
                if (scc.geometry?.type === 'OctahedronGeometry') {
                  scc.rotation.x = time * 1.1;
                  scc.rotation.z = time * 0.8;
                }
                if (scc.geometry?.type === 'IcosahedronGeometry' && scc.position.y > 1.6) {
                  const mat = scc.material as THREE.MeshStandardMaterial;
                  mat.emissiveIntensity = 0.9 + Math.abs(Math.sin(time * 4 + ud.baseAngle)) * 0.9;
                  scc.scale.setScalar(1 + Math.sin(time * 3.6 + ud.baseAngle) * 0.2);
                }
                if (scc.children?.length > 0 && scc.children[0]?.userData?.pIdx !== undefined) {
                  scc.children.forEach((pp: any) => {
                    if (pp.userData?.pIdx !== undefined) {
                      const tp = ((time * 1.4 + pp.userData.pIdx * 0.2) % 1);
                      pp.position.y = tp * 1.1 - 0.1;
                      pp.scale.setScalar(0.7 + Math.sin(tp * Math.PI) * 0.9);
                      pp.material.opacity = Math.sin(tp * Math.PI) * 0.95;
                    }
                  });
                }
                if (scc.children?.length > 0 && scc.children[0]?.userData?.curve !== undefined) {
                  scc.children.forEach((sp: any) => {
                    if (sp.userData?.curve) {
                      const tt = ((time * 0.55 + sp.userData.t) % 1);
                      const v = sp.userData.curve.getPointAt(tt);
                      sp.position.copy(v);
                      sp.scale.setScalar(0.7 + Math.sin(tt * Math.PI) * 0.7);
                      const m = sp.material as THREE.MeshStandardMaterial;
                      m.opacity = 0.3 + Math.sin(tt * Math.PI) * 0.7;
                    }
                  });
                }
              });
            }
          }
        });

        ambientGroup.children.forEach((m) => {
          const mote = m as any;
          const ud = mote.userData as any;
          ud.a += ud.speed * 0.002;
          ud.sway += 0.01;
          mote.position.x = Math.cos(ud.a) * ud.r + Math.sin(ud.sway) * 0.25;
          mote.position.z = Math.sin(ud.a) * ud.r + Math.cos(ud.sway) * 0.25;
          mote.position.y = ud.y + Math.sin(time * 0.8 + ud.sway) * 0.35;
          const mmat = mote.material as THREE.MeshBasicMaterial;
          mmat.opacity = 0.3 + Math.abs(Math.sin(time * 1.2 + ud.sway)) * 0.6;
        });
      }
    };
  };
  // ==========================================
  // 2. MESO VIEW: School Control Rack — Futuristic Modular Card System
  // ==========================================
  const buildMesoView = (group: THREE.Group, school: School) => {
    const classrooms = students
      .filter((s) => s.schoolId === school.id)
      .reduce<Map<string, { count: number; risk: number; ids: string[] }>>((acc, s) => {
        const key = s.classroomName || s.classroomId || ('Grado ' + s.grade);
        let entry = acc.get(key);
        if (!entry) { entry = { count: 0, risk: 0, ids: [] }; acc.set(key, entry); }
        entry.count++;
        const { simulatedProbability } = calculateStudentRiskWithInterventions(s, simulationParams);
        entry.risk += simulatedProbability;
        entry.ids.push(s.idHash);
        return acc;
      }, new Map());

    const classList = Array.from(classrooms.entries()).map(([name, data]) => ({
      name,
      count: data.count,
      avgRisk: data.count > 0 ? data.risk / data.count : 0,
      sampleId: data.ids[0],
      tier: data.count > 0 ? (data.risk / data.count) : 0
    }));

    const tierColor = (p: number) =>
      p > 0.65 ? 0xef4444 : p > 0.35 ? 0xf59e0b : 0x10b981;

    // =====================================================================
    // 1. CENTRAL PEDESTAL / CONSOLE SUPPORT  (Titanium pillars + base)
    // =====================================================================
    const pedestal = new THREE.Group();

    // Disc base (multi-step platform)
    for (let pl = 0; pl < 3; pl++) {
      const r = 7.4 - pl * 0.9;
      const h = pl === 0 ? 0.45 : 0.3;
      const mat = new THREE.MeshStandardMaterial({
        color: pl === 0 ? (theme === 'dark' ? 0x0b1220 : 0xdbeafe) : (theme === 'dark' ? 0x0f172a : 0xbfdbfe),
        metalness: 0.9,
        roughness: 0.15
      });
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(r, r + 0.1, h, 64), mat);
      disc.position.y = pl * 0.3;
      pedestal.add(disc);

      const glowMat = new THREE.MeshStandardMaterial({
        color: pl === 0 ? 0x22d3ee : 0xa78bfa,
        emissive: pl === 0 ? 0x06b6d4 : 0x818cf8,
        emissiveIntensity: 0.7,
        metalness: 0.9
      });
      const glow = new THREE.Mesh(new THREE.TorusGeometry(r - 0.02, 0.03, 10, 90), glowMat);
      glow.rotation.x = Math.PI / 2;
      glow.position.y = pl * 0.3 + h / 2;
      pedestal.add(glow);
    }
    const baseTopY = 2 * 0.3;

    // Four pillars at the corners
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.95,
      roughness: 0.1
    });
    const pillarPositions = [
      [-5.8, -3.2], [5.8, -3.2], [-5.8, 3.2], [5.8, 3.2]
    ];
    pillarPositions.forEach(([px, pz]) => {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.45, 6.2, 0.45), pillarMat);
      pillar.position.set(px, baseTopY + 3.1, pz);
      pedestal.add(pillar);

      // LED strip on each pillar
      const stripMat = new THREE.MeshStandardMaterial({
        color: 0x22d3ee,
        emissive: 0x06b6d4,
        emissiveIntensity: 0.9
      });
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 5.8, 0.02), stripMat);
      strip.position.set(px < 0 ? px - 0.24 : px + 0.24, baseTopY + 3.1, pz);
      (strip.userData as any) = { col: px < 0 ? 0.2 : 0.7 };
      pedestal.add(strip);
    });

    // Main Backplane (motherboard)
    const backMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x0b1a2e : 0xa5b4fc,
      metalness: 0.7,
      roughness: 0.25
    });
    const backplane = new THREE.Mesh(new THREE.BoxGeometry(12.2, 6.4, 0.45), backMat);
    backplane.position.set(0, baseTopY + 3.4, -0.22);
    pedestal.add(backplane);

    // Motherboard circuit pattern (fine grid lines)
    const circuitGroup = new THREE.Group();
    for (let gx = -5; gx <= 5; gx += 0.8) {
      const lane = new THREE.Mesh(
        new THREE.BoxGeometry(0.02, 5.6, 0.01),
        new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x06b6d4, emissiveIntensity: 0.4 })
      );
      lane.position.set(gx, 0, 0);
      circuitGroup.add(lane);
    }
    for (let gy = -2.5; gy <= 2.5; gy += 0.8) {
      const lane = new THREE.Mesh(
        new THREE.BoxGeometry(10.6, 0.02, 0.01),
        new THREE.MeshStandardMaterial({ color: 0xa78bfa, emissive: 0x818cf8, emissiveIntensity: 0.35 })
      );
      lane.position.set(0, gy, 0);
      circuitGroup.add(lane);
    }
    circuitGroup.position.set(0, baseTopY + 3.4, 0.02);
    pedestal.add(circuitGroup);

    group.add(pedestal);

    // =====================================================================
    // 2. CENTRAL SCHOOL CORE PROCESSOR (Top-center)
    // =====================================================================
    const coreProc = new THREE.Group();
    coreProc.position.set(0, baseTopY + 6.25, 1.3);

    const coreCageMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x1e293b : 0x93c5fd,
      metalness: 0.9,
      roughness: 0.15
    });
    const coreCage = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.2, 1.8), coreCageMat);
    coreProc.add(coreCage);

    // Inner glowing crystal (school identifier)
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      emissive: 0x818cf8,
      emissiveIntensity: 1.1,
      metalness: 0.4,
      roughness: 0.15,
      transparent: true,
      opacity: 0.9
    });
    const coreCrystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.55, 0), crystalMat);
    coreCrystal.position.set(0, 0, 0.05);
    coreProc.add(coreCrystal);

    // LED status strip on processor
    for (let led = 0; led < 12; led++) {
      const ledColor = led % 3 === 0 ? 0x22d3ee : led % 3 === 1 ? 0x10b981 : 0xfbbf24;
      const ledMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.05, 0.04),
        new THREE.MeshStandardMaterial({
          color: ledColor,
          emissive: ledColor,
          emissiveIntensity: 0.8
        })
      );
      ledMesh.position.set(-1.0 + led * 0.18, -0.68, 0.9);
      (ledMesh.userData as any) = { idx: led, base: ledColor };
      coreProc.add(ledMesh);
    }

    // Antenna mast on processor
    const mast2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.05, 0.85, 8),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95 })
    );
    mast2.position.set(0, 1.0, 0);
    coreProc.add(mast2);
    const mastTop = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.09, 0),
      new THREE.MeshStandardMaterial({
        color: 0xf472b6,
        emissive: 0xec4899,
        emissiveIntensity: 1.2
      })
    );
    mastTop.position.set(0, 1.45, 0);
    coreProc.add(mastTop);

    group.add(coreProc);

    // =====================================================================
    // 3. ROWS OF CLASSROOM CARDS (Insertable modular 3D cards in rack)
    // =====================================================================
    const cardsPerRow = 3;
    const cardRows = Math.max(2, Math.ceil(classList.length / cardsPerRow));
    const cardW = 3.2;
    const cardH = 1.6;
    const cardGapX = 0.5;
    const cardGapY = 0.4;
    const totalW = cardsPerRow * cardW + (cardsPerRow - 1) * cardGapX;
    const totalH = cardRows * cardH + (cardRows - 1) * cardGapY;
    const rackStartX = -totalW / 2 + cardW / 2;
    const rackStartY = baseTopY + 5.2;

    const cards: THREE.Group[] = [];

    classList.forEach((classroom, idx) => {
      const row = Math.floor(idx / cardsPerRow);
      const col = idx % cardsPerRow;
      const cx = rackStartX + col * (cardW + cardGapX);
      const cy = rackStartY - row * (cardH + cardGapY);
      const cz = 0.8;
      const colObj = new THREE.Color(tierColor(classroom.avgRisk));

      const cardGroup = new THREE.Group();
      cardGroup.position.set(cx, cy, cz);
      cards.push(cardGroup);

      // Card outer frame / chassis
      const chassisMat = new THREE.MeshStandardMaterial({
        color: theme === 'dark' ? 0x1e293b : 0xe0e7ff,
        metalness: 0.92,
        roughness: 0.13
      });
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(cardW, cardH, 0.75), chassisMat);
      cardGroup.add(chassis);

      // Card inner recessed screen area
      const screenGeo = new THREE.BoxGeometry(cardW - 0.32, cardH - 0.32, 0.05);
      const screenMat = new THREE.MeshStandardMaterial({
        color: theme === 'dark' ? 0x020617 : 0x0f172a,
        emissive: colObj,
        emissiveIntensity: 0.22,
        roughness: 0.25
      });
      const screen = new THREE.Mesh(screenGeo, screenMat);
      screen.position.z = 0.4;
      cardGroup.add(screen);

      // Tier-Color gradient trim on top/bottom of chassis
      const trimMat = new THREE.MeshStandardMaterial({
        color: colObj,
        emissive: colObj,
        emissiveIntensity: 0.75,
        metalness: 0.8,
        roughness: 0.1
      });
      const topTrim = new THREE.Mesh(new THREE.BoxGeometry(cardW, 0.08, 0.77), trimMat);
      topTrim.position.set(0, cardH / 2 - 0.04, 0);
      cardGroup.add(topTrim);
      const botTrim = topTrim.clone();
      botTrim.position.set(0, -cardH / 2 + 0.04, 0);
      cardGroup.add(botTrim);

      // Card handle / pull tab (front bottom-center)
      const handle = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.12, 0.22),
        new THREE.MeshStandardMaterial({
          color: 0x475569,
          metalness: 0.95,
          roughness: 0.08
        })
      );
      handle.position.set(0, -cardH / 2 + 0.25, 0.52);
      cardGroup.add(handle);

      // Status LEDs (left column - 4 indicators)
      const ledColors = [0x22d3ee, 0x10b981, 0xfbbf24, 0xef4444];
      for (let l = 0; l < 4; l++) {
        const lm = new THREE.MeshStandardMaterial({
          color: ledColors[l],
          emissive: ledColors[l],
          emissiveIntensity: 0.9
        });
        const ledM = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 10), lm);
        ledM.rotation.x = Math.PI / 2;
        ledM.position.set(-cardW / 2 + 0.15, -0.45 + l * 0.3, 0.41);
        (ledM.userData as any) = { ledIdx: l };
        cardGroup.add(ledM);
      }

      // "Vent" grille pattern on the card sides
      for (let v = 0; v < 7; v++) {
        const vent = new THREE.Mesh(
          new THREE.BoxGeometry(0.22, 0.06, 0.78),
          new THREE.MeshStandardMaterial({ color: 0x020617, roughness: 0.6 })
        );
        vent.position.set(cardW / 2 - 0.22, -0.5 + v * 0.17, 0);
        cardGroup.add(vent);
      }

      // Heat pipes / cooling tubes along back of card
      const pipeMat = new THREE.MeshStandardMaterial({
        color: 0xfbbf24,
        emissive: 0xd97706,
        emissiveIntensity: 0.45,
        metalness: 0.95,
        roughness: 0.08
      });
      for (let hp = 0; hp < 2; hp++) {
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, cardH * 0.9, 12), pipeMat);
        pipe.position.set(-0.4 + hp * 0.8, 0, -0.4);
        cardGroup.add(pipe);

        // Particles flowing through pipes
        for (let fp = 0; fp < 3; fp++) {
          const flow = new THREE.Mesh(
            new THREE.SphereGeometry(0.05, 10, 10),
            new THREE.MeshStandardMaterial({
              color: 0xfde047,
              emissive: 0xfacc15,
              emissiveIntensity: 1.2,
              transparent: true,
              opacity: 0.95
            })
          );
          (flow.userData as any) = { slot: hp, t: fp * 0.33 };
          cardGroup.add(flow);
        }
      }

      // Cooler fans on top of card
      for (let f = 0; f < 2; f++) {
        const fanGroup = new THREE.Group();
        const fanHousing = new THREE.Mesh(
          new THREE.CylinderGeometry(0.25, 0.25, 0.1, 20),
          new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.8, roughness: 0.3 })
        );
        fanGroup.add(fanHousing);
        const fanBlades = new THREE.Group();
        for (let b = 0; b < 5; b++) {
          const blade = new THREE.Mesh(
            new THREE.BoxGeometry(0.45, 0.04, 0.06),
            new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9 })
          );
          blade.rotation.y = (b / 5) * Math.PI * 2;
          fanBlades.add(blade);
        }
        fanGroup.add(fanBlades);
        (fanBlades.userData as any) = { fan: f };
        fanGroup.position.set(-0.7 + f * 1.4, cardH / 2 + 0.06, 0);
        cardGroup.add(fanGroup);
      }

      // Hologram halo ring floating above the card (based on risk)
      const haloMat = new THREE.MeshStandardMaterial({
        color: colObj,
        emissive: colObj,
        emissiveIntensity: 0.9,
        metalness: 0.9,
        roughness: 0.08,
        transparent: true,
        opacity: 0.8
      });
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.055, 10, 60), haloMat);
      halo.rotation.x = Math.PI / 2;
      halo.position.set(0, cardH / 2 + 0.75, 0.3);
      (halo.userData as any) = { halo: true };
      cardGroup.add(halo);

      // Secondary halo ring (perpendicular, for high-risk cards)
      if (classroom.avgRisk > 0.35) {
        const halo2 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.04, 10, 60), haloMat.clone());
        ((halo2 as any).material as THREE.MeshStandardMaterial).opacity = 0.65;
        halo2.rotation.x = Math.PI / 3;
        halo2.rotation.y = Math.PI / 4;
        halo2.position.copy(halo.position);
        cardGroup.add(halo2);
      }

      // DATA CABLE running from card backplane down to back
      const cableStart = new THREE.Vector3(0, 0, -0.38);
      const cableEnd = new THREE.Vector3(cx, cy - 1.6, -0.15);
      const cableCurve = new THREE.QuadraticBezierCurve3(
        cableStart.clone(),
        new THREE.Vector3(cableStart.x + Math.sin(idx) * 0.2, cableStart.y - 0.9, cableStart.z - 0.3),
        new THREE.Vector3(0, 0, -cableStart.z - 0.15).add(cableStart).sub(cableStart).multiplyScalar(0)
      );
      const cableCurveReal = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, -0.45),
        new THREE.Vector3(Math.sin(idx * 0.9) * 0.3, -0.9, -0.6),
        new THREE.Vector3(0, -1.8, -1.1)
      );
      const cableMesh = new THREE.Mesh(
        new THREE.TubeGeometry(cableCurveReal, 30, 0.055, 8, false),
        new THREE.MeshStandardMaterial({
          color: colObj,
          emissive: colObj,
          emissiveIntensity: 0.55,
          metalness: 0.9,
          roughness: 0.15,
          transparent: true,
          opacity: 0.75
        })
      );
      cardGroup.add(cableMesh);

      // Data pulses traveling up & down through the cable
      const pulseGroup = new THREE.Group();
      for (let p = 0; p < 3; p++) {
        const pulse = new THREE.Mesh(
          new THREE.SphereGeometry(0.075, 12, 12),
          new THREE.MeshStandardMaterial({
            color: colObj,
            emissive: colObj,
            emissiveIntensity: 1.4,
            transparent: true,
            opacity: 0.95
          })
        );
        (pulse.userData as any) = { t: p * 0.33, curve: cableCurveReal };
        pulseGroup.add(pulse);
      }
      cardGroup.add(pulseGroup);

      // Register classroom clickable
      const clickTarget = screen;
      clickableObjectsRef.current.push({
        mesh: clickTarget as THREE.Mesh,
        data: {
          id: 'class-' + idx,
          name: classroom.name,
          schoolId: school.id,
          grade: classroom.name,
          capacity: classroom.count
        } as any,
        type: 'classroom'
      });

      group.add(cardGroup);
    });

    // =====================================================================
    // 4. AMBIENT DATA PARTICLES floating between cards & core
    // =====================================================================
    const ambientMeso = new THREE.Group();
    for (let amp = 0; amp < 60; amp++) {
      const sz = 0.025 + Math.random() * 0.04;
      const col = Math.random() < 0.5 ? 0x22d3ee : 0xa78bfa;
      const mote = new THREE.Mesh(
        new THREE.SphereGeometry(sz, 8, 8),
        new THREE.MeshBasicMaterial({
          color: col,
          transparent: true,
          opacity: 0.3 + Math.random() * 0.6
        })
      );
      mote.position.set(
        -6 + Math.random() * 12,
        baseTopY + 1 + Math.random() * 5,
        -0.5 + Math.random() * 2.2
      );
      (mote.userData as any) = {
        ox: mote.position.x,
        oy: mote.position.y,
        oz: mote.position.z,
        ph: Math.random() * Math.PI * 2
      };
      ambientMeso.add(mote);
    }
    group.add(ambientMeso);

    // =====================================================================
    // 5. ANIMATION ORCHESTRATOR
    // =====================================================================
    group.userData = {
      animate: (time: number, _delta: number) => {
        // Core processor crystal
        coreCrystal.rotation.y = time * 0.8;
        coreCrystal.rotation.x = time * 0.4;
        coreCrystal.scale.setScalar(1 + Math.sin(time * 2.2) * 0.1);
        mastTop.rotation.y = time * 0.7;
        mastTop.scale.setScalar(1 + Math.sin(time * 3.1) * 0.2);
        const m = (mastTop.material as THREE.MeshStandardMaterial);
        m.emissiveIntensity = 1.0 + Math.abs(Math.sin(time * 5)) * 0.8;

        coreProc.children.forEach((c) => {
          const cc = c as any;
          if (cc.userData?.idx !== undefined && cc.geometry?.type === 'BoxGeometry' && cc.scale.y === 0.05) {
            const ccMat = cc.material as THREE.MeshStandardMaterial;
            ccMat.emissiveIntensity = 0.4 + Math.abs(Math.sin(time * 4 + cc.userData.idx * 0.8)) * 0.9;
          }
        });

        // Pedestal strip lights
        pedestal.children.forEach((p) => {
          const pp = p as any;
          if (pp.userData?.col !== undefined) {
            const mat = pp.material as THREE.MeshStandardMaterial;
            mat.emissiveIntensity = 0.6 + Math.abs(Math.sin(time * 2.5 + pp.userData.col * 6)) * 0.7;
          }
        });

        // Each classroom card
        cards.forEach((card, ci) => {
          const udT = time + ci * 0.37;
          card.position.z = 0.8 + Math.sin(udT * 1.1) * 0.08;
          card.rotation.x = Math.sin(udT * 0.7) * 0.015;
          card.rotation.y = Math.sin(udT * 0.55) * 0.02;

          card.children.forEach((ch) => {
            const c = ch as any;
            const ccud = c.userData as any;

            // Blink LEDs
            if (ccud?.ledIdx !== undefined) {
              const m = c.material as THREE.MeshStandardMaterial;
              m.emissiveIntensity = 0.3 + Math.abs(Math.sin(time * 5 + ccud.ledIdx + ci)) * 1.0;
            }

            // Halo rings pulse + rotate
            if (ccud?.halo === true) {
              c.rotation.z = time * 0.6 + ci;
              c.scale.setScalar(0.9 + Math.sin(time * 2.4 + ci) * 0.15);
            }

            // Fan blades spin
            if (c.type === 'Group' && ccud?.fan !== undefined) {
              c.rotation.y = time * (6 + ccud.fan * 2) + ci;
            }
          });

          // Flowing particles inside heat pipes
          card.children.forEach((ch) => {
            const c = ch as any;
            const ccud = c.userData as any;
            if (ccud?.slot !== undefined && ccud?.t !== undefined && ccud.curve === undefined) {
              const t = ((time * 0.8 + ccud.t) % 1);
              c.position.set(-0.4 + ccud.slot * 0.8, -cardH / 2 + 0.12 + t * (cardH - 0.24), -0.4);
              c.scale.setScalar(0.6 + Math.sin(t * Math.PI) * 1.0);
              (c.material as any).opacity = Math.sin(t * Math.PI) * 0.95;
            }
            // Data pulses traveling through cable
            if (ccud?.curve !== undefined && ccud?.t !== undefined) {
              const tt = ((time * 0.5 + ccud.t) % 1);
              const v = ccud.curve.getPointAt(tt);
              c.position.copy(v);
              c.scale.setScalar(0.7 + Math.sin(tt * Math.PI) * 0.7);
            }
          });
        });

        // Ambient motes drift
        ambientMeso.children.forEach((m, idx) => {
          const mm = m as any;
          const ud = mm.userData as any;
          ud.ph += 0.01;
          mm.position.x = ud.ox + Math.sin(ud.ph) * 0.35;
          mm.position.y = ud.oy + Math.cos(ud.ph * 1.3) * 0.25;
          mm.position.z = ud.oz + Math.sin(ud.ph * 0.8 + idx * 0.4) * 0.2;
          const mmat = mm.material as THREE.MeshBasicMaterial;
          mmat.opacity = 0.3 + Math.abs(Math.sin(ud.ph * 2)) * 0.6;
        });
      }
    };
  };

  // ==========================================
  // 3. MICRO VIEW: Student 3D Risk Footprint (Immersive Hologram)
  // ==========================================
  const buildMicroView = (group: THREE.Group, student: Student) => {
    const { simulatedProbability, simulatedTier, updatedShap } = calculateStudentRiskWithInterventions(student, simulationParams);

    let tierColor = '#10b981';
    if (simulatedTier === 'high') tierColor = '#ef4444';
    else if (simulatedTier === 'medium') tierColor = '#f59e0b';

    // 1. Multi-tier Hologram Platform / Pedestal
    const outerPadGeo = new THREE.CylinderGeometry(3.1, 3.4, 0.12, 48);
    const outerPadMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x0c0f16 : 0xe2e8f0,
      metalness: 0.5,
      roughness: 0.4
    });
    const outerPad = new THREE.Mesh(outerPadGeo, outerPadMat);
    outerPad.position.y = -0.38;
    outerPad.receiveShadow = true;
    group.add(outerPad);

    const midPadGeo = new THREE.CylinderGeometry(2.6, 2.8, 0.18, 48);
    const midPadMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x111827 : 0xcbd5e1,
      metalness: 0.7,
      roughness: 0.3
    });
    const midPad = new THREE.Mesh(midPadGeo, midPadMat);
    midPad.position.y = -0.23;
    midPad.receiveShadow = true;
    group.add(midPad);

    const basePedestalGeo = new THREE.CylinderGeometry(2.1, 2.3, 0.3, 48);
    const basePedestalMat = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x0f172a : 0xe2e8f0,
      metalness: 0.75,
      roughness: 0.25
    });
    const pedestal = new THREE.Mesh(basePedestalGeo, basePedestalMat);
    pedestal.position.y = 0;
    pedestal.receiveShadow = true;
    group.add(pedestal);

    // Tier-colored glowing accent rings in pedestal
    for (let r = 0; r < 3; r++) {
      const ringGeo = new THREE.TorusGeometry(2.05 - r * 0.3, 0.03, 10, 64);
      const ringMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(tierColor),
        emissive: new THREE.Color(tierColor),
        emissiveIntensity: 1.0 - r * 0.25,
        metalness: 0.9,
        roughness: 0.1
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.12 - r * 0.06;
      ring.userData = { animate: (time: number) => { ring.rotation.z = time * (r % 2 === 0 ? 0.5 : -0.5); } };
      group.add(ring);
    }

    // 2. Projection floor light cone (hologram beam)
    const beamGeo = new THREE.CylinderGeometry(0.4, 2.0, 2.8, 40, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tierColor),
      transparent: true,
      opacity: 0.09,
      side: THREE.DoubleSide
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.y = 1.4;
    group.add(beam);

    // 3. Stylized 3D Student Hologram Avatar Figure (Anatomical details)
    const avatarGroup = new THREE.Group();
    avatarGroup.position.set(0, 0.15, 0);

    const avatarMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(tierColor),
      roughness: 0.22,
      metalness: 0.42,
      emissive: new THREE.Color(tierColor),
      emissiveIntensity: theme === 'dark' ? 0.55 : 0.25,
      flatShading: true
    });

    // Hips / Pelvis
    const hips = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.28, 0.42), avatarMat);
    hips.position.y = 0.62;
    hips.castShadow = true;
    avatarGroup.add(hips);

    // Legs (left/right)
    [-1, 1].forEach((side) => {
      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.5, 10), avatarMat);
      thigh.position.set(side * 0.18, 0.22, 0);
      thigh.castShadow = true;
      avatarGroup.add(thigh);
      const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.11, 0.48, 10), avatarMat);
      shin.position.set(side * 0.18, -0.28, 0);
      shin.castShadow = true;
      avatarGroup.add(shin);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.28), avatarMat);
      foot.position.set(side * 0.18, -0.58, 0.08);
      avatarGroup.add(foot);
    });

    // Torso (upper body)
    const torsoGeo = new THREE.CylinderGeometry(0.32, 0.42, 0.9, 14);
    const torso = new THREE.Mesh(torsoGeo, avatarMat);
    torso.position.y = 1.22;
    torso.castShadow = true;
    avatarGroup.add(torso);

    // Arms (left/right)
    [-1, 1].forEach((side) => {
      const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.5, 10), avatarMat);
      upperArm.position.set(side * 0.48, 1.28, 0);
      upperArm.rotation.z = side * 0.35;
      upperArm.castShadow = true;
      avatarGroup.add(upperArm);
      const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.10, 0.46, 10), avatarMat);
      forearm.position.set(side * 0.72, 1.0, 0);
      forearm.rotation.z = side * 0.55;
      forearm.castShadow = true;
      avatarGroup.add(forearm);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 12), avatarMat);
      hand.position.set(side * 0.88, 0.78, 0);
      avatarGroup.add(hand);
    });

    // Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.18, 12), avatarMat);
    neck.position.y = 1.78;
    avatarGroup.add(neck);

    // Head (detailed)
    const headGroup = new THREE.Group();
    const headGeo = new THREE.SphereGeometry(0.33, 20, 20);
    const head = new THREE.Mesh(headGeo, avatarMat);
    head.castShadow = true;
    headGroup.add(head);

    // Cranial detail cap
    const craniumCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.34, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2.2),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(tierColor),
        emissive: new THREE.Color(tierColor),
        emissiveIntensity: theme === 'dark' ? 0.85 : 0.45,
        wireframe: true,
        transparent: true,
        opacity: 0.85
      })
    );
    headGroup.add(craniumCap);

    // Holographic Visor / Face Ring (tier colored)
    const visorGeo = new THREE.TorusGeometry(0.34, 0.045, 14, 36);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.95,
      roughness: 0.05,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.95
    });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.rotation.x = Math.PI / 2;
    visor.position.y = 0.02;
    headGroup.add(visor);

    // Visor projection bars (hologram UI over eyes)
    const visorBar1 = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.015, 0.04),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee })
    );
    visorBar1.position.set(0, 0.04, 0.3);
    headGroup.add(visorBar1);
    const visorBar2 = visorBar1.clone();
    visorBar2.scale.set(0.6, 1, 1);
    visorBar2.position.set(0, -0.02, 0.3);
    headGroup.add(visorBar2);

    headGroup.position.y = 2.02;
    avatarGroup.add(headGroup);

    // 4. Multi-tier SHAP Risk Factor Orbital Rings (Satellite style)
    const orbitalGroup = new THREE.Group();
    const factorCount = Math.min(6, updatedShap.length);

    const orbitRadii = [1.7, 2.1, 2.5];
    const orbitInclines = [0.25, -0.35, 0.15];
    const orbitDirs = [1, -1, 1];

    updatedShap.slice(0, factorCount).forEach((factor, idx) => {
      const orbitIdx = idx % orbitRadii.length;
      const orbitalRadius = orbitRadii[orbitIdx];
      const orbitalIncline = orbitInclines[orbitIdx];
      const orbitDir = orbitDirs[orbitIdx];
      const angle = (idx / factorCount) * Math.PI * 2;
      const factorColor = factor.contribution > 0 ? '#ef4444' : '#10b981';

      const factorNodeGroup = new THREE.Group();
      const baseX = Math.cos(angle) * orbitalRadius;
      const baseZ = Math.sin(angle) * orbitalRadius;
      factorNodeGroup.position.set(baseX, 1.3 + Math.sin(angle) * 0.5, baseZ);

      // Orbit trail ring (parent level)
      const orbitTrail = new THREE.Mesh(
        new THREE.TorusGeometry(orbitalRadius, 0.02, 8, 80),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(factorColor),
          emissive: new THREE.Color(factorColor),
          emissiveIntensity: 0.45,
          metalness: 0.6,
          transparent: true,
          opacity: 0.55
        })
      );
      orbitTrail.rotation.x = Math.PI / 2 + orbitalIncline;
      orbitTrail.rotation.z = orbitalIncline * 0.5;
      orbitTrail.position.set(0, 1.3, 0);
      orbitalGroup.add(orbitTrail);

      // Core node (icosahedron for crystalline look)
      const nodeCoreGeo = new THREE.IcosahedronGeometry(0.24, 0);
      const nodeCoreMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(factorColor),
        emissive: new THREE.Color(factorColor),
        emissiveIntensity: 1.0,
        roughness: 0.15,
        metalness: 0.75,
        flatShading: true
      });
      const nodeCore = new THREE.Mesh(nodeCoreGeo, nodeCoreMat);
      factorNodeGroup.add(nodeCore);

      // Halo around node
      const nodeHalo = new THREE.Mesh(
        new THREE.TorusGeometry(0.38, 0.02, 8, 32),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(factorColor),
          transparent: true,
          opacity: 0.7
        })
      );
      nodeHalo.rotation.x = Math.random() * Math.PI;
      factorNodeGroup.add(nodeHalo);

      // Glowing connection line back to avatar chest
      const linePoints: THREE.Vector3[] = [];
      const lineSteps = 16;
      for (let ls = 0; ls <= lineSteps; ls++) {
        const lt = ls / lineSteps;
        const lx = (1 - lt) * baseX;
        const ly = 1.22 + (1 - lt) * (Math.sin(angle) * 0.5);
        const lz = (1 - lt) * baseZ;
        const curve = Math.sin(lt * Math.PI) * 0.5;
        linePoints.push(new THREE.Vector3(lx, ly + curve, lz));
      }
      const lineCurve = new THREE.CatmullRomCurve3(linePoints);
      const lineTubeGeo = new THREE.TubeGeometry(lineCurve, 30, 0.022, 6, false);
      const lineMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(factorColor),
        transparent: true,
        opacity: 0.55
      });
      const linkLine = new THREE.Mesh(lineTubeGeo, lineMat);
      orbitalGroup.add(linkLine);

      factorNodeGroup.userData = {
        baseAngle: angle,
        orbitIdx,
        orbitRadius: orbitalRadius,
        orbitIncline: orbitalIncline,
        orbitDir,
        orbitSpeed: 0.18 + (idx % 3) * 0.05
      };

      orbitalGroup.add(factorNodeGroup);

      clickableObjectsRef.current.push({
        mesh: nodeCore,
        data: factor,
        type: 'studentNode'
      });
    });

    avatarGroup.add(orbitalGroup);

    // 5. Outer Holographic Shield / Data Dome
    const shieldGeo = new THREE.SphereGeometry(2.9, 40, 40, 0, Math.PI * 2, 0, Math.PI / 2 + 0.1);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tierColor),
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      wireframe: true
    });
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    shield.position.y = 1.2;
    avatarGroup.add(shield);

    // Inner shield solid layer
    const innerShieldGeo = new THREE.CylinderGeometry(2.55, 2.55, 2.8, 48, 1, true);
    const innerShieldMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(tierColor),
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
      metalness: 0.5,
      roughness: 0.1,
      emissive: new THREE.Color(tierColor),
      emissiveIntensity: 0.2
    });
    const innerShield = new THREE.Mesh(innerShieldGeo, innerShieldMat);
    innerShield.position.y = 1.3;
    avatarGroup.add(innerShield);

    // 6. Rotating data hex grid at pedestal top
    const hexGroup = new THREE.Group();
    hexGroup.position.y = 0.02;
    for (let hx = -3; hx <= 3; hx++) {
      for (let hz = -3; hz <= 3; hz++) {
        const dist = Math.sqrt(hx * hx + hz * hz);
        if (dist > 3.2) continue;
        const hex = new THREE.Mesh(
          new THREE.CylinderGeometry(0.22, 0.22, 0.02, 6),
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(tierColor),
            emissive: new THREE.Color(tierColor),
            emissiveIntensity: 0.25 + Math.random() * 0.4,
            metalness: 0.6,
            roughness: 0.2,
            transparent: true,
            opacity: 0.35 + Math.random() * 0.35
          })
        );
        hex.position.set(
          hx * 0.42 + (hz % 2 === 0 ? 0 : 0.21),
          0,
          hz * 0.36
        );
        hexGroup.add(hex);
      }
    }
    group.add(hexGroup);

    // 7. Vertical data stream pillars (4 corners)
    const streamColors = [0x22d3ee, 0xa78bfa, 0xf472b6, 0xfbbf24];
    for (let sc = 0; sc < 4; sc++) {
      const sa = (sc / 4) * Math.PI * 2 + Math.PI / 4;
      const streamGroup = new THREE.Group();
      streamGroup.position.set(Math.cos(sa) * 2.8, 0, Math.sin(sa) * 2.8);

      // Stream particles stacked
      for (let sp = 0; sp < 8; sp++) {
        const p = new THREE.Mesh(
          new THREE.BoxGeometry(0.08, 0.18, 0.08),
          new THREE.MeshStandardMaterial({
            color: streamColors[sc],
            emissive: streamColors[sc],
            emissiveIntensity: 1.0,
            transparent: true,
            opacity: 0.85
          })
        );
        p.userData = { particleIdx: sp, streamIdx: sc };
        streamGroup.add(p);
      }
      streamGroup.userData = {
        animate: (time: number) => {
          streamGroup.children.forEach((p, idx) => {
            const mesh = p as THREE.Mesh;
            const t = (time * 0.7 + idx * 0.18) % 1.0;
            mesh.position.y = t * 3.2;
            mesh.scale.setScalar(1 - Math.abs(t - 0.5) * 1.3);
            (mesh.material as THREE.MeshStandardMaterial).opacity = 0.9 - t * 0.7;
            mesh.rotation.y = time * 2;
          });
        }
      };
      group.add(streamGroup);
    }

    // Main animation orchestrator
    avatarGroup.userData = {
      animate: (time: number) => {
        // Gentle avatar float
        avatarGroup.position.y = 0.15 + Math.sin(time * 1.4) * 0.12;
        avatarGroup.rotation.y = Math.sin(time * 0.4) * 0.2;

        // Head bobbing
        headGroup.position.y = 2.02 + Math.sin(time * 2.2) * 0.05;
        craniumCap.rotation.y = time * 0.7;
        visor.rotation.z = Math.sin(time * 2.5) * 0.08;
        visorBar1.scale.x = 0.85 + Math.sin(time * 4.2) * 0.15;
        visorBar2.scale.x = 0.5 + Math.sin(time * 5.1 + 1.0) * 0.25;

        // Arms gentle swing
        avatarGroup.children.forEach((ch) => {
          if (ch.type === 'Mesh' && (ch as THREE.Mesh).geometry.type === 'CylinderGeometry'
            && (ch as THREE.Mesh).position.y > 0.9 && (ch as THREE.Mesh).position.y < 1.4
            && Math.abs((ch as THREE.Mesh).position.x) > 0.3) {
            const m = ch as THREE.Mesh;
            const side = Math.sign(m.position.x);
            m.rotation.z = side * (0.35 + Math.sin(time * 1.8) * 0.12);
          }
        });

        // Shield layers counter-rotate
        shield.rotation.y = time * 0.15;
        innerShield.rotation.y = -time * 0.1;

        // Orbital elements
        orbitalGroup.rotation.y = time * 0.22;
        orbitalGroup.children.forEach((child) => {
          if ((child as any).userData?.baseAngle !== undefined) {
            const fn = child as THREE.Group;
            const u = fn.userData as any;
            const t = time * u.orbitSpeed * u.orbitDir + u.baseAngle;
            const inc = u.orbitIncline;
            const r = u.orbitRadius;
            fn.position.x = Math.cos(t) * r;
            fn.position.z = Math.sin(t) * r;
            fn.position.y = 1.3 + Math.sin(t * 2) * 0.4 + Math.sin(t) * r * Math.sin(inc);
            fn.rotation.y = time * 2;
            fn.rotation.x = time * 1.6;
            // halo rotate
            if (fn.children[1]) {
              fn.children[1].rotation.x = time * 1.2;
              fn.children[1].rotation.z = time * 1.8;
            }
          }
        });

        // Hex grid rotation
        hexGroup.rotation.y = time * 0.08;
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
    if (embeddedMode) return;
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
    const aspectScale = Math.min(1, cameraRef.current?.aspect || 1);
    if (level === 'macro') {
      cameraSphericalRef.current = { radius: 34 / aspectScale, theta: Math.PI / 5, phi: Math.PI / 2.6 };
      targetCenterRef.current.set(0, 0.5, 0);
    } else if (level === 'meso') {
      cameraSphericalRef.current = { radius: 24 / aspectScale, theta: Math.PI / 6, phi: Math.PI / 2.4 };
      targetCenterRef.current.set(0, 1.5, 0);
    } else {
      cameraSphericalRef.current = { radius: 9 / aspectScale, theta: Math.PI / 4, phi: Math.PI / 2.3 };
      targetCenterRef.current.set(0, 1.2, 0);
    }
    updateCameraPosition();
  };

  return (
    <div
      id="digital-twin-viewport-container"
      className="digital-twin-stage relative w-full h-full min-h-[460px] lg:min-h-[580px] overflow-hidden select-none"
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
      >
        <canvas
          ref={canvasRef}
          aria-label={language === 'es' ? 'Visualización 3D del gemelo digital' : 'Digital twin 3D visualization'}
          className="block h-full w-full"
        />
      </div>

      {/* Top HUD: Level Navigation Breadcrumb */}
      {!embeddedMode && <div className="twin-floating-control absolute top-4 left-4 z-20 flex flex-wrap items-center gap-1.5 px-2 py-2 rounded-lg text-xs sm:text-sm font-medium">
        <button
          id="btn-macro-level"
          onClick={() => setLevel('macro')}
          className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
            level === 'macro'
              ? 'twin-tab-active font-semibold'
              : 'twin-tab-passive'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{t.twinLevels.macro.split(':')[0]}</span>
        </button>

        <span className="text-slate-600 px-0.5">/</span>

        <button
          id="btn-meso-level"
          onClick={() => setLevel('meso')}
          className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
            level === 'meso'
              ? 'twin-tab-active font-semibold'
              : 'twin-tab-passive'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>{t.twinLevels.meso.split(':')[0]}</span>
        </button>

        <span className="text-slate-600 px-0.5">/</span>

        <button
          id="btn-micro-level"
          onClick={() => setLevel('micro')}
          className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
            level === 'micro'
              ? 'twin-tab-active font-semibold'
              : 'twin-tab-passive'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.twinLevels.micro.split(':')[0]}</span>
        </button>
      </div>}

      {/* Top Right Context Badge */}
      <div className="twin-floating-control absolute top-4 right-14 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-xs">
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="font-medium text-slate-700 dark:text-slate-300">
          {level === 'macro' && `${schools.length} ${language === 'es' ? 'Planteles en Red' : 'Schools in Network'}`}
          {level === 'meso' && (selectedSchool?.name || schools[0]?.name || (language === 'es' ? 'Sin unidad seleccionada' : 'No school selected'))}
          {level === 'micro' && `${selectedStudent?.anonymousId || '#STD-7489X'} (Anon ID)`}
        </span>
      </div>

      {/* Floating 3D Interaction Tooltip */}
      {hoveredLabel && (
        <div
          className="pointer-events-none absolute z-30 transform -translate-x-1/2 -translate-y-full mb-3 bg-slate-950/95 text-white text-xs px-3 py-2 rounded-md shadow-xl border border-slate-700/80 backdrop-blur-sm max-w-xs transition-opacity duration-150"
          style={{ left: hoveredLabel.x, top: hoveredLabel.y }}
        >
          <p className="font-semibold text-slate-100">{hoveredLabel.text}</p>
          {hoveredLabel.subtext && <p className="text-sky-300 text-[11px] mt-0.5">{hoveredLabel.subtext}</p>}
        </div>
      )}

      {/* Bottom Floating Control Bar */}
      <div className="twin-floating-control absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-20 flex items-center justify-between sm:justify-end gap-2 p-1.5 rounded-lg">
        <div className="flex items-center gap-1">
          <button
            id="btn-camera-zoom-in"
            onClick={zoomIn}
            title="Zoom In"
            className="p-2 rounded-md text-slate-300 hover:bg-slate-800/80 transition"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            id="btn-camera-zoom-out"
            onClick={zoomOut}
            title="Zoom Out"
            className="p-2 rounded-md text-slate-300 hover:bg-slate-800/80 transition"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            id="btn-camera-rotate-toggle"
            onClick={() => setAutoRotate(!autoRotate)}
            title="Auto Rotate"
            className={`p-2 rounded-md transition ${
              autoRotate
                ? 'bg-teal-500/15 text-teal-200 font-medium'
                : 'text-slate-300 hover:bg-slate-800/80'
            }`}
          >
            <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} />
          </button>
          <button
            id="btn-camera-reset"
            onClick={resetCamera}
            title="Reset Camera"
            className="p-2 rounded-md text-slate-300 hover:bg-slate-800/80 transition"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Legend Traffic Light */}
        <div className="hidden md:flex items-center gap-3 pl-3 pr-2 border-l border-slate-700/80 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-400 text-[11px]">{t.riskTiers.lowShort} (&lt;35%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-slate-400 text-[11px]">{t.riskTiers.mediumShort} (35-65%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="text-slate-400 text-[11px]">{t.riskTiers.highShort} (&gt;65%)</span>
          </div>
        </div>
      </div>

      {/* Subtle bottom hint */}
      <div className="absolute bottom-4 left-4 z-10 hidden lg:block text-[11px] text-slate-500 pointer-events-none bg-slate-950/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
        {t.twinLevels.controlsHint}
      </div>
    </div>
  );
};
