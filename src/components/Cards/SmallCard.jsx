import React from 'react'
import style from '../../styles/card.module.css'
function SmallCard({image,smallText,text}) {
  return (
   <div className={`${style.small_card} d-flex align-items-center gap-2 mb-5`}>
    <img src={image} alt=''/>
    <p className='pt-1 m-0'><small className='d-block pb-2'>{smallText}</small>{text}</p>
    </div>
  )
}

export default SmallCard