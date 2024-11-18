import { useRef, useState } from "react";
import axios from 'axios';

function Task2() {
  const name = useRef();
  const surname = useRef();
  const password = useRef();
  const a = useRef();
  const gender = useRef();
  

  const handleSubmit = () => {

    axios
      .post(
        'http://localhost:3000/data', 
        {
          name: name.current.value,
          surname: surname.current.value,
          password: password.current.value,
          // a: a.current.value,
          // gender: gender.current.value
        }
      )
      .catch(() => console.log('err'))
  }

  return (
    <div className="container">
      <label><input type="input" ref={name} />name</label>
      <label><input type="input" ref={surname} />surname</label>
      <label><input type="input" ref={password} />password</label>

      {/* <div>
        <input type="checkbox" name="a" ref={a} />
        <input type="checkbox" name="a" ref={a} />
        <input type="checkbox" name="a" ref={a} />
      </div>

      <div>
        <input type="radio" name="gender" ref={gender} />
        <input type="radio" name="gender" ref={gender} />
        <input type="radio" name="gender" ref={gender} />
      </div> */}

      <input type="button" onClick={handleSubmit} />
    </div>
  );
}

export default Task2;
