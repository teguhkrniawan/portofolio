import React, { useState } from 'react'
import Work1 from "../../assets/work-1.svg"
import Work2 from "../../assets/work-2.svg"
import Work3 from "../../assets/work-3.svg"
import Work4 from "../../assets/work-4.svg"
import Work5 from "../../assets/work-5.svg"
import Work6 from "../../assets/work-6.svg"
import './Portofolio.css'

const Portofolio = () => {

  const data = [
    {
      id: 1,
      image: Work1,
      title: "Project Management Illustration",
      category: "Design",
    },
    {
      id: 2,
      image: Work2,
      title: "Guest App Walkthrough Screens",
      category: "Art",
    },
    {
      id: 3,
      image: Work3,
      title: "Delivery App Wireframe",
      category: "Branding",
    },
    ,
    {
      id: 4,
      image: Work4,
      title: "Onboarding Motivation",
      category: "Design",
    },
    ,
    {
      id: 5,
      image: Work5,
      title: "iMac Mockup Design",
      category: "Creative",
    },
    ,
    {
      id: 6,
      image: Work6,
      title: "Game Store App Concept",
      category: "Art",
    },
  ];


  const [menu, setMenu] = useState(data)
  const filterItem = (category) => {
      const updateItems = data.filter((element) => {
        return element.category === category
      })
      setMenu(updateItems)
  } 

  return (
    <div className='work container section' id='work'>
      <h2 className='section__title'>Recent Works</h2>

      <div className="work__filters">
        <span className="work__item"onClick={() => setMenu(data)}>Everything</span>
        <span className="work__item" onClick={() => filterItem('Creative')}>Creative</span>
        <span className="work__item" onClick={() => filterItem('Art')}>Art</span>
        <span className="work__item" onClick={() => filterItem('Design')}>Design</span>
        <span className="work__item" onClick={() => filterItem('Branding')}>Branding</span>
      </div>

      <div className="work__container grid">
        {
          menu.map((item) => (
            <div className='work__card' key={item.id}>
              <div className="work__thumbnail">
                <img src={item.image} alt={item.image} className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{item.category}</span>
              <h3 className="work__title">{item.title}</h3>
              <a href="#" className='work__button'>
                <i className='icon-link work__button-icon' ></i>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Portofolio