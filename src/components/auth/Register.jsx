import React, { useState } from 'react'
import toastr from 'toastr'
import { saveCookie, assignRole, getUser } from '../../utils/auth'
import { register } from '../../utils/auth'

const Register = ({ getUserName }) => {
    const [user, setUser] = useState({ username: '', password: '', repeatPass: '', address: '' })

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
            delete user.repeatPass
            userInfo = await register(user).then(res => res.json());
            await assignRole(userInfo._id).then(res => res.json());
            userInfo = await getUser(userInfo._id).then(res => res.json());
            if (userInfo.error) {
                throw new Error(userInfo.description);
            }
            saveCookie(userInfo);
            getUserName(userInfo.username);
            toastr.success('Register Successfull')
        } catch (err) {
            toastr.error(err)
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
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input type="password" className="form-control" id="repeatPass" name="repeatPass" onChange={handleChange}/>
                </div>
                <div className="form-group col-md-4 offset-md-4">
                    <label htmlFor="address">Address</label>
                    <textarea type="password" className="form-control" id="address" name="address" onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary col-md-4 offset-md-4">Register</button>
                </div>
        </form>
    )
}

export default Register;