import {useState} from 'react';
import "./css/AddPostUser.css";
import {ADD_USER} from "../queries/user";
import {useMutation} from "@apollo/client";

function AddUser(props) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [addUser, { data, error, loading }] = useMutation(ADD_USER)

    const handleSubmit = (e) => {
        e.preventDefault()
        addUser({variables: {name, username, password, age: parseInt(age)}}).catch(err => console.dir(err))
            .then(() => {
                setPassword('')
                setUsername('')
                setName('')
                setAge('')
            })
    }

    return (
        <div className="AddUser">
            <h2>Add a User</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter your name</label>
                <input value={name} onChange={(e)=> setName(e.target.value)} id="name" type="text"/>
                <label htmlFor="username">Enter your username</label>
                <input value={username} onChange={(e)=> setUsername(e.target.value)} id="username" type="text"/>
                <label htmlFor="password">Enter your password</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} id="password" type="password"/>
                <label htmlFor="age">Enter your age</label>
                <input value={age} onChange={(e)=> setAge(e.target.value)} id="age" type="number"/>
                <input type="submit" value="Add"/>
            </form>

            <div className="AddUser__msgs">
                {error && <p className="AddUser__msgs-error">Error occured while adding user!</p>}
                {data && <p className="AddUser__msgs-success">User added successfully!</p>}
                {loading && <p className="AddUser__loading">Loading...</p>}
            </div>
        </div>
    );
}

export default AddUser;