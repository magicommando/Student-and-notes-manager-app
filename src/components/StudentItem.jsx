export default function StudentItem({
    student,
    isSelected,
    onSelect,
    onDelete,
    onEdit,
}) {
  return (
    <li className={`student-item ${isSelected ? 'selected' : ''}`}>
        <div onClick={onSelect} className="student-main">
            <strong>{student.name}</strong>
            <span>{student.title}</span>
            <span>{student.role}</span>
        </div>
        <div className="student-actions">
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    </li>
  );
}