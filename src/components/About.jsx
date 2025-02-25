import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section className="about-section">
      <Container>
      <Row className="align-items-center">
  {/* Text goes UP at 1199px and below */}
  <Col xs={12} lg={6} className="order-1 order-lg-2">
    <h3 className="mb-4">A Place Where Coffee Dreams Come True</h3>
    <p className="lead mb-4">
      Welcome to Modern Coffee Shop, where passion meets perfection in every cup. 
      Established in 2020, we've been serving the community with carefully crafted 
      beverages and delightful treats.
    </p>
    <p>
      Our coffee beans are sourced from sustainable farms around the world, 
      roasted to perfection in small batches to ensure the highest quality. 
      Whether you're a coffee connoisseur or just beginning your coffee journey, 
      our expert baristas are here to create your perfect drink.
    </p>
    <p>
      Beyond coffee, we offer a curated selection of fresh pastries, hearty snacks, 
      and decadent desserts. Each item is made with premium ingredients and attention 
      to detail, ensuring a memorable experience with every visit.
    </p>
  </Col>

  {/* Image goes DOWN at 1199px and below */}
  <Col xs={12} lg={6} className="order-2 order-lg-1">
    <img 
      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800" 
      alt="Coffee Shop Interior" 
      className="about-image w-100"
    />
  </Col>
</Row>


      </Container>
    </section>
  );
}

export default About;