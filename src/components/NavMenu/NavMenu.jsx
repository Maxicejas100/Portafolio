import { useNav } from '../../Context/NavProvider';
import '../Nav/nav.css'
export const NavMenu = ({menu}) => {
    const {bgMenuRef,dividerMenuRef1,dividerMenuRef2,dividerMenuRef3,dividerMenuRef4,dividerMenuRef5} = useNav()
  return (
    <div ref={bgMenuRef} className={`nav__menu--content ${menu?'nav__menu--animation':''}`} id='nav-menu'>
      <ul className="nav__link--container">
        <li className="nav__link">
          <p className="nav__link--text">INICIO</p>
          <hr ref={dividerMenuRef1} className='nav__divider'/>
        </li>
        <li className="nav__link">
          <p className="nav__link--text">SOBRE MI</p>
          <hr ref={dividerMenuRef2} className='nav__divider'/>
        </li>
        <li className="nav__link">
          <p className="nav__link--text">PROYECTOS</p>
          <hr ref={dividerMenuRef3} className='nav__divider'/>
        </li>
        <li className="nav__link">
          <p className="nav__link--text">SERVICIOS</p>
          <hr ref={dividerMenuRef4} className='nav__divider'/>
        </li>
        <li className="nav__link">
          <p className="nav__link--text">CONTACTO</p>
          <hr ref={dividerMenuRef5} className='nav__divider'/>
        </li>
      </ul>
    </div>
  );}