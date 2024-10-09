import { useState } from 'react'
import { useEffect } from 'react'
import './Component.css'

function Component() {
  const [name, setName] = useState('sikoramodra')
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log('useEffect is called')
  }, [])

  const myStyle = { color: '#0F0', fontSize: '32px' }

  const buttonClick = () => {
    console.log(name)
    setName('asd')
    console.log(name)
  }

  return (
    <div>
      <div className="component">{name}</div>
      <div style={myStyle}>Hello World</div>
      <div>
        <input type="button" value="click" onClick={buttonClick}></input>
      </div>
      <div>{num}</div>
    </div>
  )
}

export default Component
