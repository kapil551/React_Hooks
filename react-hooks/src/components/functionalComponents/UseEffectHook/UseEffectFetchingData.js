import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectFetchingData() {
  const [posts, setPosts] = useState([]);

  // Data Fetching from API --> Fetch all posts
  useEffect(
    () => {
      console.log("useEffect is called");

      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [] // I want the data to be fetched only once when the component did mount
  );

  // Fetch Individual post by their Id
  const [postId, setPostId] = useState(1);
  console.log(postId);
  const [post, setPost] = useState({});

  // fectch individual post by their id
  useEffect(
    () => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/${postId ? postId : 1}`
        )
        .then((res) => {
          console.log(res);
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [postId] // call this useEffect only when the postId updates
  );

  return (
    <div>
      {console.log("render")}
      

      <input
        type="text"
        value={postId}
        onChange={(event) => {
          setPostId(event.target.value);
        }}
      />
      {
        postId !== undefined &&
        <div
          style={{
            backgroundColor: "lightblue",
            height: "15rem",
            width: "30rem",
            margin: "auto",
            marginTop: "1rem",
          }}
        >
          <div> Post {postId ? postId : 1} details </div>
          <div> {JSON.stringify(post)} </div>
        </div>
      }
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseEffectFetchingData;
