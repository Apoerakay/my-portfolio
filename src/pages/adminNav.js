import React from "react";
import { MdPostAdd, MdStar, MdWork } from "react-icons/md";

const AdminNavbar = ({ setActiveForm }) => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-around items-center">
                <button onClick={() => setActiveForm('newPost')} className="flex flex-col items-center text-white">
                    <MdPostAdd size={24} />
                    New Post
                </button>
                <button onClick={() => setActiveForm('newAchievement')} className="flex flex-col items-center text-white">
                    <MdStar size={24} />
                    Add Achievement
                </button>
                <button onClick={() => setActiveForm('newExperience')} className="flex flex-col items-center text-white">
                    <MdWork size={24} />
                    Add Experience
                </button>
            </div>
        </nav>
    );
};

export default AdminNavbar;
