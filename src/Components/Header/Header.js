import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './header.css';
import Logo from '../../images/logo.png';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="navbar">
       <div>
            <Link to="/"> 
                <img style={{height:"40px"}} src={Logo} alt=""/>
            </Link>
       </div>
        
        <div className="navbarText">
            <Link to="/news" className="navbarLink">
                <p>News</p>
            </Link>
            <Link to="/destination" className="navbarLink">
                <p>Destination</p>
            </Link>
            <Link to="/blog" className="navbarLink">
                <p>Blog</p>
            </Link>
            <Link to="/contact" className="navbarLink">
                <p>Contact</p>
            </Link>
            
            {
                !loggedInUser.newUser ?
                <Link style={{textDecoration:"none", color:"white"}} to="/login">
                        <Button size="small" style={{background:"orange", color:"white", width:"100px"}}>
                            Login
                        </Button>
                </Link>
                :
                <h5>
                    <span style={{color:"orange"}}>| </span>
                    Welcome, {loggedInUser.name}
                </h5>
            }     
        </div>
    </div>
    );
};

export default Header;