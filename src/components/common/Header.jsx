import React from 'react';
import { Link } from 'react-router-dom';
import toastr from 'toastr'
import { deleteAllCookies } from '../../utils/cookiefunctions'
import { isAuth, isAdmin, logout } from '../../utils/auth';

const Header = ({username, getUserName}) => {

    const onLogoutClicked = async () => {
        let logoutInfo
        try {
            logoutInfo = await logout();
            if (logoutInfo.status !== 204) {
                throw new Error('Logout failed')
            }
            deleteAllCookies();
            toastr.success('Logout successfull');
            getUserName('')

        } catch (err) {
            toastr.error(err)
        }
        
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">BookShop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    {isAdmin() && <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Admin Panel
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/admin/listBooks">List books</Link>
                            <Link className="dropdown-item" to="/admin/orders">View orders</Link>
                        </div>
                    </li>}
                    {isAuth() && (<li>
                        <span>Welcome {username}</span>
                    </li>)}
                    {isAuth() && <li className="nav-item">
                        <button className="btn btn-info m-2" onClick={onLogoutClicked}>Logout</button>
                    </li>}
                </ul>
            </div>
        </nav>
    )
}

export default Header;