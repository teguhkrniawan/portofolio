import './Resume.css'
import Card from './Card';

const Resume = () => {

    const data = [
        {
            id: 1,
            category: "education",
            icon: "icon-graduation",
            year: "Sep 2016 - Mar 2021",
            title: "S1 - UIN SUMATERA UTARA",
            desc: "Bachelor of Computer Science Graduate at Information System with GPA 3.92",
        },
        {
            id: 2,
            category: "experience",
            icon: "icon-briefcase",
            year: "Apr 2023 - Present",
            title: "Junior System Developer",
            desc: "Worked at Digital Tranformastion Dept, PT.Sat Nusapersada Tbk. Batam, Riau Island as Junior System Developer.",
        },
        {
            id: 2,
            category: "experience",
            icon: "icon-briefcase",
            year: "Jan 2022 - Apr 2023",
            title: "Junior Programmer",
            desc: "Worked at Dinas Komunikasi Informatika Statistik and Persandian Kabupaten Rokan Hilir, Riau as Fullstack Developer.",
        },
        {
            id: 3,
            category: "experience",
            icon: "icon-briefcase",
            year: "Jun 2021 - Dec 2021",
            title: "IT Techinical Support",
            desc: "Worked at Dinas Komunikasi Informatika Statistik and Persandian Kabupaten Rokan Hilir, Riau as IT Technical Support.",
        },
        {
            id: 4,
            category: "experience",
            icon: "icon-briefcase",
            year: "Mar 2018 - Mar 2019",
            title: "Junior Web Programmer",
            desc: "Worked at PT Pelabuhan Kita Satu, Medan City, North Sumatera as Junior Web Programmer.",
        },
        {
            id: 5,
            category: "experience",
            icon: "icon-briefcase",
            year: "Sep 2019",
            title: "Android App Programmer",
            desc: "Worked at PT PLN Sumatera Utara, Medan City, North Sumatera as Intern Android App Programmer.",
        },
    ];

    return (
        <div>
            <section id='resume' className="resume container section">

                <div className="title__container grid">
                    <div className="title1 grid">
                        <h2 className='section__title'>Experience</h2>
                    </div>

                    <div className="title2 grid">
                        <h2 className='section__title'>Education</h2>
                    </div>
                </div>

                <div className="resume__container grid">
                    <div className="timeline grid">
                        {
                            data.map((item, index) => {
                                if (item.category === 'experience') {
                                    return (
                                        <Card
                                            key={index}
                                            icon={item.icon}
                                            title={item.title}
                                            year={item.year}
                                            desc={item.desc}
                                        />
                                    )
                                }
                            })
                        }
                    </div>

                    <div className="timeline grid education">
                        {
                            data.map((item, index) => {
                                if (item.category === 'education') {
                                    return (
                                        <Card
                                            key={index}
                                            icon={item.icon}
                                            title={item.title}
                                            year={item.year}
                                            desc={item.desc}
                                        />
                                    )
                                }
                            })
                        }
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Resume