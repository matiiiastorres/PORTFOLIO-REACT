import Toggle from "../toggle/Toggle"
import "./menu.scss"
import CV from "../../assets/CV-MATIAS-TORRES Actual.pdf"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li  onClick={()=> setMenuOpen(false)}>
                <a href="#intro">INTRO</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>

                <a href="#about">ABOUT</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>

                <a href="#productlist">PORTFOLIO</a>
            </li>

            <li onClick={()=> setMenuOpen(false)}>

                <a href="#contact">CONTACT</a>
            </li>
             <li onClick={()=> setMenuOpen(false)}>

                <a  href={CV}
        download="CV-MATIAS-TORRES.pdf" >DL CV</a>
            </li>

       

        </ul>

        <Toggle  />
        
    </div>
  )
}
