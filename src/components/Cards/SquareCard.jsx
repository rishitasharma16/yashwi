import React from 'react'
import style from '../../styles/card.module.css'
function SquareCard({image,title,subtitle}) {
  return (
    <div className={style.square_card}>
        <div className={style.card_img}>
            <img src={image} alt=""/>
        </div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
    </div>
  )
}

export default SquareCard