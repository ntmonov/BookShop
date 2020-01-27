import React, { useState } from 'react';
import { login, saveCookie } from '../../utils/auth'


const Login = ({ getUserName }) => {
    const [user, setUser] = useState({ username: '', password: '' })

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        let currentUser = user;
        currentUser[inputName] = inputValue;
        setUser(currentUser);
    }

    const  handleSubmit = async (e) => {
        e.preventDefault();
        let userInfo;
        try {
            userInfo = await login(user);
            if (userInfo.error) {
                throw new Error(userInfo.description);
            }
            saveCookie(userInfo);
            getUserName(userInfo.username);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" onChange={handleChange}/>
                </div>
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary col-md-4 offset-md-4">Submit</button>
                </div>
        </form>
    )
}

export default Login;