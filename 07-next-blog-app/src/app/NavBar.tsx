"use client";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand='sm' collapseOnSelect>
      <Container>
        <Navbar.Brand as={ Link } href='/'>
          Next Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav>
            <Nav.Link as={ Link } href='/new_post' active={ pathname === '/new_post' } >New Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
