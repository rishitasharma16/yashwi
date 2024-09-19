import React from 'react'
import style from '../../styles/button.module.css'
function SquareButton({image,title,icon}) {
  return (
    <div className={`${style.square_btn} d-flex align-items-center `}>
        <img src={image} alt=""/>
        <p className='mb-0'>{title}</p>
        <img src={icon} alt=""/>
    </div>
  )
}

export default SquareButton