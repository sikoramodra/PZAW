function InputField({ field, placeholder, label, type, errorId }) {
  return (
    <div className="form-floating">
      <input
        className={`form-control ${field.state.meta.errors.length ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        type={type}
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-describedby={errorId}
        autoComplete={type === 'password' ? 'new-password' : 'off'}
      />
      <label htmlFor={field.name}>{label}</label>
      {field.state.meta.errors.length > 0 && (
        <ul id={errorId} className="invalid-feedback">
          {field.state.meta.errors.map((err, index) => (
            <li key={index}>{err}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InputField;
