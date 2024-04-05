import React, { useState } from "react";

// eslint-disable-next-line no-empty-pattern
const NewAchievementForm = ({ }) => {
    const [achievement, setAchievement] = useState({ title: "", description: "" });
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (achievement.title.trim() !== "" && achievement.description.trim() !== "") {
            try {
                // Send the achievement data to the server
                const response = await fetch("https://jadeportfolio-api.onrender.com/add-achievement", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(achievement),
                });

                if (!response.ok) {
                    throw new Error("Failed to save achievement");
                }

                // Clear the achievement input and display success message
                setAchievement({ title: "", description: "" });
                setSuccessMessage("Achievement added successfully!");
                setTimeout(() => {
                    setSuccessMessage("");
                }, 3000); // Clear success message after 3 seconds
            } catch (error) {
                setError("Failed to save achievement");
                console.error("Error saving achievement:", error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col mb-4">
                <label htmlFor="title" className="text-lg font-semibold mb-2">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={achievement.title}
                    onChange={(e) =>
                        setAchievement({ ...achievement, title: e.target.value })
                    }
                    placeholder="Enter title"
                    className="border border-gray-400 px-4 py-2 rounded"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="description" className="text-lg font-semibold mb-2">
                    Description
                </label>
                <textarea
                    id="description"
                    value={achievement.description}
                    onChange={(e) =>
                        setAchievement({ ...achievement, description: e.target.value })
                    }
                    placeholder="Enter description"
                    className="border border-gray-400 px-4 py-2 rounded resize-none"
                    rows={4}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Achievement
            </button>
            {successMessage && (
                <div className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                    {successMessage}
                </div>
            )}
            {error && (
                <div className="bg-red-500 text-white px-4 py-2 rounded mt-2">
                    {error}
                </div>
            )}
        </form>
    );
};

export default NewAchievementForm;


