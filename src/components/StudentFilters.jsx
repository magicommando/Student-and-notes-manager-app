export default function StudentFilters({
  search,
  onSearchChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="student-filters">

      {/* Search Input + X */}
      <div className="input-wrapper">
        <input
          type="text"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Search by name, title, role, notes..."
        />

        {search && (
          <span className="clear-x-search" onClick={() => onSearchChange("")}>
            ✖
          </span>
        )}
      </div>

      <select
        value={sortBy}
        onChange={e => onSortChange(e.target.value)}
      >
        <option value="name">Sort by name</option>
        <option value="role">Sort by role</option>
        <option value="createdAt">Newest first</option>
      </select>

    </div>
  );
}
