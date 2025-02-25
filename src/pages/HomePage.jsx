import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Footer from '../components/Footer';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar simple={true} />
      <Banner />
      
      <Container className="py-5">
        <Row className="g-4 mb-5">
          <Col md={4}>
            <div className="intro-card text-center">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400" 
                alt="Fresh Coffee"
                className="intro-image mb-3"
              />
              <h3>Premium Coffee</h3>
              <p>Expertly roasted beans for the perfect cup</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="intro-card text-center">
              <img 
                src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400" 
                alt="Cozy Atmosphere"
                className="intro-image mb-3"
              />
              <h3>Cozy Atmosphere</h3>
              <p>Perfect space to relax or work</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="intro-card text-center">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400" 
                alt="Fresh Pastries"
                className="intro-image mb-3"
              />
              <h3>Fresh Pastries</h3>
              <p>Delicious treats baked daily</p>
            </div>
          </Col>
        </Row>

        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => navigate('/menu')}
            className="px-5 py-3"
          >
            View Our Menu
          </Button>
        </div>
      </Container>

      <About />
      <Footer />
    </>
  );
}

export default HomePage;