  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import '../style/navbar.css'



  import SocialLinks from './SocialLinks';
  import { data} from "./Data";
  import { HashLink as Link } from 'react-router-hash-link'




  function NavBar(){

      return(
        <Navbar className='top-container' sticky="top">
            <Container>
                <Navbar.Brand as={Link} smooth to="#Home">Home</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link as={Link} smooth to="#About">About</Nav.Link>
                    <Nav.Link as={Link} smooth to="#Services">Features</Nav.Link>
                    <Nav.Link as={Link} smooth to="#Tours">Tours</Nav.Link>
            </Nav>
              
                
                <ul className="social-links">
                    {data.map((item) => (
                        <SocialLinks
                            key={item.id}
                            itemClass={item.href}
                            href={item.href}
                            icon={item.icon}
                        />
                    ))}
                </ul>
            </Container>
        </Navbar>
    )


   
  }

  export default NavBar;