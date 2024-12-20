import React from 'react'
import './buttonChangePhrase.css'

function ButtonChangePhrase({changePhrase}) {
  return (
    <div className="button__container">
          <button onClick={() => changePhrase()} className='change__phrase button'>Try my Luck</button>
    </div>
  )
}

export default ButtonChangePhrase