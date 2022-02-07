import React, { useState, useEffect } from 'react';
import axios from "axios";


const DataFetchingWithUseEffect = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            axios.get("https://jsonplaceholder.typicode.com/posts")
              .then((response) => {
                  setLoading(false);
                  setPosts(response.data);
                  setError('');
              })
              .catch((error) => {
                  setLoading(false);
                  setPosts([]);
                  setError('Something went wrong');
              })
        }, []
    );

    return <div>
        {
            loading 
            ? 'Loading' 
            : posts?.map((post) => {

                return (
                    <div key={post.id}>
                        {post.id} : { post.title }
                    </div>
                )
            })
        }
        {
            error !== '' ? error : null
        }
    </div>;
};

export default DataFetchingWithUseEffect;
