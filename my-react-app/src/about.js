import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import logo from "./newlogo2.png";
import picture from './circle-cropped.png';
import verticalpic from './Brayden.JPEG';
import Button from "react-bootstrap/Button";
import {SocialMediaIconsReact} from 'social-media-icons-react';

class About extends Component {
  render() {
    let commonStyle = { width: '100%', height: '100vh', backgroundColor: '#D1EAFF' };
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
            <div class='flex-container' style={{backgroundColor: '#D1EAFF'}}>
                <section class='typewriter' className='flex-container' style={{flex: 2}}>
                    <section class='about-me-section'>
                    <div className='flex-container' style={{justifyContent: 'center'}}>
                        <h4 style={{fontSize: 60, color: '#044A85', fontWeight: 1000, textAlign: 'center', margin: 'auto' }}>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.changeDelay(100);
                                        typewriter.typeString('About Me')
                                        .start();
                                    }}          
                                    />
                        </h4>
                    </div>
                    <br/>
                    <div>
                        <div className='flex-container'>
                            <h2 style={{fontSize: 27}}>
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.changeDelay(75);
                                            typewriter.typeString('<span class="redText">const</span> brayden = {')
                                            typewriter.start();
                                        }}        
                                        />
                            </h2>
                        </div>
                        <h2 style={{fontSize: 27}}>
                            &nbsp;&nbsp;<span style={{color: '#225ebe'}}>pronouns: </span><span style={{color: '#044A85'}}>[<span style={{color: '#d4692b'}}>"he"</span><span style={{color: '#000'}}>,</span> <span style={{color: '#d4692b'}}>"him"</span>]</span>,
                        </h2>
                        <h2 style={{fontSize: 27}}>
                            &nbsp;&nbsp;<span style={{color: '#225ebe'}}>coding: </span><span style={{color: '#044A85'}}>[Java<span style={{color: '#000'}}>,</span> C++<span style={{color: '#000'}}>,</span> C<span style={{color: '#000'}}>,</span> Python<span style={{color: '#000'}}>,</span> JavaScript<span style={{color: '#000'}}>,</span> HTML5<span style={{color: '#000'}}>,</span> CSS<span style={{color: '#000'}}>,</span> SCSS]</span>,
                        </h2>
                        <h2 style={{fontSize: 27}}>
                            &nbsp;&nbsp;<span style={{color: '#225ebe'}}>technologies: </span><span style={{color: '#044A85'}}>[React.js<span style={{color: '#000'}}>,</span> Node.js<span style={{color: '#000'}}>,</span> Git<span style={{color: '#000'}}>,</span> Vercel]</span>,
                        </h2>
                        <h2 style={{fontSize: 27}}>
                            &nbsp;&nbsp;<span style={{color: '#225ebe'}}>organizations: </span><span style={{color: '#044A85'}}>[Texas Product Engineering Organization<span style={{color: '#000'}}>,</span> Texas Undergraduate Investment Team<span style={{color: '#000'}}>,</span> Natural Sciences Council]</span>,
                        </h2>
                        <h2 style={{fontSize: 27}}>
                            &nbsp;&nbsp;<span style={{color: '#225ebe'}}>interests: </span><span style={{color: '#044A85'}}>[<span style={{color: '#d4692b'}}>"American politics"</span><span style={{color: '#000'}}>,</span> <span style={{color: '#d4692b'}}>"investing"</span><span style={{color: '#000'}}>,</span> <span style={{color: '#d4692b'}}>"competitive programming"</span><span style={{color: '#000'}}>,</span> <span style={{color: '#d4692b'}}>"board games"</span><span style={{color: '#000'}}>,</span> <span style={{color: '#d4692b'}}>"poker"</span><span style={{color: '#000'}}>,</span></span> <span style={{color: '#d4692b'}}>"Korean dramas"</span><span style={{color: '#044A85'}}>]</span>                   
                        </h2>
                        <h2 style={{fontSize: 27}}>
                            &nbsp;&nbsp;<span style={{color: '#225ebe'}}>fun-fact: </span><span style={{color: '#d4692b'}}>"My twin sister and I have different birthdays!"</span>
                        </h2>
                        <h2 style={{fontSize: 27}}>
                            }
                        </h2>
                    </div>
                    
                    </section>
                </section>
                <section class='content' className='flex-container' style={{flex: 1}}>
                        <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                            <section class='about-me-section'>
                                <div className='flex-container' style={{textAlign: 'center', justifyContent: 'center'}}>
                                    <img src={picture} width='80%' height='auto'></img>
                                </div>
                                <br/>
                                <div className='flex-container' style={{textAlign: 'center', justifyContent: 'center'}}>
                                    <h4 style={{fontWeight: 700, fontSize: 40, marginTop: 10}}>Software Developer and Student based in Austin, TX</h4>
                                </div>
                                <div className='flex-container' style={{textAlign: 'center', justifyContent: 'center'}}>
                                    <h3 style={{fontSize: 22, marginTop: 10}}>My dream is to wake up every day and work on something new that changes the world. I continue to strive to become the best version of myself by taking risks, asking questions, and working passionately!</h3>
                                </div>
                                <div className='flex-container' style={{textAlign: 'center', justifyContent: 'center', marginTop: 15}}>
                                    <Button className="btn-2" style={buttonStyle} href=""><b>&nbsp;RESUME&nbsp;</b></Button>
                                    <span style={{marginLeft: 10, marginRight: 10, marginTop: 7.5}}>
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://www.linkedin.com/in/braymill/" size="60" />
                                    </span>
                                    <span style={{marginLeft: 10, marginRight: 10, marginTop: 7.5}}>
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://github.com/braymill" size="60" />
                                    </span>
                                    <span style={{marginLeft: 10, marginRight: 10, marginTop: 7.5}}>
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="mailto:brayden.miller@utexas.edu" size="60" />
                                    </span>
                                </div>
                            </section>
                        </div>
                </section>
            </div>
            
        </div>

        
        
      </div>
    );
  }
}

export default About;