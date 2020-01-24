import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class="jumbotron">
            <h1 class="display-4">Hello</h1>
            <p class="lead">The best app about books</p>
            <hr class="my-4" />
            <p>In order to see the books please login</p>
            <p class="lead">
                <Link class="btn btn-primary btn-lg" to="/login" role="button">Влез</Link>
            </p>
        </div>
    )
}

export default Home;