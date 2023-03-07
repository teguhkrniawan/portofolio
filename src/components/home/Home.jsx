import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shape from './Shape';

const Home = () => {
  return (
    <div className='home container' id='home'>
      <div className="intro">
        <img src={Me} alt='avatar' className='home__img' />
        <h1 className="home__name">Teguh Kurniawan</h1> 
        <span className='home__education'>I'am a Fullstack Developer</span>     

        <HeaderSocials />
        <a href="#home" className='btn'>My Portofolio</a>

        <ScrollDown />
        <Shape />
      </div>
    </div>
  )
}

export default Home