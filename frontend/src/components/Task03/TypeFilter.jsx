function TypeFilter({ types, onTypeChange }) {
  return (
    <div>
      {types.map((type, index) => (
        <label key={index}>
          <input
            type="checkbox"
            defaultChecked={true}
            value={type.english}
            onChange={onTypeChange}
          />
          {type.english}
        </label>
      ))}
    </div>
  );
}

export default TypeFilter;
