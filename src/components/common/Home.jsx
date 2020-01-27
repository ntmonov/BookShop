import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello</h1>
            <p className="lead">The best app about books</p>
            <hr className="my-4" />
            <p>In order to see the books please login</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/login" role="button">Влез</Link>
            </p>
        </div>
    )
}

export default Home;