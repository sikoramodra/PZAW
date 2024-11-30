import { useRef, useState } from 'react';

function MyComponent() {
  const text1 = useRef();
  const text2 = useRef();
  const component = useRef();

  const [color, setColor] = useState();

  const [data, setData] = useState({
    text1: '',
    text2: '',
    component: '',
    color: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    setData({
      text1: text1.current.value,
      text2: text2.current.value,
      component: component.current.value,
      color: color,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <input type="text" ref={text1} />
            <input type="text" ref={text2} />

            <select ref={component}>
              {['RAM', 'CPU', 'GPU'].map((component) => (
                <option key={component}>{component}</option>
              ))}
            </select>
          </div>
          <div>
            {['red', 'blue', 'green', 'pink'].map((color) => (
              <label key={color}>
                <input
                  type="radio"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                {color}
              </label>
            ))}
          </div>
        </div>
        <div>
          <input type="submit" value="Submit" />
          <input type="reset" value="Clear" />
        </div>
      </form>

      <div style={{ backgroundColor: data.color }}>
        <p>{data.text1}</p>
        <p>{data.text2}</p>
        <p>{data.component}</p>
      </div>
    </div>
  );
}

export default MyComponent;
