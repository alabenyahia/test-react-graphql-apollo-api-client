import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "../queries/user";
import User from "./User";

function AllUsers(props) {

    const { loading, error, data } = useQuery(GET_ALL_USERS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            {   data.users.length > 0 ?
                data.users.map(user => <User key={user.id} {...user} />) :
                <p>No users found...</p>
            }
        </div>

    );
}

export default AllUsers;