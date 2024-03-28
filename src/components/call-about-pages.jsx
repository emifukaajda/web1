import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../style/main.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTitle  from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import Footer from 'react-bootstrap/CardFooter'
import Spinner  from 'react-bootstrap/Spinner';
import { useState } from 'react';



function NavScrollExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const data = ["Febry", "About"]
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  };



  const handleSearchClick = () => {
    const results = data.filter(item => 
      item.toLowerCase(). includes(searchTerm.toLocaleLowerCase)
      );
      setSearchResults(results)
    }



  return (
  
    <body>
     <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="black">
      <Container fluid>
        <Navbar.Brand href="#">Febryann.id</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/todolist">To-dolist</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <NavDropdown title="News" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Terupdate</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Another News
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Whitepaper
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" onclick={handleSearchClick}>Search</Button>
            <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
          
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Main Area */}
  <div className='center' href="#about" id="about">
    <Container md=''>
    <Row xs={1} md={3} lg={10}>
        <Col xs={{ order: 'First' }}>
        <div className="groupbaru">
          <main className='grub1'>
            <p>selamat datang di Febryann.id</p>
            <h1>Febryanus Tambing</h1>
            <p>
             Mahasiswa Uncok
            </p>
            <Button variant='outline-light' size='sm'>
              Download Cv
            </Button>
          </main>
          </div>
        </Col>
        <br />
        <Col xs={{order: -12}} >
        <img className='image' src="" alt="" />
        </Col>
      </Row>

      

    </Container>
    {/* Team */}

          <Container>
          <div className="team-update" id="team">
          <h1 className='text-center'>Team</h1>
          <br />
  
          <Row xs={1} md={3} className='g-5'>
        <Col xs>
          <Card className='card-team'>
            <Card.Img variant="top" src="https://i.pinimg.com/736x/bc/20/94/bc20948f3bccfd926b41688b38b3d9c9.jpg"/>
              <CardTitle>Kevin Store</CardTitle>
              <CardText>Lorem ipsum dolor sit amet.</CardText>
          </Card></Col>
        <Col xs={{ order: 12 }}>
          <Card className='card-team' >
            <Card.Img variant="top" src="https://awsimages.detik.net.id/community/media/visual/2023/04/14/oshi-no-ko_43.jpeg?w=600&q=90"/>
             <CardTitle>
              Adi Xyz
             </CardTitle>
             <CardText>
              Lorem ipsum dolor sit amet.
             </CardText>
          </Card>
        </Col>
        <Col xs={{ order: 1 }}>
           <Card className='card-team'>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuKsKrTWLvaCBjLzMpyWbPWU4PBKjOw7y4wtoxfQm-g&s"/>
            <Card.Title>FrenmY</Card.Title>
            <Card.Text>lorem5</Card.Text>
           </Card>
        </Col>
      
      </Row>
      </div>
      
            
          </Container>

    {/* End Team */}

  </div>
  <Container>
    <Row>
      <Col>
      <p className="text-center mt-4 mb-4">Copyright 2024</p>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Facebook</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Col>
    </Row>
  </Container>
    {/* End Area */}
    <Spinner animation="border" role="status" style={{display: 'none'}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </body>
  );
}

export default NavScrollExample;
