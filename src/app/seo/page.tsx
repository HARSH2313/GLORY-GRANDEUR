"use client";
import { NextPage } from 'next';
import { Container, Row, Col, Card, Button, ListGroup, Form, Image } from 'react-bootstrap';

const SEOPage: NextPage = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Search Engine Optimization (SEO)</h1>
          <p>
            Improve your website's visibility and attract more qualified traffic 
            with our comprehensive SEO services. Our approach combines technical 
            expertise with creative strategies to boost your rankings and drive organic growth.
          </p>
        </Col>
      </Row>

      <Row className="my-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our SEO Services</Card.Title>
              <Card.Text>
                We offer a range of SEO services designed to enhance your online 
                presence and help you achieve your business goals. Our services include:
              </Card.Text>
              <ListGroup>
                <ListGroup.Item>Keyword Research & Analysis</ListGroup.Item>
                <ListGroup.Item>On-Page SEO (Meta Tags, Content Optimization)</ListGroup.Item>
                <ListGroup.Item>Technical SEO (Site Speed, Mobile Optimization)</ListGroup.Item>
                <ListGroup.Item>Link Building & Off-Page SEO</ListGroup.Item>
                <ListGroup.Item>SEO Audits & Performance Reporting</ListGroup.Item>
              </ListGroup>
              <Button variant="primary" href="#contact">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Why SEO Matters</Card.Title>
              <Card.Text>
                SEO is crucial for driving organic traffic to your website, improving 
                user experience, and increasing your online visibility. Effective SEO 
                can help you achieve higher search engine rankings, attract more potential 
                customers, and ultimately grow your business.
              </Card.Text>
              <Image src="/icon.png" alt="SEO Benefits" fluid />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add additional sections similarly, ensuring no dynamic data is mismatched */}
      
      <Row className="my-4" id="contact">
        <Col>
          <h2>Contact Us</h2>
          <p>If you’re ready to improve your website’s SEO or have any questions about our services, please fill out the form below. Our team will get back to you shortly to discuss how we can help you achieve your SEO goals.</p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" required />
            </Form.Group>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SEOPage;
