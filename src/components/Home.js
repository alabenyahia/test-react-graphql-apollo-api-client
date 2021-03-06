import React from 'react';
import {useState} from "react";
import "./css/Home.css"
import {useLazyQuery} from "@apollo/client";
import {GET_USER_BY_ID} from "../queries/user";
import {GET_POST_BY_ID} from "../queries/post";
import Post from "./Post";
import User from "./User";

function Home(props) {
    const [userid, setUserid] = useState("")
    const [postid, setPostid] = useState("")
    const [getUser, {loading: userLoading, data: userData, error: userError}] = useLazyQuery(GET_USER_BY_ID)
    const [getPost, {loading: postLoading, data: postData, error: postError}] = useLazyQuery(GET_POST_BY_ID)

    const handleGetUserSubmit = (e) => {
        e.preventDefault()
        getUser({variables: {id: userid}})

    }

    const handleGetPostSubmit = (e) => {
        e.preventDefault()
        getPost({variables: {id: postid}})
    }

    return (
        <div className="Home">
            <h2>Get single User by ID</h2>
            <form onSubmit={handleGetUserSubmit}>
                <label htmlFor="userid">Enter User ID</label>
                <input value={userid} onChange={(e)=>setUserid(e.target.value)} id="userid" type="text"/>
                <input type="submit" value="Get User"/>
            </form>

            <h2>Get Single Post by ID</h2>
            <form onSubmit={handleGetPostSubmit}>
                <label htmlFor="postid">Enter Post ID</label>
                <input value={postid} onChange={(e)=>setPostid(e.target.value)} id="postid" type="text"/>
                <input type="submit" value="Get Post"/>
            </form>

            {   !userError && !userError && userData &&
                <div className="Home__user">
                    <h3>User:</h3>
                    <User {...userData.user}/>
                </div>
            }

            {   !postError && !postError && postData &&
                <div className="Home__post">
                    <h3>Post:</h3>
                    <Post id={postData.post.id} text={postData.post.text} author={postData.post.user?.username}/>
                </div>
            }

            <div className="Home__msgs">
                {(userError || postError) && <p className="Home__msgs-error">Error occured while retrieving data!</p>}
                {(userLoading || postLoading)&& <p className="Home__loading">Loading...</p>}
            </div>
        </div>
    );
}

export default Home;