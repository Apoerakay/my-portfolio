import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./admin.css";
import avatar from "../assets/apo7.jpeg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { MdManageAccounts } from "react-icons/md";
import { SiManageiq } from "react-icons/si";
import { MdManageHistory } from "react-icons/md";
import NewPostForm from "./addposts.js";
import NewAchievementForm from "./addachievement.js";
import NewExperienceForm from "./addexperience.js";
import Footer from "../components/footer/footer.js";
import Managepost from './managepost.js';

import { MdHome } from 'react-icons/md';

function Admin() {
    const [activeForm, setActiveForm] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleAddAchievement = () => {
        setSuccessMessage("Achievement added successfully!");
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000); // Clear success message after 3 seconds
    };

    const handleAddExperience = (newExperience) => {
        // Logic to add new experience
        setSuccessMessage("Experience added successfully!");
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000); // Clear success message after 3 seconds
    };

    const handleManagepost = (managePost) => {
        // Logic to add new achievement
        setSuccessMessage("Post edited successfully!");
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000); // Clear success message after 3 seconds
    };

    const handleAddNewPost = (managePost) => {
        // Logic to add new achievement
        setSuccessMessage("Post edited successfully!");
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000); // Clear success message after 3 seconds
    };

    return (
        <>
            <div className="fixed-header">
                <div className="header-content">
                    <div className="brand">Admin<span className="panel">Panel</span></div>
                    <div className="header-icons">
                        <img className="avatar" src={avatar} alt="avatar"></img>
                    </div>
                </div>
              
            </div>
            
            <div className="dashboard">
                <div className="container dashboard_container">
                
                    <aside>
                        <ul>
                            <li>
                                <button onClick={() => setActiveForm('managePosts')} className={activeForm === 'managePosts' ? 'active' : ''}>
                                    <TfiWrite />
                                    <h5>Manage posts</h5>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveForm('newPost')}>
                                    <MdManageAccounts />
                                    <h5>Add posts</h5>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveForm('newAchievement')}>
                                    <SiManageiq />
                                    <h5>Add New Achievement</h5>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveForm('newExperience')}>
                                    <MdManageHistory />
                                    <h5>Add New Experiences</h5>
                                </button>
                            </li>
                            <li>
                                <Link to="/" className="text-lg cursor-pointer flex items-center">
                                    <MdHome className="mr-1" />
                                    HOME
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <main>
                        <div className="form-container">
                            {activeForm === 'managePosts' && <Managepost onAddNewPost={handleManagepost}/>}
                            {activeForm === 'newPost' && <NewPostForm onAddNewPost={handleAddNewPost} />}
                            {activeForm === 'newAchievement' && <NewAchievementForm onAddAchievement={handleAddAchievement} />}
                            {activeForm === 'newExperience' && <NewExperienceForm onAddExperience={handleAddExperience} />}
                        </div>
                        <div><h1 className='justify-center'>ADMIN DASHBOARD</h1>
                        
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Admin;
