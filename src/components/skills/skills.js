import React from 'react';
import { BiCheck } from 'react-icons/bi';

const Skills = () => {
    return (
        <section id='skills'>
        <div className="mt-4 mb-2">
                <h4 className="text-3xl text-center mb-8 text-center font-bold text-3xl text-sky-300"> My Skills</h4>
            <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-8">
                {/* Front-end Development */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
                    <div className="bg-blue-500 py-4 rounded-t-lg">
                        <h2 className="text-white text-lg font-semibold text-center">Front-end Development</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">HTML5/CSS3</h3>
                                <p className="text-gray-300 text-sm">Proficient in creating well-structured, semantically correct HTML5 markup and styling with CSS3 for responsive and visually appealing web interfaces.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">JavaScript (ES6+)</h3>
                                <p className="text-gray-300 text-sm">Experienced in writing modular and efficient JavaScript code, utilizing ES6+ features for interactive web applications and enhancing user experience.</p>
                            </div>
                        </li>
                    </ul>
                </article>

                {/* Back-end Development */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
                    <div className="bg-blue-500 py-4 rounded-t-lg">
                        <h2 className="text-white text-lg font-semibold text-center">Back-end Development</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Node.js</h3>
                                <p className="text-gray-300 text-sm">Proficient in building scalable server-side applications using Node.js, with knowledge of frameworks such as Express.js.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Database Management</h3>
                                <p className="text-gray-300 text-sm">Skilled in designing and optimizing databases using relational databases like MySQL and NoSQL databases like MongoDB.</p>
                            </div>
                        </li>
                    </ul>
                </article>

                {/* UI/UX Design */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
                    <div className="bg-blue-500 py-4 rounded-t-lg">
                        <h2 className="text-white text-lg font-semibold text-center">UI/UX Design</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Adobe XD</h3>
                                <p className="text-gray-300 text-sm">Proficient in creating wire frames, prototypes, and visual designs using Adobe XD to deliver intuitive and user-friendly interfaces.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Responsive Design</h3>
                                <p className="text-gray-300 text-sm">Experienced in implementing responsive design principles to ensure optimal user experience across various devices and screen sizes.</p>
                            </div>
                        </li>
                    </ul>
                </article>

                {/* DevOps */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:bg-transparent hover:border-blue-400">
                    <div className="bg-blue-500 py-4 rounded-t-lg">
                        <h2 className="text-white text-lg font-semibold text-center">DevOps</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">CI/CD</h3>
                                <p className="text-gray-300 text-sm">Skilled in setting up Continuous Integration and Continuous Deployment pipelines using tools like Jenkins and GitLab CI/CD.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Containerization</h3>
                                <p className="text-gray-300 text-sm">Proficient in containerization using Docker to package applications and deploy them across different environments consistently.</p>
                            </div>
                        </li>
                    </ul>
                </article>
            </div>
            </div>
        </section>
    );
}

export default Skills;

