import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import tejas from "../images/about/tejas.JPG";
import top10 from "../images/about/top10.png";
import tpeo from "../images/about/tpeo.png";
import { animations } from 'react-animation'
import groupcircle from '../images/about/categories/groupcircleupdated.png';
import laptopcircle from '../images/about/categories/laptopcircle.png';
import puzzlecircle from '../images/about/categories/puzzlecircle.png';
import utcircle from '../images/about/categories/utcircle.png';
import groupinvert from '../images/about/categories/inverted/groupinvert.png';
import laptopinvert from '../images/about/categories/inverted/laptopinvert.png';
import puzzleinvert from '../images/about/categories/inverted/puzzleinvert.png';
import utinvert from '../images/about/categories/inverted/utinvert.png';
import Typewriter from 'typewriter-effect';
import logo from "../images/newlogo2.png";

class AboutMe extends Component {
  render() {
    let commonStyle = { width: '100%', height: '500vh', backgroundColor: '#D1EAFF' };
    let buttonStyle = { marginTop: 7.5, marginBottom: 7.5, marginLeft: 10, marginRight: 10, };
    return (
      <div style={commonStyle} className="color-page">
        <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
        />
      </head>
       <div class="header">
            <a href="/"><img src={logo} width='60px' height='80px'></img></a>
            <div class="header-left">
                <a href='/'><h1 style={{ fontSize: 30, letterSpacing: 3, color: '#ddd' }}><b>BRAYDEN MILLER • SOFTWARE DEVELOPER @ UT AUSTIN</b></h1></a>
            </div>
        </div>
        <div class="animate__animated animate__fadeInUp">
          <div className='flex-container' style={{justifyContent: 'center', backgroundColor: '#D1EAFF'}}>
          <h2 style={{fontSize: 60, color: '#044A85', fontWeight: 1000, textAlign: 'center', margin: 'auto', marginTop: 40}}>
                      <Typewriter
                          onInit={(typewriter) => {
                            typewriter.changeDelay(100);
                            typewriter.typeString('About Me')
                              .start();
                          }}          
                          />
            </h2>
          </div>
          <div className='flex-container' style={{justifyContent: 'space-between', alignItems: 'center', padding: '20px 3%', marginTop: 40, backgroundColor: '#D1EAFF'}}>
            {/* <div>
            <img src={utcircle} width='250px' height='250px'></img>
            <h4 style={{marginTop: 7, textAlign: 'center', fontSize: 27}}><b>COLLEGE</b></h4>
            </div> */}
            <div style={{textAlign: 'center', marginBottom: 100}}>
              <a href='#skills'><img src={laptopcircle} width='300px' height='300px' style={{onClick: animations.fadeIn}}></img></a>
              <h4 style={{marginTop: 7, textAlign: 'center', fontSize: 27}}><b>SKILLS</b></h4>
            </div>
            <div style={{textAlign: 'center', marginBottom: 100} }>
              <a href='#group'><img src={groupcircle} width='300px' height='300px'></img></a>
              <h4 style={{marginTop: 7, textAlign: 'center', fontSize: 27}}><b>INVOLVEMENT</b></h4>
            </div>  
            <div style={{textAlign: 'center', marginBottom: 100}}>
              <div id='interestsicon' onclick='animationOnClick()'>
                <a href='#interests'><img src={puzzlecircle} width='300px' height='300px'></img></a>
              </div>
              
              <h4 style={{marginTop: 7, textAlign: 'center', fontSize: 27}}><b>INTERESTS</b></h4>
            </div>
          </div>

          <div style={{backgroundColor: '#D1EAFF'}}>
          <section style={{marginTop: 200}} id='skills' className='about-me-section' >
            <div className='flex-container' style={{textAlign: 'center', justifyContent: 'center'}}>
                <div style={{textAlign: 'center', marginBottom: 100}}>
                  <img src={laptopinvert} width='200px' height='200px'></img>
                  <h4 style={{fontSize: 50, color: '#C08497', textAlign: 'center', margin: 'auto', marginTop: 7}}>
                      <b>Versatility: A Variety of Technologies</b>
                      <div className='flex-container' style={{marginTop: 55, textAlign: 'left', justifyContent: 'center'}}>
                        <div>
                          <div style={{textAlign: 'center'}}>
                            <h4 style={{fontSize: 39, color: '#767779'}}><u>Languages</u></h4>
                          </div>
                          <ul style={{fontSize: 35, color: '#767779'}}>
                            <li>Java</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                        <div style={{marginLeft: 85}}>
                          <div style={{textAlign: 'center'}}>
                            <h4 style={{fontSize: 39, color: '#767779'}}><u>Technologies</u></h4>
                          </div>
                          <ul style={{fontSize: 35, color: '#767779'}}>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Git</li>
                          </ul>
                        </div>
                      </div>
                  </h4>
                </div>
            </div>
          </section>

          <section style={{marginTop: 200}} id='group' className='about-me-section'>
          <div className='flex-container' style={{textAlign: 'center', justifyContent: 'center'}}>
                <div style={{textAlign: 'center', marginBottom: 100}}>
                  <img src={groupinvert} width='200px' height='200px'></img>
                  <h4 style={{fontSize: 50, color: '#39A0ED', textAlign: 'center', margin: 'auto', marginTop: -25}}>
                      <b>Collaboration: Spearheading Team Ventures</b>
                  </h4>
                </div>
            </div>
          </section>

          <section style={{marginTop: 200}} id='interests' className='about-me-section'> 
          <div className='flex-container' style={{textAlign: 'center', justifyContent: 'center'}}>
                <div style={{textAlign: 'center', marginBottom: 100}}>
                  <img src={puzzleinvert} width='200px' height='200px'></img>
                  <h4 style={{fontSize: 50, color: '#13C4A3', textAlign: 'center', margin: 'auto', marginTop: 7}}>
                      <b>Passions: Beyond the Keyboard</b>
                  </h4>
                </div>
            </div>
          </section>
        </div>
        </div>
        

        
        
      </div>
    );
  }
}

export default AboutMe;