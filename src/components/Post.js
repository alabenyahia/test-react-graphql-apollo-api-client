import React from 'react';
import "./css/UserPost.css"
import {useMutation} from "@apollo/client";
import {DELETE_POST} from "../queries/post";

function Post(props) {
    const [deletePost, { data, error, loading }] = useMutation(DELETE_POST)

    const handleDeleteClick  = () => {
        //TODO: Fix need to refresh issue to get updated users
        deletePost({variables: {id: props.id}})
    }

    const formatText = (text, maxLength) => {
        if (text.length <= maxLength) return text
        else return `${text.slice(0, maxLength-2)}...`
    }

    return (
        <div className="Post">
            <div>{props.id} - {props.author || 'DELETED AUTHOR!'}</div>
            <div className="Post__main">
                <div className="Post__main-info">
                    <div>Text: {formatText(props.text, 15)}</div>
                </div>
                <div className="Post__main-btns">
                    <button onClick={handleDeleteClick}><i className="material-icons">delete</i></button>
                </div>
            </div>
        </div>
    );
}

export default Post;