import React from 'react'
import './Hero.css'
import hunters from '../../assets/hunters.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      {/* <img src={hunters} alt="" /> */}
      <h1><span>I'm Teck Yong,</span> college student studying computer science degree in Malaysia</h1>
      <p>I'm a CS student from Malaysia, currently in my second year of Bachelor of Computer Science degree</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <a href="/final_resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
