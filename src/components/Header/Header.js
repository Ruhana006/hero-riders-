import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Navbar,Nav,Button } from "react-bootstrap"
import { useHistory } from 'react-router';
import {Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Login from '../Login/Login';
import './Header.css'

const Header = () => {
    const history = useHistory()
    const handleLogin = () =>{
       history.push("/destination")
    }
    return (
        <div >
             <Navbar className="container-fluid" bg="light" expand="lg">
                <Navbar.Brand className="mr-auto brand" href="#home"><h3>Hero Riders</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="link">Home</Link>
                        <Link to="/destination" className="link">Destinaton</Link>
                        <Link to="/blog" className="link">Blog</Link>
                        <Link to ="/details" className="link">Details</Link>
                        <button  onClick={()=>handleLogin()}  className="btn btn-primary btn-lg">Log in</button>
                    </Nav>    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;