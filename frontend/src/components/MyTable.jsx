import { useState } from 'react';

import MyRow from './MyRow.jsx';

function MyTable() {
  // const data = ['txt1', 'txt2', 'txt3', 'txt4', 'txt5'];
  const data2 = [
    { id: '55445cb0-31b5-4a56-b82b-e439d7f34597', k1: 'text1', k2: 'text2' },
    { id: '95d01160-7b8c-43a7-98de-0d782afe987c', k1: 'text1', k2: 'text2' },
    { id: '5661b611-8083-4521-9709-822cf3698c3b', k1: 'text1', k2: 'text2' },
  ];
  const [flag, setFlag] = useState(false);

  // data.map(() => {return())})
  return (
    <div>
      {/*flag ? <div>works</div> : <div>not works</div>*/}
      {flag ? <div>works</div> : null}
      <input type="button" value="clickMe" onClick={() => setFlag(!flag)} />
      <table>
        <thead>
          <tr>
            <td>Header</td>
            <td>data 1</td>
            <td>data 2</td>
          </tr>
        </thead>
        <tbody>
          {data2.map((item, index) => (
            <MyRow
              key={item.id}
              index={index}
              k1={item.k1}
              k2={item.k2}
              onButtonClick={() => setFlag(!flag)}
            ></MyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
