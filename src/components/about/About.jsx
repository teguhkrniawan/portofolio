import React from 'react'
import Tentang from '../../assets/avatar-2.svg'
import './About.css'
import AboutBox from './AboutBox'

const About = () => {
    return (
        <div>
            <section className="about container section" id='about'>
                <h2 className='section__title'>About Me</h2>

                <div className="about__container grid">
                    <img src={Tentang} alt="" className="about__img" />

                    <div className="about__data grid">
                        <div className="about__info">
                            <div className="about__description">
                                I am Teguh Kurniawan, web developer from Riau, Indonesia.
                                I have rich experience in web site design and building and customization,
                                also I am good at WordPress.
                            </div>
                            <a href="" className='btn'>Download CV</a>
                        </div>

                        <div className="about__skills grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Javascript</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage js">
                                </span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage php">
                                </span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS, SASS</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage sass">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <AboutBox />
            </section>
        </div>
    )
}

export default About