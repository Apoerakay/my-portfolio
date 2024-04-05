import React, { useState } from "react";

const NewExperienceForm = ({ onSaveExperience }) => {
  const [experience, setExperience] = useState({
    title: "",
    experience: "",
    date: "",
    image: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      experience.title.trim() !== "" &&
      experience.experience.trim() !== "" &&
      experience.date.trim() !== ""
    ) {
      try {
        // Send the experience data to the server
        const response = await fetch("https://jadeportfolio-api.onrender.com/add-experience", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({institutionName: experience.title, description: experience.experience}),
        });

        if (!response.ok) {
          throw new Error("Failed to save experience");
        }

        // Clear the experience input and display success message
        setExperience({ title: "", experience: "", date: "", image: "" });
        setSuccessMessage("Experience added successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000); // Clear success message after 3 seconds
      } catch (error) {
        setError("Failed to save experience");
        console.error("Error saving experience:", error);
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
          value={experience.title}
          onChange={(e) =>
            setExperience({ ...experience, title: e.target.value })
          }
          placeholder="Enter title"
          className="border border-gray-400 px-4 py-2 rounded"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="experience" className="text-lg font-semibold mb-2">
          Experience
        </label>
        <textarea
          id="experience"
          value={experience.experience}
          onChange={(e) =>
            setExperience({ ...experience, experience: e.target.value })
          }
          placeholder="Enter experience"
          className="border border-gray-400 px-4 py-2 rounded resize-none"
          rows={4}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="date" className="text-lg font-semibold mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={experience.date}
          onChange={(e) =>
            setExperience({ ...experience, date: e.target.value })
          }
          className="border border-gray-400 px-4 py-2 rounded"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="image" className="text-lg font-semibold mb-2">
          Image (optional)
        </label>
        <input
          type="text"
          id="image"
          value={experience.image}
          onChange={(e) =>
            setExperience({ ...experience, image: e.target.value })
          }
          placeholder="Enter image URL"
          className="border border-gray-400 px-4 py-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Experience
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

export default NewExperienceForm;

