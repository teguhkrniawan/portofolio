import React from 'react'

const HeaderSocials = () => {
  return (
    <div>
        <div className="home__socials">
            <a href="https://instagram.com/teguh_krniawan" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-instagram'></i>
            </a>

            <a href="https://linkedin.com/in/teguhkrniawan/" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-linkedin'></i>
            </a>

            <a href="#" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-twitter'></i>
            </a>

            <a href="#" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-facebook'></i>
            </a>

            <a href="https://github.com/teguhkrniawan" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-github'></i>
            </a>
        </div>
    </div>
  )
}

export default HeaderSocials