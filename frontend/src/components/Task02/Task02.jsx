import axios from 'axios';

function Task02() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post('http://localhost:3000/task02/data', {
        name: formData.get('name'),
        surname: formData.get('surname'),
        password: formData.get('password'),
        lang: formData.getAll('lang'),
        gender: formData.get('gender'),
      })
      .catch((e) => console.log(`Err: ${e.message}`));
  };

  return (
    <form className="container d-flex flex-column" onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <div className="col-5">
          <input className="form-control" type="text" id="name" name="name" />
        </div>
        <div className="col-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            id="surname"
            name="surname"
          />
        </div>
        <div className="col-3">
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-5">
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="col-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3">
        {['go', 'rust', 'zig'].map((val) => (
          <div key={val} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id={`lang-${val}`}
              name="lang"
              value={val}
            />
            <label className="form-check-label" htmlFor={`lang-${val}`}>
              {val}
            </label>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between mb-3">
        {['male', 'female', 'other'].map((val) => (
          <div key={val} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id={`gender-${val}`}
              name="gender"
              value={val}
            />
            <label className="form-check-label" htmlFor={`gender-${val}`}>
              {val}
            </label>
          </div>
        ))}
      </div>

      <input className="btn btn-primary mx-auto" type="submit" value="Submit" />
    </form>
  );
}

export default Task02;
