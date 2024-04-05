import React, { useState, useEffect } from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function Experience() {
    const [frontendSkills, setFrontendSkills] = useState([]);
    const [backendSkills, setBackendSkills] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch frontend skills data
                const frontendResponse = await fetch('http://jadeportfolio-api.onrender.com/experience');
                const frontendData = await frontendResponse.json();
                setFrontendSkills(frontendData);

                // Fetch backend skills data
                const backendResponse = await fetch('http://jadeportfolio-api.onrender.com/experience');
                const backendData = await backendResponse.json();
                setBackendSkills(backendData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Previous static frontend skills
    const previousFrontendSkills = [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Experienced' },
        { name: 'React JS', level: 'Experienced' },
        { name: 'Tailwind', level: 'Experienced' }
    ];

    // Previous static backend skills
    const previousBackendSkills = [
        { name: 'Node JS', level: 'Experienced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Express Js', level: 'Intermediate' },
      
    ];

    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2 className='text-center font-bold text-3xl text-sky-300'>My Experience</h2>

            <div className='container experience__container grid grid-cols-1 md:grid-cols-2'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        {/* Display previous static frontend skills */}
                        {previousFrontendSkills.map((skill, index) => (
                            <article key={index} className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{skill.name}</h4>
                                    <small className='text-light'>{skill.level}</small>
                                </div>
                            </article>
                        ))}

                        {/* Display dynamically fetched frontend skills */}
                        {frontendSkills.map((skill, index) => (
                            <article key={index + previousFrontendSkills.length} className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{skill.name}</h4>
                                    <small className='text-light'>{skill.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        {/* Display previous static backend skills */}
                        {previousBackendSkills.map((skill, index) => (
                            <article key={index} className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{skill.name}</h4>
                                    <small className='text-light'>{skill.level}</small>
                                </div>
                            </article>
                        ))}

                        {/* Display dynamically fetched backend skills */}
                        {backendSkills.map((skill, index) => (
                            <article key={index + previousBackendSkills.length} className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{skill.name}</h4>
                                    <small className='text-light'>{skill.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
