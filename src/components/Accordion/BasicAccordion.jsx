import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import style from '../../styles/accordion.module.css'
function BasicAccordion({eventKey,header}) {
  
 
  return (
    <Accordion defaultActiveKey="0" className={style.accordion_container}>
    <Accordion.Item eventKey={eventKey} className={style.accordion_item}>
      <Accordion.Header  >{header}</Accordion.Header>
      <Accordion.Body className={style.accordion_body}>
      Yashwi is a SEBI-regulated trading platform and a Depository Participant (DP) compliant with all rules and regulations. You can rely on Yashwi to invest in share market as thousands of others do as well. Furthermore, we take transparency and security very seriously. Our goal is to always ensure that you have visibility into pricing and other details. We also ensure that your data is safe at all times.
      </Accordion.Body>
    </Accordion.Item>
   
  </Accordion>
  )
}

export default BasicAccordion