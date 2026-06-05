import StudentItem from './StudentItem';

export default function StudentList({
    students,
    onSelect,
    onDelete,
    onEdit,
    selectedId,
}) {
   if (!students.length) {
    return <p>No students yet. Add one above.</p>
   }

   return (
     <ul className="student-list">
        {students.map(student => (
            <StudentItem
            key={student.id}
            student={student}
            isSelected={student,id === selectedId}
            onSelect={() => onSelect(student.id)}
            onDelete={ () => onEdit(student)}
        />
      ))}
    </ul>
  );
}