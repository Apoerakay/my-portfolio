import React, { useState } from 'react';
import "./admin.css";
import avatar from "../assets/avatar1.jpg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { MdManageAccounts } from "react-icons/md";
import { SiManageiq } from "react-icons/si";
import { MdManageHistory } from "react-icons/md";

export default function Admin() {
    const [activeForm, setActiveForm] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleAdd = (formType) => {
        switch (formType) {
            case 'newPost':
                setSuccessMessage("Post added successfully!");
                break;
            case 'newAchievement':
                setSuccessMessage("Achievement added successfully!");
                break;
            case 'newExperience':
                setSuccessMessage("Experience added successfully!");
                break;
            default:
                break;
        }
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };

    return (
        <>
            <div className="fixed-header">
                <div className="header-content">
                    <div className="brand">Admin<span className="panel">Panel</span></div>
                    <div className="header-icons">
                        <span className="material-icons-outlined header-icon">search</span>
                        <span className="material-icons-outlined header-icon"><IoMdNotificationsOutline /></span>
                        <img className="avatar" src={avatar} alt="Avatar" />
                    </div>
                </div>
            </div>

            <section className="dashboard">
                <div className="container dashboard_container">
                    <aside>
                        <ul>
                            <li>
                                <button className={activeForm === 'managePosts' ? 'active' : ''} onClick={() => setActiveForm('managePosts')}>
                                    <TfiWrite />
                                    <h5>Manage posts</h5>
                                </button>
                            </li>
                            <li>
                                <button className={activeForm === 'newPost' ? 'active' : ''} onClick={() => setActiveForm('newPost')}>
                                    <MdManageAccounts />
                                    <h5>Add posts</h5>
                                </button>
                            </li>
                            <li>
                                <button className={activeForm === 'newAchievement' ? 'active' : ''} onClick={() => setActiveForm('newAchievement')}>
                                    <SiManageiq />
                                    <h5>Add New Achievement</h5>
                                </button>
                            </li>
                            <li>
                                <button className={activeForm === 'newExperience' ? 'active' : ''} onClick={() => setActiveForm('newExperience')}>
                                    <MdManageHistory />
                                    <h5>Add New Experiences</h5>
                                </button>
                            </li>
                        </ul>
                    </aside>
                    <main>
                        {activeForm === 'managePosts' && (
                            <div>
                                <h2>Manage Posts</h2>
                                {/* Add code for managing posts */}
                            </div>
                        )}
                        {(activeForm === 'newPost' || activeForm === 'newAchievement' || activeForm === 'newExperience') && (
                            <div>
                                <h2>Add New {activeForm === 'newPost' ? 'Post' : activeForm === 'newAchievement' ? 'Achievement' : 'Experience'}</h2>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleAdd(activeForm);
                                }}>
                                    {/* Add form fields for adding new items */}
                                    <button type="submit">Add</button>
                                </form>
                            </div>
                        )}
                    </main>
                </div>
            </section>
            {successMessage && <div>{successMessage}</div>}
        </>
    );
}

