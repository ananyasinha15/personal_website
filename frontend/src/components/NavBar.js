import { useState, useEffect} from "react";
import { Navbar, Nav, Container }  from "react-bootstrap";
import linkedin_icon from '../assets/images/linkedin-icon.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    } , [])

    const onUpdatActiveLink = (value) => {
        setActiveLink(value);
    }

    const openLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/ananya-sinha-6703a620b';
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}> 
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdatActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdatActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdatActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link href="#education" className={activeLink === 'education' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdatActiveLink('education')}>Education</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdatActiveLink('contact')}>Contact</Nav.Link>
                    </Nav> 
                    <span className="navbar-icon">
                        <div className="contact-icon">
                            <a href='https://www.linkedin.com/in/ananya-sinha-6703a620b' onClick={openLinkedIn}><img src={linkedin_icon} alt="LinkedIn" /></a>
                        </div>
                    </span> 
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;