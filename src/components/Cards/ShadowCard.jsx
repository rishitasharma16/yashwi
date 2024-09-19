import React from 'react'
import style from '../../styles/card.module.css'
function ShadowCard({src,text}) {
  return (
    <div className={`${style.card_item} d-flex justify-content-center align-items-center mb-md-2 mb-2`}>
        <img src={src} className='me-2' width={40}/>
        <span >{text}</span> 
    </div>
  )
}

export default ShadowCard