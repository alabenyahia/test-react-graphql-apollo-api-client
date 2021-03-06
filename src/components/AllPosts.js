import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ALL_POSTS} from "../queries/post";
import Post from "./Post";


function AllPosts(props) {

    const { loading, error, data } = useQuery(GET_ALL_POSTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            {   data.posts.length>0 ?
                data.posts.map(post => <Post key={post.id}  id={post.id} text={post.text} author={post.user?.username} />) :
                <p>No posts found...</p>
            }

        </div>

    );
}

export default AllPosts;