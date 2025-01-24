import { useForm } from '@tanstack/react-form';
import InputField from './InputField.jsx';

function Task04() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      gender: 'other',
      university: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  const emailValidators = {
    onChange: ({ value }) => {
      if (!value) return "Email can't be empty";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return 'Invalid email address';
      return undefined;
    },
  };

  const passwordValidators = {
    onChange: ({ value }) => {
      if (!value) return 'Password is required';
      if (value.length < 8)
        return 'Password must be at least 8 characters long';
      if (!/[A-Z]/.test(value))
        return 'Password must contain at least one uppercase letter';
      if (!/[a-z]/.test(value))
        return 'Password must contain at least one lowercase letter';
      if (!/[0-9]/.test(value))
        return 'Password must contain at least one number';
      return undefined;
    },
  };

  const confirmPasswordValidators = {
    onChangeListenTo: ['password'],
    onChange: ({ value, fieldApi }) => {
      const password = fieldApi.form.getFieldValue('password');
      if (!value) return 'Confirmation password is required';
      if (value !== password) return 'Passwords do not match';
      return undefined;
    },
  };

  const universityValidators = {
    onChange: ({ value }) => {
      if (!value) return 'Select your university';
      return undefined;
    },
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await form.handleSubmit();
      }}
      className="container row gap-3 p-2"
      style={{ maxWidth: 512 }}
    >
      <form.Field name="email" validators={emailValidators}>
        {(field) => (
          <InputField
            field={field}
            placeholder="Email"
            label="Email"
            type="email"
            errorId="email-error"
          />
        )}
      </form.Field>

      <form.Field name="password" validators={passwordValidators}>
        {(field) => (
          <InputField
            field={field}
            placeholder="Password"
            label="Password"
            type="password"
            errorId="password-error"
          />
        )}
      </form.Field>

      <form.Field name="confirmPassword" validators={confirmPasswordValidators}>
        {(field) => (
          <InputField
            field={field}
            placeholder="Confirm password"
            label="Confirm Password"
            type="password"
            errorId="confirm-password-error"
          />
        )}
      </form.Field>

      <form.Field name="gender">
        {(field) => (
          <div className="d-flex justify-content-center">
            {['male', 'female', 'other'].map((val) => (
              <div key={val} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id={val}
                  name={field.name}
                  value={val}
                  checked={field.state.value === val}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <label
                  className="form-check-label text-capitalize"
                  htmlFor={val}
                >
                  {val}
                </label>
              </div>
            ))}
          </div>
        )}
      </form.Field>

      <form.Field name="university" validators={universityValidators}>
        {(field) => (
          <div>
            <select
              className={`form-select ${field.state.meta.errors.length ? 'is-invalid' : ''}`}
              id={field.name}
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            >
              <option value="">Select your university</option>
              <option value="Uniwersytet Szczeciński">
                Uniwersytet Szczeciński
              </option>
              <option value="Zachodniopomorski Uniwersytet Technologiczny">
                Zachodniopomorski Uniwersytet Technologiczny
              </option>
              <option value="Politechnika Morska">Politechnika Morska</option>
            </select>
            {field.state.meta.errors.length > 0 && (
              <ul className="invalid-feedback">
                {field.state.meta.errors.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </form.Field>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <div className="d-flex align-items-center justify-content-center">
            <input
              className={`btn btn-primary ${!canSubmit ? 'disabled' : ''}`}
              type="submit"
              disabled={!canSubmit || isSubmitting}
              value={isSubmitting ? 'Submitting...' : 'Submit'}
              aria-live="polite"
            />
            {isSubmitting && (
              <span
                className="spinner-border spinner-border-sm ms-2"
                role="status"
                aria-hidden="true"
              ></span>
            )}
          </div>
        )}
      </form.Subscribe>
    </form>
  );
}

export default Task04;
