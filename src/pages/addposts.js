// import React, { useState } from 'react';

// // eslint-disable-next-line no-empty-pattern
// const CreatePost = ({ }) => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [thumbnail, setThumbnail] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!title || !body || !thumbnail || !date || !time) {
//             setError('Please fill in all fields');
//             return;
//         }
//         try {
//             // Send the post data to the server
//             const response = await fetch('https://jadeportfolio-api.onrender.com/add-post', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ title, description: body, thumbnail, date, time }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to create post');
//             }

//             // Clear the form inputs and display success message
//             setTitle('');
//             setBody('');
//             setThumbnail('');
//             setDate('');
//             setTime('');
//             setSuccessMessage('Post created successfully!');
//             setTimeout(() => {
//                 setSuccessMessage('');
//             }, 3000); // Clear success message after 3 seconds
//         } catch (error) {
//             setError('Failed to create post');
//             console.error('Error creating post:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="mb-4">
//             <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Title"
//                 className="border border-gray-400 px-4 py-2 rounded w-full mb-2"
//             />
//             <textarea
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//                 placeholder="Article body"
//                 className="border border-gray-400 px-4 py-2 rounded w-full resize-none mb-2"
//                 rows={4}
//             />
//             <input
//                 type="text"
//                 value={thumbnail}
//                 onChange={(e) => setThumbnail(e.target.value)}
//                 placeholder="Thumbnail URL"
//                 className="border border-gray-400 px-4 py-2 rounded w-full mb-2"
//             />
//             <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="border border-gray-400 px-4 py-2 rounded w-full mb-2"
//             />
//             <input
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="border border-gray-400 px-4 py-2 rounded w-full mb-2"
//             />
//             <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//             >
//                 Create Post
//             </button>
//             {successMessage && (
//                 <div className="bg-green-500 text-white px-4 py-2 rounded mt-2">
//                     {successMessage}
//                 </div>
//             )}
//             {error && (
//                 <div className="bg-red-500 text-white px-4 py-2 rounded mt-2">
//                     {error}
//                 </div>
//             )}
//         </form>
//     );
// };

// export default CreatePost;

