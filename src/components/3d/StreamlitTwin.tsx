import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { DigitalTwinCanvas } from './DigitalTwinCanvas';
import { School, Student, Classroom, TwinLevel } from '../../types';

const data = JSON.parse(document.getElementById('twin-data')!.textContent!);

function Twin() {
  const [level, setLevel] = useState<TwinLevel>(data.level || 'macro');
  const [school, setSchool] = useState<School>(data.schools.find((s: School) => s.id === data.schoolId) || data.schools[0]);
  const [student, setStudent] = useState<Student>(data.students.find((s: Student) => s.idHash === data.studentId) || data.students[0]);
  const [classroom, setClassroom] = useState<Classroom | null>(null);
  return <main className={data.embedded ? 'embedded-twin' : ''}>
    {!data.embedded && <div className="selection-bar">
      <span>GEMELO DIGITAL</span>
      {level === 'micro' ? <select aria-label="Estudiante del gemelo" value={student.idHash} onChange={e => setStudent(data.students.find((s: Student) => s.idHash === e.target.value))}>
        {data.students.map((s: Student) => <option key={s.idHash} value={s.idHash}>{s.anonymousId}</option>)}
      </select> : <select aria-label="Unidad del gemelo" value={school.id} onChange={e => {setSchool(data.schools.find((s: School) => s.id === e.target.value)); setClassroom(null);}}>
        {data.schools.map((s: School) => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>}
    </div>}
    <DigitalTwinCanvas level={level} setLevel={setLevel} schools={data.schools} students={data.students}
      selectedSchool={school} setSelectedSchool={s => {if(s) setSchool(s);}} selectedStudent={student}
      setSelectedStudent={s => {if(s) setStudent(s);}} selectedClassroom={classroom} setSelectedClassroom={setClassroom}
      simulationParams={data.simulation} theme="dark" language={data.language || 'es'} embeddedMode={Boolean(data.embedded)} />
  </main>;
}

class SceneBoundary extends React.Component<React.PropsWithChildren, {error: string}> {
  state = {error: ''};
  static getDerivedStateFromError(error: Error) { return {error: error.message}; }
  render() { return this.state.error ? <p role="alert">No se pudo iniciar el visor 3D: {this.state.error}</p> : this.props.children; }
}
createRoot(document.getElementById('root')!).render(<SceneBoundary><Twin /></SceneBoundary>);
