import React from 'react'
import "./singlepost.css"
import blog from "../../assets/Elegant Corporate Business Style Zoom Virtual Background.png"

export default function Singlepost() {
  return (
    <>
    <section class="single_post">
        <div class="container singlepost_container">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
            <div class="post_author">
                <div class="post_author-avatar">
                    <img src={blog}/>
                </div>
                <div class="post_author-info">
                    <h5>by:john miles</h5>
                    <small>june 13,2022 -10:30</small>
                </div>
            </div>
            <div class="singlepost_thumbnail">
                <img src={blog}/>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus rerum a ic.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus rerum a ic.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus rerum a ic.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus rerum a ic.
            </p>
        </div>
        
        

    </section>
    </>
  )
}

