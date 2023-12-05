import './about.css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import { useEffect } from 'react';
import { useNav } from '../../Context/NavProvider';

gsap.registerPlugin(ScrollTrigger);




export const About = () => {
    const containerRef = useRef(null)
    const elementRef = useRef(null)
    const textRef = useRef(null)
    const {navRef,upMenuRef,downMenuRef,bgMenuRef,dividerMenuRef1,dividerMenuRef2,dividerMenuRef3,dividerMenuRef4,dividerMenuRef5} = useNav()
   
    useEffect(()=>{
        const tlNav = gsap.timeline()
        const container = containerRef.current
        const element = elementRef.current
        const text = textRef.current
        const tl = gsap.timeline()
        tl.set(element,{
            top:-150,
            rotate: 20
        })
        tl.to(element,{
            rotate: 10,
            onComplete:()=>text.classList.add("animate__zoomIn")
        })
        tl.to(element,{
            rotate: 0,
            
        })
        ScrollTrigger.create({
            trigger: container,
            animation: tl,
            start: "top bottom",
            end: "top center",
            scrub: true,
        })
        
        // NAV CHANGE
        tlNav.to(navRef.current,{color:"#222222"},0)
        tlNav.to(upMenuRef.current,{backgroundColor:"#222222"},0)
        tlNav.to(downMenuRef.current,{backgroundColor:"#222222"},0)
        tlNav.to(bgMenuRef.current,{backgroundColor:"#B6BBC4"},0)
        tlNav.to(dividerMenuRef1.current,{backgroundColor:"#222222",outline:"none",border:"none"},0)
        tlNav.to(dividerMenuRef2.current,{backgroundColor:"#222222",outline:"none",border:"none"},0)
        tlNav.to(dividerMenuRef3.current,{backgroundColor:"#222222",outline:"none",border:"none"},0)
        tlNav.to(dividerMenuRef4.current,{backgroundColor:"#222222",outline:"none",border:"none"},0)
        tlNav.to(dividerMenuRef5.current,{backgroundColor:"#222222",outline:"none",border:"none"},0)

        ScrollTrigger.create({
            trigger:element,
            animation: tlNav,
            start: "top +=400",
            end: "bottom bottom",

            scrub:true
        })
    },[navRef,upMenuRef,downMenuRef,bgMenuRef,dividerMenuRef1,dividerMenuRef2,dividerMenuRef3,dividerMenuRef4,dividerMenuRef5])
  return (
    
        
        <div ref={containerRef} className='about'>
        <div ref={elementRef} className="about__animation--item"></div>
            <div className="about__text--container">
                <h2 ref={textRef} className="about__title">FRONTEND<br/>DEVELOPER</h2>
            </div>
            <div className='rounded__arrow--container'>
                <img className='rounded__arrow' src="./src/assets/images/hero/arrow.png" alt="" />
            </div>
        </div>
        
  )
}
