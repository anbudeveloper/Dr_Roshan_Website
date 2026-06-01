export default function FilterTabs({ filters, active, onChange }) {
  return (
    <div className="gl-filters">
      {filters.map((f) => (
        <button
          key={f.id}
          className={`gl-filter-btn ${active === f.id ? 'active' : ''}`}
          onClick={() => onChange(f.id)}
          type="button"
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
