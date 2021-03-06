import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Typewriter from 'typewriter-effect';
import { Component } from "react";
import logo from "./newlogo2.png";
import ImageGallery from 'react-image-gallery';
import sublease1 from "./images/sublease1.png";
import sportune from "./images/sportune.png";
import ModalImage from "react-modal-image";
import sgconnect from "./images/sgconnect.png";
import codeforgood from "./images/codeforgood.png";

class Projects extends Component {
  render() {
    let commonStyle = { width: '100%', height: '100vh', backgroundColor: '#D1EAFF' };
    let buttonStyle = { marginTop: 7.5, marginBottom: 7.5, marginLeft: 10, marginRight: 10, };
    return (
      <div style={commonStyle} className='color-page'>
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
        <div class="animate__animated animate__fadeInUp" style={{backgroundColor: '#D1EAFF', justifyContent: 'center'}}>
          <h4 style={{fontSize: 60, color: '#044A85', fontWeight: 1000, textAlign: 'center', margin: 'auto', marginTop: 40}}>
                      <Typewriter
                          onInit={(typewriter) => {
                            typewriter.changeDelay(100);
                            typewriter.typeString('Projects')
                              .start();
                          }}          
                          />
          </h4>
          <br/>
          <div class='flex-container' className='flex-container' style={{flex: 1}}>
            <section class='typewriter' className='flex-container' style={{flex: 1}}>
              <div className='about-me-section'>

                <div style={{justifyContent: 'center', textAlign: 'center'}}>
                    <h4 style={{ marginBottom: 10, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>SGConnect</h4>
                    <h3 style={{textAlign: 'center'}}><i><b>Built for UT Student Government</b></i></h3>
                  </div>
                  <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                    <span style={{marginLeft: 15, marginRight: 15, marginTop: 7.5}}>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="mailto:brayden.miller@utexas.edu" size="70" />
                    </span>                    
                    <span style={{marginLeft: 15, marginRight: 15, marginTop: 7.5}}>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="web" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://utsgconnect.com/posts" size="70" />
                    </span>
                  </div>
                  <br/>
                  <div>
                    <h3 className='about-me-desc' style={{ textAlign: 'center' }}>SGConnect is a forum for students to ask questions and send feedback to UT Student Government representatives. UT Student Government utilizes SGConnect as a way to engage with the student body of over 40,000 Longhorns, receive feedback on initiatives, and ultimately better represent students. <i>Code in private repository available upon email request.</i></h3> 
                  </div>
                  <br/>
                  <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                    <h3 className='about-me-desc'  style={{  textAlign: 'center' }}><b>Technologies: React.js, JavaScript, Spring Boot, AWS, Postman</b></h3>
                  </div>
                  <br/>
                  <div style={{justifyContent: 'center', textAlign: 'center'}}>
                    <img src={sgconnect} width='100%' height='auto'></img>
                  </div>
                  <br/>
              </div>
            </section>
          </div>
          <div class='flex-container' className='flex-container' style={{flex: 1}}>
            <section class='typewriter' className='flex-container' style={{flex: 1}}>
              <div className='about-me-section'>

                <div style={{justifyContent: 'center', textAlign: 'center'}}>
                    <h4 style={{ marginBottom: 10, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>MAPIFY</h4>
                    <h3 style={{textAlign: 'center'}}><i><b>Winner: Best Use of Wolfram Technology at PennApps XXI</b></i></h3>
                  </div>
                  <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                    <span style={{marginLeft: 15, marginRight: 15, marginTop: 7.5}}>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://github.com/ayushgarg-ag/PennApps2020" size="70" />
                    </span>
                    <span style={{marginLeft: 15, marginRight: 15, marginTop: 7.5}}>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="web" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://devpost.com/software/mapify-wklmn6" size="70" />
                    </span>
                  </div>
                  <br/>
                  <div>
                    <h3 className='about-me-desc' style={{ textAlign: 'center' }}>A beacon of knowledge for those looking to learn more about the world's geography and demography! MAPIFY provides information about countries and cultures around the world along with states in the U.S. by leveraging the power of Wolfram|Alpha, all while using a map visualizer to bolster users' knowledge of global geography!</h3> 
                  </div>
                  <br/>
                  <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                    <h3 className='about-me-desc'  style={{  textAlign: 'center' }}><b>Technologies: Flask, Python, JavaScript, HTML5, CSS, Wolfram|Alpha Short Answers API</b></h3>
                  </div>
                  <br/>
                  <div style={{justifyContent: 'center', textAlign: 'center'}}>
                    <iframe width="100%" height="543"
                      src="https://www.youtube.com/embed/jzuHhhL0ne8">
                    </iframe>
                  </div>
                  <br/>
              </div>
            </section>
          </div>
          <div class='flex-container'>
            <section class='typewriter' className='flex-container' style={{flex: 0.66}}>
              <div className='about-me-section'>
                <div className='flex-container' style={{justifyContent: 'center'}}>
                  <h4 style={{ marginBottom: 18, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>Girls Connect</h4>
                </div>
                <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="mailto:brayden.miller@utexas.edu" size="60" />
                </div>
                <br/>
                <div>
                    <h3 className='about-me-desc' style={{ textAlign: 'center' }}>Multi-page React application built for a Chicago non-profit, Girls in the Game, to incentivize physical activity during the COVID-19 pandemic. Built for the JPMorgan Chase Code for Good Hackathon in 2020. <i>Code in private repository available upon email request.</i></h3> 
                    <br/>
                    <div style={{justifyContent: 'center'}}>
                      <h3 className='about-me-desc'  style={{ textAlign: 'center' }}><b>Technologies: React.js, HTML5, CSS, Firestore</b></h3>
                    </div>
                    <br/>
                    <img style={{marginBottom: 15}}src={codeforgood} width='100%' height='auto'></img> 
                </div>
              </div>
            </section>
            <section class='content' className='flex-container' style={{flex: 0.33}}>
              <div className='about-me-section'>
              <div class='about-me-section'>
                <div className='flex-container' style={{justifyContent: 'center'}}>
                  <h4 style={{ marginBottom: 18, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>Personal Website</h4>
                </div>
                <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://github.com/braymill/vercel-test" size="60" />
                </div>
                <br/>
                <div className='flex-container' >
                    <h3 className='about-me-desc' style={{  textAlign: 'center' }}>Multi-page React web application (this website!) built to showcase my background and experience as a software engineer and computer science student.</h3>
                </div>
                <br/>
                <div className='flex-container' style={{justifyContent: 'center'}}>
                  <h3 className='about-me-desc' style={{  textAlign: 'center' }}><b>Technologies: React.js, HTML5, CSS, SCSS, JavaScript, Vercel/GitHub Pages</b></h3>
                </div>
                <br/>
                <div style={{textAlign: 'center', justifyContent: 'center'}}>
                  <img src={logo} width='50%' height='auto'></img>
                </div>
              </div>
              
               
              </div>
            </section>
          </div>
          <div></div>
          <div class='flex-container' className='flex-container' style={{flex: 1}}>
            {/* <section class='typewriter' className='flex-container' style={{flex: 1}}>
              <div className='about-me-section'>

              <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                    <h4 style={{ marginBottom: 18, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>Sportune</h4>
                  </div>
                  <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://github.com/braymill/sportune" size="60" />
                  </div>
                  <br/>
                  <div className='flex-container'>
                      <h3 className='about-me-desc'  style={{  textAlign: 'center' }}>Statistical model that aims to accurately assign fair salaries to NBA players based on yearly player performance statistics.</h3>
                  </div>
                  <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                    <h3 className='about-me-desc'  style={{  textAlign: 'center' }}><b>Technologies: Python (pandas, numpy, scikit-learn)</b></h3>
                </div>
              </div>
            </section> */}
            <section class='content' className='flex-container' style={{flex: 1}}>
              <div class='about-me-section'>
                <div className='flex-container' style={{justifyContent: 'center'}}>
                  <h4 style={{ marginBottom: 18, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>Competitive Programming</h4>
                </div>
                <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://github.com/braymill/Competitive-Programming" size="60" />
                </div>
                <br/>
                <div className='flex-container' >
                    <h3 className='about-me-desc'  style={{ textAlign: 'center' }}>Solving advanced programming and algorithm problems as quickly as possible! Repository contains all of the problems I've solved from various competitions (Codeforces, UTPC, LeetCode Weekly Contests, Google Kick Start).</h3>
                </div>
                <div className='flex-container' style={{justifyContent: 'center'}}>
                  <h3 className='about-me-desc'  style={{ textAlign: 'center' }}><b>Technologies: C++, Java, Python</b></h3>
                </div>
              </div>
            </section>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default Projects;