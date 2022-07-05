import React from "react";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { ThemeContext } from "./context";
import { useContext , useState} from "react";
import "../src/app.scss"
import Menu from "./components/menu/Menu";





const App= () => {


const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode;



const[menuOpen,setMenuOpen] = useState(false)



  return (
    <div className="app" style={{backgroundColor: darkMode ? "black" : "whitesmoke" , 
    color: darkMode && "whitesmoke"}}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen } setMenuOpen={setMenuOpen}/>
        <div className="sections">
         
        
        

        <Intro/>
       
        <About/>
        <ProductList/>
        <Contact/>
        </div>
    </div>
  );
}

export default App;
