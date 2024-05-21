"use client"

import Link from "next/link";
import {Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar style={{backgroundColor: "#E3E8FF", minWidth: "700px"}} expand="lg" className='py-3'>
            <Navbar.Brand href="/" className='ms-2' style={{ "color": "#2B308B" }}><strong>SupportCCT</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background: "white"}}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href={"/image_diagnosis"} className="nav-link" style={{"fontWeight": "normal", "color": "#2B308B" }}>Diagnostico</Link>
                    <Link href={"/history"} className="nav-link" style={{"fontWeight": "normal", "color": "#2B308B" }}>Historial de reportes</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}