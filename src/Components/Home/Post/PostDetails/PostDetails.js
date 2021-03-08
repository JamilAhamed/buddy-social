import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from "../../../Comment/Comment"

const PostDetails = () => {
    const{id} = useParams();
    console.log(id);
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [id])

    useEffect ( () =>{
        const url =`https://jsonplaceholder.typicode.com/comments?postid=${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setComment(data));
    },[id])
    return (
        <div>
            <h3>This is post details: {id}</h3>
            <p>User Posted:{post.id}</p>
            <p>Post body: {post.body}</p>
            <p>title: {post.title}</p>
            <p>Number of Comments: {comment.length}</p>
            {
                comment.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetails;