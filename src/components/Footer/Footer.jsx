import React from 'react'

function Footer({title,list}) {
  return (
    <div>
        <h5>{title}</h5>
        <ul>
            <li>{list}</li>
        </ul>
    </div>
  )
}

export default Footer