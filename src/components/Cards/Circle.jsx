import React from 'react'
import style from '../../styles/card.module.css'
function Circle({image,text}) {
  return (
    <div className={style.circle_card}>
       <p className='mb-0'> <img src={image} alt=''/> {text}
       </p>
    </div>
  )
}

export default Circle