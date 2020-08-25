import React from 'react';
import Button from "react-bootstrap/Button";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import headshot from './images/headshot-outline.jpg'
import Typewriter from 'typewriter-effect';
import { Component } from "react";
import logo from "./newlogo2.png";



class MidLanding extends Component {
  render() {
    let commonStyle = { width: '100%', height: '100vh', backgroundColor: '#D1EAFF' };
    let buttonStyle = { marginTop: 7.5, marginBottom: 7.5, marginLeft: 20, marginRight: 20 };
    return (
      <div style={commonStyle}>
          <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
            />
         </head>
        <div class="header" width='100vw' style={{backgroundColor: '#767779'}}>
            <a href="/"><img src={logo} width='60px' height='80px'></img></a>
            <div class="header-left">
                <a href='/'><h1 style={{ fontSize: 30, letterSpacing: 3, color: '#ddd' }}><b>BRAYDEN MILLER • SOFTWARE DEVELOPER @ UT AUSTIN</b></h1></a>
            </div>
        </div>
        {/* <header style={{backgroundColor: '#767779'}}>
            <span>
                <img src={logo} width="5%" height="5%" alt="Brayden Miller Digital Portfolio"></img>
            </span>
            
            <span className='flex-container' style={{justifyContent: 'center'}}>
                <h1 style={{ fontSize: 30, letterSpacing: 3, color: '#ddd', textAlign: 'center'}}><b>BRAYDEN MILLER • SOFTWARE DEVELOPER @ UT AUSTIN</b></h1>
                
            </span>
            
        </header> */}
        <div class="animate__animated animate__fadeInUp">
            <div class='flex-container' style={{padding: '0 3%', backgroundColor: '#D1EAFF' }}>
                <section class='typewriter'>
                <div className='flex-container' style={{textAlign: 'center', justifyContent: 'center'}}>
                    <div style={{textAlign: 'center', justifyContent: 'center'}}>
                        <h4 style={{fontSize: 60, color: '#044A85', fontWeight: 1000, textAlign: 'center', margin: 'auto'}}>
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.changeDelay(50);
                                            typewriter.typeString('Hello, my name is Brayden Miller!')
                                            typewriter.start();
                                        }}        
                                        />
                        </h4>
                        <h2 style={{fontSize: 45, textAlign: 'center', margin: 'auto'}}>
                            <Typewriter
                                options={{
                                pauseFor: 1000,
                                strings: ['Programmer', 'Software Engineer', 'Student'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 40,
                                delay: 50,
                                }}            
                                />
                        </h2>
                    </div>
                </div>
                <div style={{marginTop: 50, textAlign: 'center'}}>
                    <img class='headshot' src={headshot} width='45%' height='auto'></img>
                </div>
                <br/>
                
                <div class='flex-container'>
                    <section class='typewriter' className='flex-container' style={{flex: 1}}>
                        <div className='about-me-section'>
                            <div className='flex-container' style={{justifyContent: 'center'}}>
                                <h4 style={{ marginBottom: 18, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>Learn More About Me</h4>
                            </div>
                            <div className='flex-container' >
                                <h3 className='about-me-desc' style={{ textAlign: 'center' }}>As an interdisciplinary software developer and student, I am deeply passionate in merging my interests for computer science, mathematics, and finance in areas like full-stack software engineering, quantitative finance, and data science. I am always excited to take on new challenges and continue growing as a developer! <b>Currently, I am seeking a software engineering internship for Summer 2021!</b></h3>
                            </div>
                            <br/>
                        <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                            <Button className="btn-1" style={buttonStyle} href="/about-me"><h4 className='about-me-desc' style={{fontWeight: 1000}}>ABOUT ME</h4></Button>
                            <Button className="btn-1" style={buttonStyle} href="/projects"><h4 className='about-me-desc' style={{fontWeight: 1000}}>PROJECTS</h4></Button>
                        </div>
                        
                        
                        <br/>
                        </div>
                        {/* <div className='flex-container' margin="auto" style={{justifyContent: 'center', textAlign: 'center'}}>
                            <img src={blueline} width="100%" height="25px" margin="auto"></img>
                        </div> */}
                    </section>
                    {/* <section class='content' className='flex-container' style={{flex: 1}}>
                        <div className='about-me-section'>
                        <div className='flex-container' style={{justifyContent: 'center'}}>
                            <h4 style={{ marginBottom: 18, fontSize: 40, fontWeight: 700, textAlign: 'center' }}>Connect With Me</h4>
                        </div>
                        <div className='flex-container' style={{justifyContent: 'center'}}>
                            <h3 style={{ fontSize: 22, textAlign: 'center' }}>I'm always excited to take on new challenges and grow as a developer in areas like full-stack software engineering, quantitative finance, financial technology, or data science. Please feel free to reach out at any time!</h3>
                        </div>
                        <br/>
                        <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                            <span style={{marginLeft: 10, marginRight: 10}}>
                                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://www.linkedin.com/in/braymill/" size="60" />
                            </span>
                            <span style={{marginLeft: 10, marginRight: 10}}>
                                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://github.com/braymill" size="60" />
                            </span>
                            <span style={{marginLeft: 10, marginRight: 10}}>
                                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="mailto:brayden.miller@utexas.edu" size="60" />
                            </span>
                        </div>
                        <br/>
                        </div>
                    </section> */}
                </div>
                
                </section>
            </div>
        </div>
        
      </div>
    );
  }
}

export default MidLanding;