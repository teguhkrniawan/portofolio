import './Resume.css'
import Card from './Card';

const Resume = () => {

    const data = [
        {
            id: 1,
            category: "education",
            icon: "icon-graduation",
            year: "2019 - present",
            title: "Academic Degree",
            desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
        },
        {
            id: 2,
            category: "experience",
            icon: "icon-briefcase",
            year: "2019 - present",
            title: "Web Designer",
            desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
        },
        {
            id: 3,
            category: "experience",
            icon: "icon-briefcase",
            year: "2013 - 2017",
            title: "Front-End Developer",
            desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
        },
        {
            id: 4,
            category: "experience",
            icon: "icon-briefcase",
            year: "2009 - 2013",
            title: "Back-End Developer",
            desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
        },
        {
            id: 5,
            category: "experience",
            icon: "icon-briefcase",
            year: "2002 - 2006",
            title: "Dev Ops Developer",
            desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
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