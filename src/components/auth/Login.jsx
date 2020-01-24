import React from 'react';

const Login = () => {
    return (
        <form>
                <div className="form-group col-md-4 offset-md-4">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group col-md-4 offset-md-4">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary col-md-4 offset-md-4">Submit</button>
                </div>
        </form>
    )
}

export default Login;