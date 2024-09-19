import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import AppContext from "../../context/AppContext";
import style from '../../styles/appbar.module.css'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import logoDark from '../../assets/images/logo-dark.png'


function AppBar() {
  const { isDarkMode,setDarkMode } = useContext(AppContext);

  
  const toggleDarkMode = ()=>{
    setDarkMode((isDarkMode)=>!isDarkMode?true:false)
  }

  return (
     <Navbar expand="lg"   data-bs-theme={isDarkMode?"dark":"light"} className={`${isDarkMode?style.nav_body:style.nav_body_dark}  py-3 `}>
      <Container className="px-md-2 px-lg-5 px-4">
        <Navbar.Brand href="#home">
            <img src={isDarkMode?logo:logoDark} width={150} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className="w-100">
          <Nav className={` ${style.nav_item_section} w-100 d-flex justify-content-between`}>

            <Container className={`${style.nav_links} d-md-flex justify-content-center`}>
              <Link className="nav-link">About Us</Link>
              <Link className="nav-link mx-md-3">Services</Link>
              <Link className="nav-link">Markets</Link>
              <Link className="nav-link mx-md-3">Pricing</Link>
            </Container>

            <Container className={`${style.nav_right} d-md-flex align-items-center justify-content-end`}>
              <DarkModeSwitch
                style={{marginRight:"15px"}}
                checked={!isDarkMode}
                onChange={toggleDarkMode}
                size={30}
                sunColor="white"
                moonColor="black"
                className={style.darkToggle}
              />
              <NavDropdown title="English" id="basic-nav-dropdown" className={style.drop_down}>
                <Link className="dropdown-item">English</Link>
                <Link className="dropdown-item">Russian</Link>
                <Link className="dropdown-item">Spanish</Link>
              </NavDropdown>
            </Container>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
