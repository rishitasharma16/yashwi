import React,{useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../components/Navbar/AppBar'
import style from '../styles/wrapper.module.css'
import Aos from "aos";
function Wrapper() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" className={style.wrapper_section}>
        <AppBar />
      </div>
        <div>
        <Outlet/>
        </div>
    </div>
  )
}

export default Wrapper