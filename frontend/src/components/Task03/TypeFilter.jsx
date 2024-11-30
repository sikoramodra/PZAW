function TypeFilter({ types, onTypeChange }) {
  return (
    <div>
      {types.map((type) => (
        <div key={type.english} className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={true}
              value={type.english}
              onChange={onTypeChange}
            />
            {type.english}
          </label>
        </div>
      ))}
    </div>
  );
}

export default TypeFilter;
