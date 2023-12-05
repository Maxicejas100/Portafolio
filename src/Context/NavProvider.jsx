import React, { useContext, useRef, useState } from "react"

const NavContext = React.createContext([])
export const useNav = ()=>{
    return useContext(NavContext)
}





export const NavProvider = ({children}) => {
    const [nav, setNav] = useState({bg:'',textcolor:''})
    const navRef = useRef(null)
    const downMenuRef = useRef(null)
    const upMenuRef = useRef(null)
    const bgMenuRef = useRef(null)
    const dividerMenuRef1 = useRef(null)
    const dividerMenuRef2 = useRef(null)
    const dividerMenuRef3 = useRef(null)
    const dividerMenuRef4 = useRef(null)
    const dividerMenuRef5 = useRef(null)
    
  return (
    <NavContext.Provider value={{nav,setNav,navRef,downMenuRef,upMenuRef,bgMenuRef,dividerMenuRef1,dividerMenuRef2,dividerMenuRef3,dividerMenuRef4,dividerMenuRef5}}>
        {children}
    </NavContext.Provider>
  )
}
