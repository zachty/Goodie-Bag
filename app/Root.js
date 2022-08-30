import React from 'react';
import CandyList from './CandyList';
import { Link, Routes, Route } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <nav>
                Goodie Bag
                <Link to="/">Home</Link>
                <Link to="/candy">All Candy</Link>
            </nav>
            <main>
                <h1>Welcome to the Goodie Bag!</h1>
                <p>What a nice home page for your goodies!</p>
            </main>
            <Routes>
                <Route path="/candy" element={<CandyList />} />
            </Routes>
        </div>
    );
};

export default Root;
