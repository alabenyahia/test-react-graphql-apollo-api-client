import React from 'react';
import {Switch, Route} from "react-router-dom"
import AddUser from "./components/AddUser";
import AddPost from "./components/AddPost";
import AllUsers from "./components/AllUsers";
import AllPosts from "./components/AllPosts";
import Home from "./components/Home";

function Routing(props) {
    return (
        <div>
            <Switch>
                <Route path="/allposts">
                    <AllPosts/>
                </Route>
                <Route path="/allusers">
                    <AllUsers/>
                </Route>
                <Route path="/adduser">
                    <AddUser/>
                </Route>
                <Route path="/addpost">
                    <AddPost/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}

export default Routing;