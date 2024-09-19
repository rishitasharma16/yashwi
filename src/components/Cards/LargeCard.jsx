import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../styles/card.module.css'
function LargeCard({image,text,link,icon,width}) {
  return (
    <div className={style.large_card}>
        <div className={style.large_card_img}>
            <img src={image} width={width} alt=''/>
        </div>
       <div className='text-center '>
       <p className='pt-lg-3 pt-md-3 pb-lg-3 pb-0'>{text}</p>
       <Link>{link} <img src={icon} alt=''/> </Link>
       </div>
    </div>
  )
}

export default LargeCard