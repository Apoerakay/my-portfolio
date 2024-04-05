import React, { useState } from "react";
import './navbar.css';



const Navbar =()=>{
    return(
        <nav>
            <a href="#" className="active">Home </a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievement</a>
            <a href="#contact">Contact</a>
        </nav>
    )
}
export default Navbar

//     return (
//         <div>
//             <nav>
//                 <HashLink to="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</HashLink>
//                 <HashLink to="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</HashLink>
//                 <HashLink to="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</HashLink>
//                 <HashLink to="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</HashLink>
//                 <li><HashLink smooth to="#project" className="">Projects</HashLink></li>
//                 <li><HashLink smooth to="#post" className="">Posts</HashLink></li>
//                 <li><HashLink smooth to="#contact" className="">Contact</HashLink></li>
//                 <a href="/admin" className={activeNav === '#admin' ? 'active' : ''}>Profile</a>
//             </nav>
//         </div>
//     );
// }
