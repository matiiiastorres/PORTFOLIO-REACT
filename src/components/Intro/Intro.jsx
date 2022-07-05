import React from "react";
import "./intro.css";
import yo from "../../img/iconos/WhatsApp_Image_2022-06-21_at_4.01.15_PM-removebg-preview.png";



const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Matias Torres</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">UI/UX Desingner</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Backend Developer</div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for customer of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </div>


          

          
        </div>
        
          
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={yo} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
