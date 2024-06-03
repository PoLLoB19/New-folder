import React from 'react'

const card = (props) => {
  return (
    <div className='border-1'>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default card
