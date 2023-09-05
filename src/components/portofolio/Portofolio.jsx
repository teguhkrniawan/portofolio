import React, { useState } from 'react'
import Work1 from "../../assets/projects/akukojo.png"
import Work2 from "../../assets/projects/e-absen.png"
import Work3 from "../../assets/projects/e-office.png"
import Work4 from "../../assets/projects/ila.png"
import Work5 from "../../assets/projects/pelabuhan-kita-satu.png"
import Work6 from "../../assets/projects/sialang.png"
import Work7 from "../../assets/projects/siap.png"
import Work8 from "../../assets/projects/sibestie.png"
import Work9 from "../../assets/projects/simatrik.png"
import Work10 from "../../assets/projects/siproduktif.png"
import Work11 from "../../assets/projects/sisulam.png"
import Work12 from "../../assets/projects/skrd.png"
import './Portofolio.css'

const Portofolio = () => {

  const data = [
    {
      id: 1,
      image: Work1,
      title: "Aplikasi Akuntabibilitas Kinerja Online Jaga Organisasi",
      category: "Web-Based",
    },
    {
      id: 2,
      image: Work2,
      title: "E-Absen Kabupaten Rokan Hilir",
      category: "Web-Based",
    },
    {
      id: 3,
      image: Work3,
      title: "E-Office Kabupaten Rokan Hilir",
      category: "Web-Based",
    },
    ,
    {
      id: 4,
      image: Work4,
      title: "Web Official Informasi Layak Anak",
      category: "Web-Based",
    },
    ,
    {
      id: 5,
      image: Work5,
      title: "Web Official PT. Pelabuhan Kita Satu",
      category: "Web-Based",
    },
    ,
    {
      id: 6,
      image: Work6,
      title: "Sistem Informasi Realisasi Keuangan & Fisik Kab. Rokan Hilir",
      category: "Web-Based",
    },
    {
      id: 7,
      image: Work7,
      title: "Sistem Informasi Anggaran Pegawai",
      category: "Web-Based",
    },
    {
      id: 8,
      image: Work8,
      title: "Sistem Informasi Bebas Temuan Elektronik",
      category: "Web-Based",
    },
    {
      id: 9,
      image: Work9,
      title: "Sistem Informasi Kerjasama Media Elektronik",
      category: "Web-Based",
    },
    {
      id: 10,
      image: Work10,
      title: "Sistem Informasi Produk Hukum Terintegeratif",
      category: "Web-Based",
    },
    {
      id: 11,
      image: Work11,
      title: "Sistem Informasi Usulan Masyarakat",
      category: "Web-Based",
    },
    {
      id: 12,
      image: Work12,
      title: "Sistem Informasi Retribusi Menara Telekomunikasi",
      category: "Web-Based",
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
        <span className="work__item" onClick={() => filterItem('Web-Based')}>Web App Based</span>
        <span className="work__item" onClick={() => filterItem('Mobile')}>Mobile App</span>
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