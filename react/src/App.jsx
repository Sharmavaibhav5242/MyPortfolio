import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos'
import 'aos/dist/aos.css';


import img1 from'./image/g4.jpg';
import img2 from'./image/g5.jpg';
import img3 from'./image/g6.jpg';
import img4 from'./image/c1.jpg';
import img5 from'./image/c2.jpg';
import img6 from'./image/c3.jpg';
import img7 from'./image/c4.jpg';
import img8 from'./image/i1.jpg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';





const App=()=>{
 




  return(
    <>
    
    <Navbar bg="dark" data-bs-theme="dark"  >
        <Container>
          <Navbar.Brand href="#home" className='logo'  >GUNS&AMMO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav'>Home</Nav.Link>
            <Nav.Link href="#features" className='nav'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='nav'>Pricing</Nav.Link>
            <Nav.Link href="#pricing" className='nav'>Offers</Nav.Link>
            <Nav.Link href="#pricing" className='nav'>Newly Arrived</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Carousel fade>
      <Carousel.Item>
        <img src={img1} width="100%" height="500px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} width="100%" height="500px"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} width="100%" height="500px" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />

    
<div className='card'>
    <Container>
      <Row>
      <Col>
        <Card style={{ width: '18rem',backgroundColor:"black",color:"white",height:'25rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem',backgroundColor:"black",color:"white",height:'25rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem',backgroundColor:"black",color:"white",height:'25rem' }}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem',backgroundColor:"black",color:"white",height:'25rem' }}>
      <Card.Img variant="top" src={img7} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
    </div>
     <Image src={img8} width='100%' height='700px' />
     <footer>
            <div class="footer-content">
              <h1>HAVE YOUR OWN WEAPON</h1>
                <div class="footer-links">
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <a href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                </div>
                <div class="footer-copyright">
                    <p>&copy; 2025 Guns&Ammo. All rights reserved.</p>
                </div>
                <div class="footer-copyright-2">
                    <p>&copy;  made by vaibhav sharma.</p>
                </div>
            </div>
        </footer>
    </>
  )
}
export default App;