import React from 'react'

const ButtonBox = ({ colorRandom, handleClick }) => {

  return (
    <div>
      <button style={{ background: colorRandom }} className='box_btn'
        onClick={handleClick}>&#62;</button>
    </div>
  )
}

export default ButtonBox