import { useState, useMemo, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentFilters from './components/StudentFilters';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import './App.css'
import GothicCoder from './assets/Gothic-coder-.png';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('students');
    if (saved) {
      setStudents(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    const saved = localStorage.getItem('selectedId');
    if (saved) setSelectedId(saved);
  }, []);

  useEffect(() => {
    if (selectedId !== null) {
      localStorage.setItem('selectedId', selectedId);
    }
  }, [selectedId]);

  const handleAddOrUpdate = (studentData) => {
    if (studentData.id) {
      setStudents(prev =>
        prev.map(s =>
          s.id === studentData.id ? { ...s, ...studentData, updatedAt: Date.now() } : s
        )
      );
    } else {
      const newStudent = {
        ...studentData,
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      setStudents(prev => [...prev, newStudent]);
    }
    setEditingStudent(null);
  };

  const handleDelete = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const handleSelect = (id) => setSelectedId(id);

  const handleEdit = (student) => setEditingStudent(student);

  const handleUpdateNotes = (id, notes) => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, notes, updatedAt: Date.now() } : s))
    );
  };

  const filteredAndSorted = useMemo(() => {
    let list = [...students];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(s =>
        [s.name, s.title, s.role, s.notes]
          .filter(Boolean)
          .some(field => field.toLowerCase().includes(q))
      );
    }

    list.sort((a, b) => {
      if (sortBy === 'createdAt') return b.createdAt - a.createdAt;
      if (sortBy === 'role') return a.role.localeCompare(b.role);
      return a.name.localeCompare(b.name);
    });

    return list;
  }, [students, search, sortBy]);

  const selectedStudent = students.find(s => s.id === selectedId) || null;

  return (
  <>
    <div className="overlay"></div>
    <div className="crt-scanlines"></div>
    <div className="chromatic-aberration"></div>
    <div className="crt-vignette"></div>
    <div className="vhs-static"></div>


    <div className="app-content">
      <div className="app">
        <h1>Student Note and Ledger Manager</h1>
        <div className="top-bar">
  <div className="student-count">
    Students: {students.length}
  </div>

  {students.length > 0 && (
    <button className="clear-all" onClick={() => {
      setStudents([]);
      setSelectedId(null);
      localStorage.removeItem("students");
      localStorage.removeItem("selectedId");
    }}>
      Clear All
    </button>
  )}
</div>

        <div className="layout">
          <div className="left-panel">
            <StudentForm
              key={editingStudent?.id || 'new'}
              initialData={editingStudent}
              onSubmit={handleAddOrUpdate}
              onCancel={() => setEditingStudent(null)}
            />

            <StudentFilters
              search={search}
              onSearchChange={setSearch}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <StudentList
              students={filteredAndSorted}
              onSelect={handleSelect}
              onDelete={handleDelete}
              onEdit={handleEdit}
              selectedId={selectedId}
            />
          </div>

          <div className="right-panel">
            <StudentDetails
              student={selectedStudent}
              onUpdateNotes={handleUpdateNotes}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

  
}

export default App;
