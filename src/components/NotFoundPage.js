import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => (
    <div>
        This page doesn't exist - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;