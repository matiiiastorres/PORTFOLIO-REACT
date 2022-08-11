import React from "react";
import "./about.css";
import titulo from "../../img/titulo rolling.jpg";
import argentina from "../../img/Opera Instantánea_2022-06-11_170949_mumuki.io.png";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://portfoliomatiastorres.netlify.app/images/images/ZZZ.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am very self-taught I love everything related to web design In
          addition to having the training and experience of working in a team.
        </p>
        <p className="a-desc"></p>

        <div className="a-award-1">
          <a href="#id02">
            <img className="img-modal" alt="Logo" src="https://certs.rollingcodeschool.com/bWF0aWlpYXN0b3JyZXNAZ21haWwuY29t-1660166485475_1.png "/>
          </a>
          <div className="a-award-texts">
            <p className="a-award-title">Rolling Code School Certificate</p>
            <p className="a-award-desc">
              Complete the Full Stack Web Developer Course
            </p>
          </div>
        </div>

        <div className="a-award">
          <a href="#id01">
            <img className="img-modal" alt="" src="https://mumuki.io/argentina-programa/certificates/verify/hIv3o4WnETD3cZzE" />
          </a>
          <div className="a-award-texts">
            <p className="a-award-title">Certificate Argentina Program</p>
            <p className="a-award-desc">
            Pass the first stage of the Full Stack Web Developer course
            </p>
          </div>
        </div>

        <div id="id02" className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <a href="#about" className="closebtn">
                <i class="fa fa-long-arrow-left"></i> Back
              </a>

              <img src="https://certs.rollingcodeschool.com/bWF0aWlpYXN0b3JyZXNAZ21haWwuY29t-1660166485475_1.png  "className="imagen-rolling" alt="" />
            </div>
          </div>
        </div>

        <div id="id01" className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <a href="/#" className="closebtn">
                <i className="fa fa-long-arrow-left"></i> Back
              </a>

              <img src="https://mumuki.io/argentina-programa/certificates/verify/hIv3o4WnETD3cZzE" className="imagen-argentina" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
