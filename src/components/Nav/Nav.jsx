import { useState } from "react"
import { NavMenu } from "../NavMenu/NavMenu"
import './Nav.css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNav } from "../../Context/NavProvider";
gsap.registerPlugin(ScrollTrigger);

export const Nav = () => {
    const [menu, setMenu] = useState(false)
    const {navRef,upMenuRef,downMenuRef} = useNav()

    
  return (
    <div ref={navRef} className="nav__container">
        <div className="nav__left">
            <p className="nav__logo">MC</p>
        </div>
        <div className="nav__right">
            <div className="nav__text--container">
            <p className="nav__text">PROYECTOS</p>
            </div>
            <div className="nav__menu--container">
                <div onClick={()=>setMenu(!menu)} className="nav__menu--icon">
                    <div ref={upMenuRef} className={`bar__up ${menu?'bar__up--rotate':''}`}></div>
                    <div ref={downMenuRef} className={`bar__down ${menu?'bar__down--rotate':''}`}></div>
                </div>
                {<NavMenu menu={menu}/>}
            </div>
        </div>
    </div>
  )
}
