import React from 'react'
import './Service.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-1.svg'


const Services = () => {

  const data = [
    {
      id: 1,
      image: Image1,
      title: "Businness Analyts",
      description:
        "I can help you to grow up your bussiness into a digital platform with the power of technology",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "Also i can help you create web-based applications so that your bussiness can grow",
    },
    {
      id: 3,
      image: Image3,
      title: "Mobile Development",
      description:
        "I can help you create mobile android applications so that your bussiness can grow up",
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