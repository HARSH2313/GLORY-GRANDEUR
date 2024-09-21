"use client";
import { NextPage } from 'next';
import { Container, Row, Col, Card, Button, ListGroup, Image } from 'react-bootstrap';

const WebDevelopmentPage: NextPage = () => (
  <Container className="my-4">
    <Row>
      <Col>
        <h1>Web Development Services</h1>
        <p>Building responsive and dynamic websites tailored to your needs.</p>
      </Col>
    </Row>

    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Custom Web Development</Card.Title>
            <Card.Text>
              We specialize in creating custom websites that are visually appealing and functional. Our team works closely with you to understand your business goals and deliver solutions that drive results.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Responsive Design</ListGroup.Item>
              <ListGroup.Item>eCommerce Solutions</ListGroup.Item>
              <ListGroup.Item>Content Management Systems (CMS)</ListGroup.Item>
              <ListGroup.Item>API Integration</ListGroup.Item>
              <ListGroup.Item>Ongoing Support and Maintenance</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/contact">Get a Quote</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Why Choose Us?</Card.Title>
            <Card.Text>
              Our experienced developers utilize the latest technologies to ensure your website is not only attractive but also functional and secure. We focus on user experience and performance to enhance customer engagement.
            </Card.Text>
            <Image src="/icon.png" alt="Web Development" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="my-4">
      <Col>
        <h2>Our Web Development Process</h2>
        <Card>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item><strong>1. Discovery:</strong> Understanding your requirements and objectives.</ListGroup.Item>
              <ListGroup.Item><strong>2. Design:</strong> Creating wireframes and design mockups.</ListGroup.Item>
              <ListGroup.Item><strong>3. Development:</strong> Building the website with clean, efficient code.</ListGroup.Item>
              <ListGroup.Item><strong>4. Testing:</strong> Rigorous testing to ensure quality and performance.</ListGroup.Item>
              <ListGroup.Item><strong>5. Launch:</strong> Deploying the website and providing ongoing support.</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="my-4">
      <Col>
        <h2>Client Testimonials</h2>
        <Card>
          <Card.Body>
            <Card.Text>
              “The team at Glory Grandeur transformed our online presence. Our new website is not only beautiful but also drives sales!” – <strong>Sarah L., CEO of ABC Corp</strong>
            </Card.Text>
            <Button variant="link" href="/testimonials">Read More Testimonials</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default WebDevelopmentPage;
