import {useState, useEffect} from 'react';
import "./css/AddPostUser.css"
import {useMutation, useLazyQuery} from "@apollo/client";
import {ADD_POST} from "../queries/post";
import {GET_ALL_USERS} from "../queries/user";

function AddPost(props) {
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    const [addPost, {data, error, loading}] = useMutation(ADD_POST)
    const [getUsers, {loading: usersLoading, data: usersData, error: usersError}] = useLazyQuery(GET_ALL_USERS );
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        getUsers()
        if (usersData && !usersLoading && submitted) {
            const user = usersData.users.find(usr => usr.username === username)
            addPost({variables: {text, userid: user ? user.id : ''}})
                .then(() => {
                    setUsername('')
                    setText('')
                })
                .catch(err => console.dir(err))
                .finally(()=>setSubmitted(false))
        }

    }, [usersData, usersLoading, submitted]);


    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="AddPost">
            <h2>Add a Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter your username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" type="text"/>
                <label htmlFor="text">Enter post text</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)} id="text" rows="10"/>
                <input type="submit" value="Add"/>
            </form>

            <div className="AddPost__msgs">
                {(error || usersError) && <p className="AddPost__msgs-error">Error occured while adding post!</p>}
                {data && <p className="AddPost__msgs-success">Post added successfully!</p>}
                {(loading || usersLoading) && <p className="AddPost__loading">Loading...</p>}
            </div>
        </div>
    );
}

export default AddPost;