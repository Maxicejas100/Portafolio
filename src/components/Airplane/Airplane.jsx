import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './airplane.css'
import { useEffect, useRef } from 'react';
import { useNav } from '../../Context/NavProvider';


export const Airplane = () => {
  const airplaneContaienrRef = useRef(null)
  const airplaneRef = useRef(null)
  const skyRef = useRef(null)
  const {navRef,upMenuRef,downMenuRef,bgMenuRef,dividerMenuRef1,dividerMenuRef2,dividerMenuRef3,dividerMenuRef4,dividerMenuRef5} = useNav()
  useEffect(()=>{
    const airplaneTl = gsap.timeline()  
    const tlNav = gsap.timeline()
    airplaneTl.set(airplaneRef.current,{left: "-250px",bottom: "-200px",})
    airplaneTl.set(skyRef.current,{top: "200px",left: "-1900px",})
    airplaneTl.to(airplaneRef.current,{left: "-150px",bottom: "-100px",},1)
    airplaneTl.to(skyRef.current,{top: "180px",left: "-1800px",},1)

    airplaneTl.to(airplaneRef.current,{left: "-50px",bottom: "-150px",},2)
    airplaneTl.to(skyRef.current,{top: "150px",left: "-1700px",},2)

    airplaneTl.to(airplaneRef.current,{left: "0px",bottom: "-100px",},3)
    airplaneTl.to(skyRef.current,{top: "130px",left: "-1600px",},3)

    airplaneTl.to(airplaneRef.current,{left: "100px",bottom: "-50px",},4)
    airplaneTl.to(skyRef.current,{top: "110px",left: "-1500px",},4)

    airplaneTl.to(airplaneRef.current,{left: "250px",bottom: "0px",},5)
    airplaneTl.to(skyRef.current,{top: "90px",left: "-1400px",},5)


    airplaneTl.to(airplaneRef.current,{left: "350px",bottom: "50px",},6)
    airplaneTl.to(skyRef.current,{top: "70px",left: "-1300px",},6)


    airplaneTl.to(airplaneRef.current,{left: "450px",bottom: "100px",},7)
    airplaneTl.to(skyRef.current,{top: "50px",left: "-1200px",},7)


    airplaneTl.to(airplaneRef.current,{left: "550px",bottom: "150px",},8)
    airplaneTl.to(skyRef.current,{top: "30px",left: "-1100px",},8)


    airplaneTl.to(airplaneRef.current,{left: "650px",bottom: "200px",},9)
    airplaneTl.to(skyRef.current,{top: "0px",left: "-1050px",},9)

    airplaneTl.to(airplaneRef.current,{left: "700px",bottom: "240px",},10)
    airplaneTl.to(skyRef.current,{top: "-50px",left: "-1000px",},10)

    airplaneTl.to(airplaneRef.current,{left: "730px",bottom: "270px",},11)
    airplaneTl.to(skyRef.current,{top: "-100px",left: "-950px",},11)

    airplaneTl.to(airplaneRef.current,{left: "760px",bottom: "290px",},12)
    airplaneTl.to(skyRef.current,{top: "-150px",left: "-900px",},12)

    airplaneTl.to(airplaneRef.current,{left: "790px",bottom: "310px",},13)
    airplaneTl.to(skyRef.current,{top: "-200px",left: "-800px",},13)

    airplaneTl.to(airplaneRef.current,{left: "810px",bottom: "340px",},14)
    airplaneTl.to(skyRef.current,{top: "-250px",left: "-700px",},14)

    airplaneTl.to(airplaneRef.current,{left: "830px",bottom: "370px",},15)
    airplaneTl.to(skyRef.current,{top: "-300px",left: "-600px",},15)

    airplaneTl.to(airplaneRef.current,{left: "850px",bottom: "400px",},16)
    airplaneTl.to(skyRef.current,{top: "-350px",left: "-500px",},16)









    ScrollTrigger.create({
      trigger:airplaneContaienrRef.current,
      animation: airplaneTl,
      start: "center bottom",
      end: "bottom bottom",
      scrub:true,
      markers:true

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
            trigger:airplaneContaienrRef.current,
            animation: tlNav,
            start: "top +=400",
            end: "bottom bottom",

            scrub:true
        })

  },[navRef,upMenuRef,downMenuRef,bgMenuRef,dividerMenuRef1,dividerMenuRef2,dividerMenuRef3,dividerMenuRef4,dividerMenuRef5])


  return (
    <div ref={airplaneContaienrRef} className='airplane__container'>
      <img ref={airplaneRef} className='airplane__img' src="./src/assets/images/effects/airplane.png" alt="" />
      <img ref={skyRef} className='airplane__sky' src="./src/assets/images/effects/sky.png" alt="" />
    </div>
  )
}
