"use client"

import Link from "next/link";
import {Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar style={{backgroundColor: "#0F0F0F", }} expand="lg" className='py-3'>
            <Navbar.Brand href="/" className='ms-2 text-white'><strong>Brand</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background: "white"}}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href={"/image_diagnosis"} className="text-white nav-link" style={{"fontWeight": "normal"}}>Diagnostico</Link>
                    <Link href={"/history"} className="text-white nav-link" style={{"fontWeight": "normal"}}>Historial de reportes</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}