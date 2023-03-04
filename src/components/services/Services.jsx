import React from 'react'
import './Service.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const Services = () => {

  const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
    },
    {
      id: 3,
      image: Image3,
      title: "Photography",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
    },
  ];
  

  return (
    <div>
        <section id='services' className='services container section'>
          <h2 className="section__title">
            Services
          </h2>

          <div className="services__container grid">
            {
              data.map((item) => (
                <div className='services__card' key={item.id}>
                    <img src={item.image} alt={item.name} className='services__img' />
                    <h3 className='services__title'>{item.title}</h3>
                    <p className="services__description">{item.description}</p>
                </div>
              ))
            }
          </div>
        </section>
    </div>
  )
}

export default Services