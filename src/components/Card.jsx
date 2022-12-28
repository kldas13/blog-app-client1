import React from 'react'
import './Card.css';

function Card({post}) {
    console.log(post);
    console.log(post.title);
  return (
    <div className="card_container">
        <section className="details item">
            <div>Title:- {post.title}</div>
        </section>
        <section className="info item">
            <div>Author:- {post.author}</div>
            
            <div>Date:- {post.date}</div>
           
        </section>
        <section className="details item">
            <div>Description:- {post.description}</div>
        </section>
        <section className="details">
            <img src={`${post.image}`} alt="post" />
        </section>
    </div>
    )
}

export default Card
