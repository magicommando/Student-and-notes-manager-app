export default function StudentFilters({
    search,
    onSearchChange,
    sortBy,
    onSortChange,
}) {
  return (
    <div className="student-filters">
        <input
          type="text"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Search by name, title, role, notes..."
        />

        <select
          value={sortBy}
          onChange={e => onSortChange(e,target.value)}
        >
            <option value="name">Sort by name</option>
            <option value="role">Sort by role</option>
            <option value="createdAt">Newest first</option>
        </select>
    </div>
  );
}