import { useRef, useState } from 'react'
import { useEffect } from 'react'
import './Component.css'

function Component() {
  const text1 = useRef()
  const text2 = useRef()
  const comp = useRef()
  //const [text1, setText1] = useState()
  //const [text2, setText2] = useState()
  //const [comp, setComp] = useState()

  const [col, setCol] = useState()

  const [style, setStyle] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()

    setStyle({
      backgroundColor: col,
    })
  }

  return (
    <div>
      <form id="myForm">
        <div id="formArea">
          <div id="lhs">
            <input type="text" ref={text1} />
            <input type="text" ref={text2} />

            <select ref={comp}>
              <option>RAM</option>
              <option>CPU</option>
              <option>GPU</option>
            </select>
          </div>
          <div id="rhs">
            <label>
              <input type="radio" name="col" value="red" onChange={(e) => setCol(e.target.value)} />
              red
            </label>
            <label>
              <input type="radio" name="col" value="blue" onChange={(e) => setCol(e.target.value)} />
              blue
            </label>
            <label>
              <input type="radio" name="col" value="green" onChange={(e) => setCol(e.target.value)} />
              green
            </label>
            <label>
              <input type="radio" name="col" value="pink" onChange={(e) => setCol(e.target.value)} />
              pink
            </label>
          </div>
        </div>

        <input type="submit" value="Submit" onClick={onSubmit} />
        <input type="reset" value="Clear" />
      </form>

      <div style={style}>
        <p>{text1.current ? text1.current.value : ''}</p>
        <p>{text2.current ? text2.current.value : ''}</p>
        <p>{comp.current ? comp.current.value : ''}</p>
      </div>
    </div>
  )
}

export default Component
