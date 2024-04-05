import React from 'react';
import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar.js'
import Skills from '../components/skills/skills';
import Footer from '../components/footer/footer';
import Experience from './experiencePage';
import Achievement from '../components/achievement/achievement';
import About from '../components/about/about';
import Posts from '../components/posts/posts';
import Projects from '../components/project/project.js';
import Contact from '../components/contact/contact.js';

function Home() {
    return (
        <section id='home'>
            <div>
                <Navbar />
                <Header />
                <About />
                <Projects/>
                <Achievement />
                <Experience />
        
                <Contact/>
                <Footer />

            </div>
        </section>
    );
}

export default Home;