"use client";
import { useState, useEffect } from "react";

const Posts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts(){
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=50");
      const data = await response.json();
      setPosts(data);

    }
    
  fetchPosts();
    
  },[])
  




  return (
    <>
      <h1>Posts</h1>
      <div className="posts-conatiner">
        {posts.map(({id,title,body}) =>(
          <div className="post-card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}

      </div>
      
    </>
  );
};

export default Posts;