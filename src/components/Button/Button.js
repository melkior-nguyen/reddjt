import React from 'react'
import './button.css'

function Button({OnClick, btnText}) {
  return (
    <button className='btn' onClick={OnClick}>{btnText}</button>
  )
}

export default Button
