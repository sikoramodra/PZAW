import './App.css';
import AxiosExampe from './components/AxiosExample.jsx';
import Task1 from './components/Task1/Task1.jsx';
import json from './posts.json';
import { useState } from 'react';

const randomImg = () => {
  let num = String(Math.floor(Math.random() * 40) + 1).padStart(2, '0');
  return `/Icon14_${num}.png`;
};

function App() {
  const [range, setRange] = useState(50);

  return (
    <div>
      <AxiosExampe />
    </div>
  );
  //return (
  //  <div>
  //    <input
  //      type="range"
  //      min="1"
  //      max="100"
  //      onChange={(e) => setRange(e.target.value)}
  //    />
  //    <div id="grid">
  //      {json.slice(0, range).map((item) => (
  //        <Task1
  //          key={item.id}
  //          title={item.title}
  //          img={randomImg()}
  //          desc={item.body}
  //        />
  //      ))}
  //    </div>
  //  </div>
  //);
}

export default App;
