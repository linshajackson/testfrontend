import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(



        <nav class="navigation">
        <div class="left-nav">
        <a className="navbar-brand" href="#">
        React CRUD
        </a>
        </div>
        <div class="right-nav">
        <Link aria-current="page" to="/">Home</Link>
        <Link aria-current="page" to="/about">About</Link>   
        <Link aria-current="page" to="/contact">Contact</Link> 
         </div>
    </nav>

    
       

    );
}

export default Navbar;

