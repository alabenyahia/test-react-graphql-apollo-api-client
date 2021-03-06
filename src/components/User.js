import React from 'react';
import "./css/UserPost.css"
import {useMutation} from "@apollo/client";
import {DELETE_USER} from "../queries/user";

function User(props) {
    const [deleteUser, { data, error, loading }] = useMutation(DELETE_USER)

    const handleDeleteClick  = () => {
        //TODO: Fix need to refresh issue to get updated users
        deleteUser({variables: {id: props.id}})
    }

    return (
        <div className="User">
            <div>{props.id} - {props.username}</div>
            <div className="User__main">
                <div className="User__main-info">
                    <div>Name: {props.name}</div>
                    <div>Password: {props.password}</div>
                    <div>Age: {props.age}</div>
                </div>
                <div className="User__main-btns">
                    <button onClick={handleDeleteClick}><i className="material-icons">delete</i></button>
                </div>
            </div>
        </div>
    );
}

export default User;