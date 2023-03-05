import React from 'react'

const AboutBox = () => {
    return (
        <div className='about__boxes grid'>
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
            
                <div>
                    <h3 className="about__title">13+</h3>
                    <span className="about__subtitle">Project Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-bulb"></i>
            
                <div>
                    <h3 className="about__title">3</h3>
                    <span className="about__subtitle">Research Paper</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>
            
                <div>
                    <h3 className="about__title">5+</h3>
                    <span className="about__subtitle">IT Certification</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>
            
                <div>
                    <h3 className="about__title">3</h3>
                    <span className="about__subtitle">Achievement</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox