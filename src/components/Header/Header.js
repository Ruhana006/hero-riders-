import React from 'react';
import { Navbar, Nav,Button } from "react-bootstrap"
import { useHistory } from 'react-router';
import Login from '../Login/Login';

const Header = () => {
    const history = useHistory()
    const handleLogin = () =>{
       history.push("/login")
    }
    return (
        <div>
             <Navbar className="container" bg="light" expand="lg">
                <Navbar.Brand className="mr-auto" href="#home">Urban Riders</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/destination">Destinaton</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Button onClick={()=>handleLogin()} className="loginBtn" variant="outline-success">Log in</Button>
                    </Nav>    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;