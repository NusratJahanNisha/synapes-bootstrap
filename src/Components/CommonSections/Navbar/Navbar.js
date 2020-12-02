import React from 'react';
import { Link } from 'react-router-dom';


// --------------------------Navbar of ALL pages---------------------------


const Navbar = () => {
    return (
        <div style={{ marginBottom: "78px" }}>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ background: "#121F2C", color: "white" }}>
                <a class="navbar-brand" href="#">
                    <img style={{ height: "70px", width: "100px" }} src="https://i.ibb.co/LvfRVLq/logo.png" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href=""><button type="button" class="btn btn-dark">
                                <Link style={{ textDecoration: "none", color: "white" }} to="/homePage">Home</Link>
                            </button> <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href=""> <button type="button" class="btn btn-dark">
                                <Link style={{ textDecoration: "none", color: "white" }} to="/aboutUsPage"> ABOUT US</Link>
                            </button> </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href=""> <button type="button" class="btn btn-dark">
                                <Link style={{ textDecoration: "none", color: "white" }} to="/products">PRODUCTS</Link>
                            </button></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href=""> <button type="button" class="btn btn-dark">
                                <Link style={{ textDecoration: "none", color: "white" }} to="/careerPage">CAREERS</Link>
                            </button></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href=""> <button type="button" class="btn btn-dark">
                                <Link style={{ textDecoration: "none", color: "white" }} to="/responsibilityAndHealthPage">RESPONSIBILITY AND HEALTH
                                </Link>
                            </button></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="" tabindex="-1" aria-disabled="true"><button type="button" class="btn btn-dark">
                                <Link style={{ textDecoration: "none", color: "white" }} to="/contactUsPage"> CONTACT US</Link>
                            </button></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;