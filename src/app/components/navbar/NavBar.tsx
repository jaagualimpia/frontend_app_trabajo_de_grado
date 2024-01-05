import { Nav } from "react-bootstrap";

export default function NavBar (){
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}