import axios from 'axios';
import { useState } from 'react';

function AxiosExample() {
  const [data, setData] = useState([]);

  const handelBtn = async () => {
    await axios
      .get(
        'https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/refs/heads/master/tests/relaxed.json',
      )
      .then((res) => setData(res.data))
      .catch(() => console.log('err'))
      .finally(() => console.log('finally'));
  };

  return (
    <div>
      <input type="button" value="btn" onClick={handelBtn} />
      {Object.keys(data).map((item) => (
        <label key={item}>
          <input type="checkbox" defaultChecked={data[item]} />
          {item}
        </label>
      ))}
    </div>
  );
}

export default AxiosExample;
