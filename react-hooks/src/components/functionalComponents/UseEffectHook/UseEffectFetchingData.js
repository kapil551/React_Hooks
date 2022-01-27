import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectFetchingData() {
  const [posts, setPosts] = useState([]);

  // Data Fetching from API
  useEffect(
      () => {
    console.log("useEffect is called");
    
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [] // I want the data to be fetched only once when the component did mount
  );

  return (
    <div>
      {console.log("render")}
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseEffectFetchingData;
