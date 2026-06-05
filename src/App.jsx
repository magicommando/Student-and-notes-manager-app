
import { useState, useMemo } from 'react';
import StudentForm from './StudentForm';
import StudentFilters from './StudentFilters';
import StudentList from './StudentList';
import StudentDetails from './StudentDetails';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('name');
  const [editingStudent, setEditingStudent] = useState(null);

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

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

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
    <div className="app">
      <h1>Student Ledger Manager</h1>
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
              student={filteredAndSorted}
              onSelect={handleSelect}
              onDelete={handleDelete}
              onEdit={handleEdit}
              selectedId={selectedId}
            />
          </div>

          <div className="rightpanel">
            <StudentDetails
              student={selectedStudent}
              onUpdateNotes={handleUpdateNotes}
            /> 
          </div>
        </div>
      </div>
   );
} 

export default App;
