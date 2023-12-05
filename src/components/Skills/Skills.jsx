import { useEffect, useRef } from "react"
import "./skills.css"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNav } from "../../Context/NavProvider";
gsap.registerPlugin(ScrollTrigger);


export const Skills = () => {
    const {navRef,bgMenuRef,upMenuRef,downMenuRef,dividerMenuRef1,dividerMenuRef2,dividerMenuRef3,dividerMenuRef4,dividerMenuRef5} = useNav()



    const container2Ref = useRef(null)
    const container3Ref = useRef(null)
    const container4Ref = useRef(null)
    const container5Ref = useRef(null)
    const container6Ref = useRef(null)




    const reactUp1Ref = useRef(null)
    const jsUp1Ref = useRef(null)
    const tailwindUp1Ref = useRef(null)
    const bootstrapUp1Ref = useRef(null)
    const sassUp1Ref = useRef(null)
    const reactUp2Ref = useRef(null)
    const jsUp2Ref = useRef(null)
    const tailwindUp2Ref = useRef(null)
    const bootstrapUp2Ref = useRef(null)
    const sassUp2Ref = useRef(null)
    const reactDown1Ref = useRef(null)
    const jsDown1Ref = useRef(null)
    const tailwindDown1Ref = useRef(null)
    const bootstrapDown1Ref = useRef(null)
    const sassDown1Ref = useRef(null)
    const reactDown2Ref = useRef(null)
    const jsDown2Ref = useRef(null)
    const tailwindDown2Ref = useRef(null)
    const bootstrapDown2Ref = useRef(null)
    const sassDown2Ref = useRef(null)

    useEffect(()=>{
        const tlNav2 = gsap.timeline()
        const tl2 = gsap.timeline()
        const tl3 = gsap.timeline()
        const tl4 = gsap.timeline()
        const tl5 = gsap.timeline()
        const tl6 = gsap.timeline()

        const container2 = container2Ref.current
        const container3 = container3Ref.current
        const container4 = container4Ref.current
        const container5 = container5Ref.current
        const container6 = container6Ref.current


        const reactUp1 = reactUp1Ref.current
        const jsUp1 = jsUp1Ref.current
        const tailwindUp1 = tailwindUp1Ref.current
        const bootstrapUp1 = bootstrapUp1Ref.current
        const sassUp1 = sassUp1Ref.current
        const reactUp2 = reactUp2Ref.current
        const jsUp2 = jsUp2Ref.current
        const tailwindUp2 = tailwindUp2Ref.current
        const bootstrapUp2 = bootstrapUp2Ref.current
        const sassUp2 = sassUp2Ref.current
        const reactDown1 = reactDown1Ref.current
        const jsDown1 = jsDown1Ref.current
        const tailwindDown1 = tailwindDown1Ref.current
        const bootstrapDown1 = bootstrapDown1Ref.current
        const sassDown1 = sassDown1Ref.current
        const reactDown2 = reactDown2Ref.current
        const jsDown2 = jsDown2Ref.current
        const tailwindDown2 = tailwindDown2Ref.current
        const bootstrapDown2 = bootstrapDown2Ref.current
        const sassDown2 = sassDown2Ref.current

        
        tl2.set(reactUp1,{y:0})
        tl2.set(reactUp2,{y:0})
        tl2.set(reactDown1,{y:0})
        tl2.set(reactDown2,{y:0})
        tl3.set(jsUp1,{y:0})
        tl3.set(jsUp2,{y:0})
        tl3.set(jsDown1,{y:0})
        tl3.set(jsDown2,{y:0})
        tl4.set(tailwindUp1,{y:0})
        tl4.set(tailwindUp2,{y:0})
        tl4.set(tailwindDown1,{y:0})
        tl4.set(tailwindDown2,{y:0})


        // / REACT LETTER ANIMATIONS

        tl2.to(reactUp1,{y:-50,duration:2},1)
        tl2.to(reactUp2,{y:-100,duration:1},1)
        tl2.to(reactDown1,{y:50,duration:2},1)
        tl2.to(reactDown2,{y:100,duration:1},1)
        tl2.to(reactUp1,{y:-100,duration:2},2)
        tl2.to(reactUp2,{y:-200,opacity:0.6,duration:1},2)
        tl2.to(reactDown1,{y:100,duration:2},2)
        tl2.to(reactDown2,{y:200,opacity:0.6,duration:1},2)
        tl2.to(reactUp1,{y:-120,opacity:0.6,duration:2},3)
        tl2.to(reactUp2,{y:-250,opacity:0.4,duration:1},3)
        tl2.to(reactDown1,{y:120,opacity:0.6,duration:2},3)
        tl2.to(reactDown2,{y:250,opacity:0.4,duration:1},3)


        tl2.to(reactUp1,{y:-200,opacity:0.4,duration:2},4)
        tl2.to(reactUp2,{y:-350,opacity:0.2,duration:1},4)
        tl2.to(reactDown1,{y:200,opacity:0.4,duration:2},4)
        tl2.to(reactDown2,{y:350,opacity:0.2,duration:1},4)

        tl2.to(reactUp1,{y:-350,opacity:0.2,duration:1},5)
        tl2.to(reactUp2,{y:-450,opacity:0,duration:1},5)
        tl2.to(reactDown1,{y:350,opacity:0.2,duration:2},5)
        tl2.to(reactDown2,{y:450,opacity:0,duration:1},5)
        tl2.to(reactUp1,{y:-450,opacity:0,duration:2},5)
        tl2.to(reactDown1,{y:450,opacity:0,duration:2},5)

        // JS LETTERS ANIMATION

        tl3.to(jsUp1,{y:-50,duration:2},1)
        tl3.to(jsUp2,{y:-100,duration:1},1)
        tl3.to(jsDown1,{y:50,duration:2},1)
        tl3.to(jsDown2,{y:100,duration:1},1)
        tl3.to(jsUp1,{y:-100,duration:2},2)
        tl3.to(jsUp2,{y:-200,opacity:0.6,duration:1},2)
        tl3.to(jsDown1,{y:100,duration:2},2)
        tl3.to(jsDown2,{y:200,opacity:0.6,duration:1},2)
        tl3.to(jsUp1,{y:-120,opacity:0.6,duration:2},3)
        tl3.to(jsUp2,{y:-250,opacity:0.4,duration:1},3)
        tl3.to(jsDown1,{y:120,opacity:0.6,duration:2},3)
        tl3.to(jsDown2,{y:250,opacity:0.4,duration:1},3)


        tl3.to(jsUp1,{y:-200,opacity:0.4,duration:2},4)
        tl3.to(jsUp2,{y:-350,opacity:0.2,duration:1},4)
        tl3.to(jsDown1,{y:200,opacity:0.4,duration:2},4)
        tl3.to(jsDown2,{y:350,opacity:0.2,duration:1},4)

        tl3.to(jsUp1,{y:-350,opacity:0.2,duration:1},5)
        tl3.to(jsUp2,{y:-450,opacity:0,duration:1},5)
        tl3.to(jsDown1,{y:350,opacity:0.2,duration:2},5)
        tl3.to(jsDown2,{y:450,opacity:0,duration:1},5)
        tl3.to(jsUp1,{y:-450,opacity:0,duration:2},5)
        tl3.to(jsDown1,{y:450,opacity:0,duration:2},5)

        // TAILWIND LETTER EFFECTS
       
        tl4.to(tailwindUp1,{y:-50,duration:2},1)
        tl4.to(tailwindUp2,{y:-100,duration:1},1)
        tl4.to(tailwindDown1,{y:50,duration:2},1)
        tl4.to(tailwindDown2,{y:100,duration:1},1)
        tl4.to(tailwindUp1,{y:-100,duration:2},2)
        tl4.to(tailwindUp2,{y:-200,opacity:0.6,duration:1},2)
        tl4.to(tailwindDown1,{y:100,duration:2},2)
        tl4.to(tailwindDown2,{y:200,opacity:0.6,duration:1},2)
        tl4.to(tailwindUp1,{y:-120,opacity:0.6,duration:2},3)
        tl4.to(tailwindUp2,{y:-250,opacity:0.4,duration:1},3)
        tl4.to(tailwindDown1,{y:120,opacity:0.6,duration:2},3)
        tl4.to(tailwindDown2,{y:250,opacity:0.4,duration:1},3)


        tl4.to(tailwindUp1,{y:-200,opacity:0.4,duration:2},4)
        tl4.to(tailwindUp2,{y:-350,opacity:0.2,duration:1},4)
        tl4.to(tailwindDown1,{y:200,opacity:0.4,duration:2},4)
        tl4.to(tailwindDown2,{y:350,opacity:0.2,duration:1},4)

        tl4.to(tailwindUp1,{y:-350,opacity:0.2,duration:1},5)
        tl4.to(tailwindUp2,{y:-450,opacity:0,duration:1},5)
        tl4.to(tailwindDown1,{y:350,opacity:0.2,duration:2},5)
        tl4.to(tailwindDown2,{y:450,opacity:0,duration:1},5)
        tl4.to(tailwindUp1,{y:-450,opacity:0,duration:2},5)
        tl4.to(tailwindDown1,{y:450,opacity:0,duration:2},5)
        // BOOTSTRAP LETTER EFFECTS
       
        tl5.to(bootstrapUp1,{y:-50,duration:2},1)
        tl5.to(bootstrapUp2,{y:-100,duration:1},1)
        tl5.to(bootstrapDown1,{y:50,duration:2},1)
        tl5.to(bootstrapDown2,{y:100,duration:1},1)
        tl5.to(bootstrapUp1,{y:-100,duration:2},2)
        tl5.to(bootstrapUp2,{y:-200,opacity:0.6,duration:1},2)
        tl5.to(bootstrapDown1,{y:100,duration:2},2)
        tl5.to(bootstrapDown2,{y:200,opacity:0.6,duration:1},2)
        tl5.to(bootstrapUp1,{y:-120,opacity:0.6,duration:2},3)
        tl5.to(bootstrapUp2,{y:-250,opacity:0.4,duration:1},3)
        tl5.to(bootstrapDown1,{y:120,opacity:0.6,duration:2},3)
        tl5.to(bootstrapDown2,{y:250,opacity:0.4,duration:1},3)


        tl5.to(bootstrapUp1,{y:-200,opacity:0.4,duration:2},4)
        tl5.to(bootstrapUp2,{y:-350,opacity:0.2,duration:1},4)
        tl5.to(bootstrapDown1,{y:200,opacity:0.4,duration:2},4)
        tl5.to(bootstrapDown2,{y:350,opacity:0.2,duration:1},4)

        tl5.to(bootstrapUp1,{y:-350,opacity:0.2,duration:1},5)
        tl5.to(bootstrapUp2,{y:-450,opacity:0,duration:1},5)
        tl5.to(bootstrapDown1,{y:350,opacity:0.2,duration:2},5)
        tl5.to(bootstrapDown2,{y:450,opacity:0,duration:1},5)
        tl5.to(bootstrapUp1,{y:-450,opacity:0,duration:2},5)
        tl5.to(bootstrapDown1,{y:450,opacity:0,duration:2},5)
        // SASS LETTER EFFECTS
       
        tl6.to(sassUp1,{y:-50,duration:2},1)
        tl6.to(sassUp2,{y:-100,duration:1},1)
        tl6.to(sassDown1,{y:50,duration:2},1)
        tl6.to(sassDown2,{y:100,duration:1},1)
        tl6.to(sassUp1,{y:-100,duration:2},2)
        tl6.to(sassUp2,{y:-200,opacity:0.6,duration:1},2)
        tl6.to(sassDown1,{y:100,duration:2},2)
        tl6.to(sassDown2,{y:200,opacity:0.6,duration:1},2)
        tl6.to(sassUp1,{y:-120,opacity:0.6,duration:2},3)
        tl6.to(sassUp2,{y:-250,opacity:0.4,duration:1},3)
        tl6.to(sassDown1,{y:120,opacity:0.6,duration:2},3)
        tl6.to(sassDown2,{y:250,opacity:0.4,duration:1},3)


        tl6.to(sassUp1,{y:-200,opacity:0.4,duration:2},4)
        tl6.to(sassUp2,{y:-350,opacity:0.2,duration:1},4)
        tl6.to(sassDown1,{y:200,opacity:0.4,duration:2},4)
        tl6.to(sassDown2,{y:350,opacity:0.2,duration:1},4)

        tl6.to(sassUp1,{y:-350,opacity:0.2,duration:1},5)
        tl6.to(sassUp2,{y:-450,opacity:0,duration:1},5)
        tl4.to(sassDown1,{y:350,opacity:0.2,duration:2},5)
        tl6.to(sassDown2,{y:450,opacity:0,duration:1},5)
        tl6.to(sassUp1,{y:-450,opacity:0,duration:2},5)
        tl6.to(sassDown1,{y:450,opacity:0,duration:2},5)







        ScrollTrigger.create({
            trigger: container2,
            animation: tl2,
            start: "top center",
            end: "bottom center",
            scrub: true,
        })
        ScrollTrigger.create({
            trigger: container3,
            animation: tl3,
            start: "top center",
            end: "bottom center",
            scrub: true,
        })
        ScrollTrigger.create({
            trigger: container4,
            animation: tl4,
            start: "top center",
            end: "bottom center",
            scrub: true,
        })
        ScrollTrigger.create({
            trigger: container5,
            animation: tl5,
            start: "top center",
            end: "bottom center",
            scrub: true,
        })
    
        ScrollTrigger.create({
            trigger: container6,
            animation: tl6,
            start: "top center",
            end: "bottom center",
            scrub: true,
        })
        // NAV ANIMATION CHANGE COLOR
        
        tlNav2.to(navRef.current,{color:"#ffffff"})
        tlNav2.to(upMenuRef.current,{backgroundColor:"#ffffff"},0)
        tlNav2.to(downMenuRef.current,{backgroundColor:"#ffffff"},0)
        tlNav2.to(bgMenuRef.current,{backgroundColor:"#20262E"},0)
        tlNav2.to(dividerMenuRef1.current,{backgroundColor:"#ffffff"},0)
        tlNav2.to(dividerMenuRef2.current,{backgroundColor:"#ffffff"},0)
        tlNav2.to(dividerMenuRef3.current,{backgroundColor:"#ffffff"},0)
        tlNav2.to(dividerMenuRef4.current,{backgroundColor:"#ffffff"},0)
        tlNav2.to(dividerMenuRef5.current,{backgroundColor:"#ffffff"},0)
        ScrollTrigger.create({
            trigger:container2,
            animation: tlNav2,
            start: "top top",
            end: "bottom top",
            scrub:true
        })

    },[navRef,bgMenuRef,upMenuRef,downMenuRef,dividerMenuRef1,dividerMenuRef2,dividerMenuRef3,dividerMenuRef4,dividerMenuRef5])


return (
<>
        <div ref={container2Ref} className="skill__container">
            <div className="skill__content">
                <div ref={reactUp2Ref} className="animation__up--container-2">
                    <img className="skill__img--animation animation-up-2" src="./src/assets/images/about/reactLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-2">REACT</p>
                </div>
                <div ref={reactUp1Ref} className="animation__up--container-1">
                    <img className="skill__img--animation animation-up-1" src="./src/assets/images/about/reactLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-1">REACT</p>
                </div>
                <div ref={reactDown1Ref} className="animation__down--container-1">
                    <img className="skill__img--animation animation-down-1" src="./src/assets/images/about/reactLogo.png" alt="" />
                    <p className="skill__text--animation animation-down-1">REACT</p>
                </div>
                <div ref={reactDown2Ref} className="animation__down--container-2">
                    <img className="skill__img--animation animation-down-2" src="./src/assets/images/about/reactLogo.png" alt="" />
                    <p className="skill__text--animation animation-down-2">REACT</p>
                </div>
                <img className="skill__img" src="./src/assets/images/about/reactLogo.svg" alt="" />               
                <p className="skill__text">REACT</p>
            </div>
        </div>
        <div ref={container3Ref} className="skill__container">
            <div className="skill__content">
                <div ref={jsUp2Ref} className="animation__up--container-2">
                    <img className="skill__img--animation animation-up-2" src="./src/assets/images/about/jsLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-2">JAVASCRIPT</p>
                </div>
                <div ref={jsUp1Ref} className="animation__up--container-1">
                    <img className="skill__img--animation animation-up-1" src="./src/assets/images/about/jsLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-1">JAVASCRIPT</p>
                </div>
                <div ref={jsDown1Ref} className="animation__down--container-1">
                    <img className="skill__img--animation animation-down-1" src="./src/assets/images/about/jsLogo.png" alt="" />
                    <p className="skill__text--animation animation-down-1">JAVASCRIPT</p>
                </div>                
                <div ref={jsDown2Ref} className="animation__down--container-2">
                    <img className="skill__img--animation animation-down-2" src="./src/assets/images/about/jsLogo.png" alt="" />
                    <p className="skill__text--animation animation-down-2">JAVASCRIPT</p>
                </div>                
                <img className="skill__img" src="./src/assets/images/about/jsLogo.svg" alt="" />                                
                <p className="skill__text">JAVASCRIPT</p>
            </div>
        </div>
        <div ref={container4Ref} className="skill__container">
            <div className="skill__content">
                <div ref={tailwindUp2Ref} className="animation__up--container-2">
                    <img className="skill__img--animation animation-up-2" src="./src/assets/images/about/tailwindLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-2">TAILWIND</p>
                </div>
                <div ref={tailwindUp1Ref} className="animation__up--container-1">
                    <img className="skill__img--animation animation-up-1" src="./src/assets/images/about/tailwindLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-1">TAILWIND</p>
                </div>
                <div ref={tailwindDown1Ref} className="animation__down--container-1">
                    <img className="skill__img--animation animation-down-1" src="./src/assets/images/about/tailwindLogo.png" alt="" />
                    <p className="skill__text--animation animation-down-1">TAILWIND</p>
                </div>               
                <div ref={tailwindDown2Ref} className="animation__down--container-2">
                    <img className="skill__img--animation animation-down-2" src="./src/assets/images/about/tailwindLogo.png" alt="" />
                    <p className="skill__text--animation animation--2">TAILWIND</p>
                </div>               
                <img className="skill__img" src="./src/assets/images/about/tailwindLogo.svg" alt="" />                
                <p className="skill__text">TAILWIND</p>

            </div>
        </div>
        <div ref={container5Ref} className="skill__container bootstrap__skill">
            <div className="skill__content">
                <div ref={bootstrapUp2Ref} className="animation__up--container-2">
                    <img className="skill__img--animation animation-up-2" src="./src/assets/images/about/bootstrapLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-2">BOOSTRAP</p>
                </div>
                <div ref={bootstrapUp1Ref} className="animation__up--container-1">
                    <img className="skill__img--animation animation-up-1" src="./src/assets/images/about/bootstrapLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-1">BOOSTRAP</p>
                </div>
                <div ref={bootstrapDown1Ref} className="animation__down--container-1">
                    <img className="skill__img--animation animation-down-1" src="./src/assets/images/about/bootstrapLogo.png" alt="" />
                    <p className="skill__text--animation animation-down-1">BOOSTRAP</p>
                </div>
                <div ref={bootstrapDown2Ref} className="animation__down--container-2">
                    <img className="skill__img--animation animation-down-2" src="./src/assets/images/about/bootstrapLogo.png" alt="" />
                    <p className="skill__text--animation animation-down-2">BOOSTRAP</p>
                </div>
                <img className="skill__img" src="./src/assets/images/about/bootstrapLogo.svg" alt="" />
                <p className="skill__text">BOOSTRAP</p>
            </div>
        </div>
        <div ref={container6Ref} className="skill__container sass__skill">
            <div className="skill__content">
                <div ref={sassUp2Ref} className="animation__up--container-2">
                    <img className="skill__img--animation animation-up-2" src="./src/assets/images/about/sassLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-2">SASS</p>
                </div>
                <div ref={sassUp1Ref} className="animation__up--container-1">
                    <img className="skill__img--animation animation-up-1" src="./src/assets/images/about/sassLogo.png" alt="" />
                    <p className="skill__text--animation animation-up-1">SASS</p>
                </div>
                <div ref={sassDown1Ref} className="animation__down--container-1">
                    <img className="skill__img--animation animation-down-1" src="./src/assets/images/about/sassLogo.png" alt="" />
                    <p className="skill__text--animation animation-down-1">SASS</p>
                </div>
                <div ref={sassDown2Ref} className="animation__down--container-2">
                    <img className="skill__img--animation animation-down-2" src="./src/assets/images/about/sassLogo.png" alt="" />
                    <p className="skill__text--animation animation-down-2">SASS</p>
                </div>
                <img className="skill__img" src="./src/assets/images/about/sassLogo.svg" alt="" />
                <p className="skill__text">SASS</p>
            </div>
    </div>

</>
  )
}
