import React, { useState } from 'react'
import Radium from 'radium'

const Test = () => {
  const [st, setSt] = useState('gray')
  const style = {
    textArea: {
      background: 'gray',
      ':hover': { background: 'black', backgroundColor: '#000', color: '#fff' },
      ':focus': {
        background: 'black',
        backgroundColor: '#000',
        color: '#fff',
      },
    },
  }
  return (
    <div>
      <h3>TutorialsPoint</h3>
      <button
        style={style.textArea}
        onClick={() => {
          setSt('black')
        }}
      >
        Hover Me
      </button>
      <textarea className="input" value="val" />
    </div>
  )
}
export default Radium(Test)
