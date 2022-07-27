import React, { useState ,useRef } from 'react';
import { Nav, Navbar, NavDropdown, Container, Button, FormControl, Form } from 'react-bootstrap';



const NavBar = () => {
    const [category, setCategory] = useState('')
    const [language , setLanguage] = useState('en')
    const searchBar = useRef();
    
    const handleSelect = (cat) => {
        setCategory(cat);
    }

    const handleClick =(e) => {
        const query = searchBar.current.value;
        localStorage.setItem('search' , query);
    }

    const handleLanguage =(lang) => {
       setLanguage(lang)
    }
    

    return (
     <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" className = 'nav-load'>
            <Container>
                <Navbar.Brand href="/">NewsiFY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-evenly">
                    <Nav className="me-auto" navbarScroll >
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <NavDropdown title="Categories" id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href={`/${category}`} onSelect={() => handleSelect('general')}>Latest </NavDropdown.Item>
                            <NavDropdown.Item href={`/${category}`} onSelect={() => handleSelect('business')}>Business</NavDropdown.Item>
                            <NavDropdown.Item href={`/${category}`} onSelect={() => handleSelect('sports')}>Sports</NavDropdown.Item>
                            <NavDropdown.Item href={`/${category}`} onSelect={() => handleSelect('technology')}>Technology</NavDropdown.Item>
                            <NavDropdown.Item href={`/${category}`} onSelect={() => handleSelect('entertainment')}>Entertainment</NavDropdown.Item>
                            <NavDropdown.Item href={`/${category}`} onSelect={() => handleSelect('science')}>Science</NavDropdown.Item>
                        </NavDropdown>
                    <NavDropdown title="Language" id="collasible-nav-dropdown ">
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('ar')}>Arabic </NavDropdown.Item>
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('en')}>English</NavDropdown.Item>
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('es')}>Spanish </NavDropdown.Item>
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('fr')}>French </NavDropdown.Item>
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('he')}>Hebrew</NavDropdown.Item>
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('it')}>Italian </NavDropdown.Item>
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('nl')}>Dutch </NavDropdown.Item>
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('no')}>Norwegian</NavDropdown.Item>
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('pt')}>Portuguese</NavDropdown.Item>
                            <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('ru')}>Russian</NavDropdown.Item>
                            {/* <NavDropdown.Item href={`/language/${language}`} onSelect={() => handleLanguage('hi')}>Hindi</NavDropdown.Item> */}

                        </NavDropdown>
                          </Nav>
                    <Form className="d-flex align-items-center">
                        <FormControl
                            ref = {searchBar}
                            type="search"
                            placeholder="Search"
                            className="mr-1 search-bar"
                            aria-label="Search"
                        />
                        <Button  href = '/search' variant="outline-light m-2" onClick={(e) => handleClick(e)}>Search</Button>
                    </Form>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    )
}

export default NavBar;
