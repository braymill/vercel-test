import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Typewriter from 'typewriter-effect';
import { Component } from "react";
import logo from "./newlogo2.png";



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
          <div class='flex-container'>
            <section class='typewriter' className='flex-container' style={{flex: 1}}>
              <div className='about-me-section'>
                <div className='flex-container' style={{justifyContent: 'center'}}>
                  <h4 style={{ marginBottom: 18, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>SubleaseUT</h4>
                </div>
                <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="mailto:brayden.miller@utexas.edu" size="60" />
                </div>
                <br/>
                <div>
                    <h3 style={{ fontSize: 22, textAlign: 'center' }}>Full-stack web platform for UT students to find and offer subleases for apartment units, parking spots, and more in the Austin area! Code in private repository is available upon email request.</h3>
                </div>
                <div style={{justifyContent: 'center'}}>
                  <h3 style={{ fontSize: 22, textAlign: 'center' }}><b>Technologies: React.js, HTML5, CSS, JavaScript, Lambda, DynamoDB</b></h3>
                </div>
              </div>
            </section>
            <section class='content' className='flex-container' style={{flex: 1}}>
              <div className='about-me-section'>
                <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                  <h4 style={{ marginBottom: 18, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>Sportune</h4>
                </div>
                <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://github.com/braymill/sportune" size="60" />
                </div>
                <br/>
                <div className='flex-container'>
                    <h3 style={{ fontSize: 22, textAlign: 'center' }}>Beginner data science project aiming to accurately assign fair salaries to NBA players based on player performance statistics. Completed as part of the Convergent Data Science Build Team.</h3>
                </div>
                <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                  <h3 style={{ fontSize: 22, textAlign: 'center' }}><b>Technologies: Python (numpy, scikit-learn)</b></h3>
                </div>
              </div>
            </section>
          </div>
          <div class='flex-container' className='flex-container' style={{flex: 1}}>
            <section class='typewriter' className='flex-container' style={{flex: 1}}>
              <div class='about-me-section'>
                <div className='flex-container' style={{justifyContent: 'center'}}>
                  <h4 style={{ marginBottom: 18, fontSize: 40, fontWeight: 700, justifyContent: 'center', textAlign: 'center' }}>Personal Website</h4>
                </div>
                <div className='flex-container' style={{justifyContent: 'center', textAlign: 'center'}}>
                  <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(4,74,133,1)" iconSize="5" roundness="20%" url="https://github.com/braymill/vercel-test" size="60" />
                </div>
                <br/>
                <div className='flex-container' >
                    <h3 style={{ fontSize: 22, textAlign: 'center' }}>Multi-page web application built to showcase my background and experience as a software engineer and student.</h3>
                </div>
                <div className='flex-container' style={{justifyContent: 'center'}}>
                  <h3 style={{ fontSize: 22, textAlign: 'center' }}><b>Technologies: React.js, HTML5, CSS, SCSS, JavaScript, Vercel, GitHub Pages</b></h3>
                </div>
              </div>
            </section>
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
                    <h3 style={{ fontSize: 22, textAlign: 'center' }}>Repository of the various advanced programming problems I've solved from sponsored competitions (Codeforces, UTPC, LeetCode Weekly Contests, Google Kick Start).</h3>
                </div>
                <div className='flex-container' style={{justifyContent: 'center'}}>
                  <h3 style={{ fontSize: 22, textAlign: 'center' }}><b>Technologies: C++, Java, Python</b></h3>
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