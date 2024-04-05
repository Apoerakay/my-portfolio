import React from 'react';
import blog from "../../assets/tech.jpg";
import AVTR1 from "../../assets/apo7.jpeg";
import "./posts.css";
import  { useState, useEffect } from 'react';


// function Posts() {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     // Fetch data from the API
    //     fetch('http://jadeportfolio-api.onrender.com/post')
    //         .then(response => response.json())
    //         .then(data => {
    //             // Combine fetched posts with static posts
    //             const combinedPosts = [...staticPosts, ...data];
    //             setPosts(combinedPosts);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    // // Static posts
    // const staticPosts = [
    //     {
    //         id: 1,
    //         category: "Article",
    //         title: "Static Post 1",
    //         content: "This is a static post.",
    //         author: "Static Author",
    //         date: "Mar 1, 2024",
    //         readingTime: "3 min read"
    //     },
    //     {
    //         id: 2,
    //         category: "Article",
    //         title: "Static Post 2",
    //         content: "Another static post.",
    //         author: "Static Author",
    //         date: "Mar 5, 2024",
    //         readingTime: "4 min read"
    //     }
    // ];

    
const Posts = () => {
    const [posts, setPosts] = useState([])
    const getposts = () => {
        const url = new URL("https://jadeportfolio-api.onrender.com/post")
        fetch(url)
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts)
            })

            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(getposts, [])

    return (
        <section id='posts'>
            <h5>Posts</h5>
            <h2 className='text-center font-bold text-3xl text-sky-300'>Recent Blog Post</h2>
            <section className="featured">
                <div className="container featured_container">
                    <div className="post_thumbnail">
                        <img src={blog} alt="Featured Post Thumbnail" />
                    </div>

                    <div className="post_info">
                        <a href="#" className="category_btn">FEATURED</a>
                        <h2 className="post_title"><a href="post.html">WOMEN IN TECH</a></h2>
                        <p className="post_body">Efforts to promote diversity and inclusion in the tech industry continue to grow, with initiatives focusing on education, mentorship, and advocacy. These initiatives aim to empower women to pursue careers in technology, provide support and resources for their professional development, and address systemic issues such as bias and discrimination in the workplace.

Despite progress, there is still much work to be done to achieve gender equality in the tech sector. By championing diversity, fostering inclusive environments, and celebrating the achievements of women in tech, we can create a more equitable and innovative future for the industry..</p>
                        <div className="post_author">
                            <div className="post_author-avatar" ><img src={AVTR1} alt="Author Avatar" /></div>
                        </div>
                        <div className="post_author-info"></div>
                        <h5>By Jade</h5>
                        <small>june 3rd 2022 -7-23</small>
                    </div>
                </div>
            </section>

            <section className="posts">
                <div className=" container posts_container">
                    {posts.map(post => (
                        <article className="post" key={post.id}>
                            <div className="post_thumbnail">
                                <img src={blog} alt="Post Thumbnail" /></div>
                                <div className="post_info">
                                    <a href="#" className="category_btn">{post.category}</a>
                                    <h3 className="post_title"><a href={`/post/${post.id}`}>{post.title}</a></h3>
                                    <p className="post_body">{post.content}</p>
                                    <div className="post_author">
                                        <div className="post_author-avatar">
                                            <img src={AVTR1} alt="Author Avatar" />
                                        </div>
                                        <div className="post_author-info">
                                            <h5>by: Jade</h5>
                                            <small>{post.date} - {post.readingTime}</small>
                                        </div>
                                    </div>
                                
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Posts;
