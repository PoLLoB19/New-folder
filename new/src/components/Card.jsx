import React from 'react'

const card = (props) => {
  return (
    <div className='border-[2px] border-black w-[20vw] h-[40vh]'>
      <img src={props.src} alt="" width={270} />
      <h1 className='text-[45px]'>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default card
