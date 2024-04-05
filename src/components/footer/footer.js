import React from 'react';
import styles from './footer.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href='#' className={styles.footer_logo}>Kevin Apo-era</a>

            <ul className={styles.permalinks}>
                <li><HashLink smooth to="#home" className="hover:text-gray-300">Home</HashLink></li>
                <li><HashLink smooth to="#about" className="hover:text-gray-300">About</HashLink></li>
                <li><HashLink smooth to="#experience" className="hover:text-gray-300">Experience</HashLink></li>
                <li><HashLink smooth to="#skills" className="hover:text-gray-300">Skills</HashLink></li>
                <li><HashLink smooth to="#posts" className="hover:text-gray-300">Posts</HashLink></li>
                <li><HashLink smooth to="#achievement" className="hover:text-gray-300">Achievement</HashLink></li>
                <li><HashLink smooth to="#project" className="hover:text-gray-300">Projects</HashLink></li>
                <li><HashLink smooth to="#contact" className="hover:text-gray-300">Contact</HashLink></li>
                {/* Replace HashLink with regular <a> tag for the Admin link */}
                <li><a href="/admin" className="hover:text-gray-300">Profile</a></li>
            </ul>

            <div className={styles.footer_socials}>
                <a href='https://facebook.com'><FaFacebookF /></a>
                <a href='https://instagram.com'><FiInstagram /></a>
                <a href='https://twitter.com/home?lang=en'><FaXTwitter /></a>
            </div>

            <div className={styles.footer_copyright}>
                <small>&copy;Kevin Apo-era. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;

