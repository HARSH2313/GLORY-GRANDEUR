"use client";
import { NextPage } from 'next';
import { Container, Row, Col, Card, Button, ListGroup, Image, Form } from 'react-bootstrap';

const ServicesPage: NextPage = () => (
  <Container>
    {/* Overview Section */}
    <Row className="my-4 text-center">
      <Col>
        <h1 className="display-4">Our Services</h1>
        <p className="lead">We offer a comprehensive range of services designed to help you achieve your business goals. Explore our offerings below to find out how we can help elevate your brand.</p>
      </Col>
    </Row>

    {/* Service Cards Section */}
    <Row className="my-4">
      {/* SEO Optimization Card */}
      <Col md={4}>
        <Card className="shadow-sm mb-4">
          <Card.Img variant="top" src="/icon.png" alt="SEO Optimization" />
          <Card.Body>
            <Card.Title>SEO Optimization</Card.Title>
            <Card.Text>
              Tailored strategies to improve your website's visibility and attract targeted traffic.
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Keyword Research</ListGroup.Item>
              <ListGroup.Item>On-Page Optimization</ListGroup.Item>
              <ListGroup.Item>Link Building</ListGroup.Item>
              <ListGroup.Item>Performance Reports</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/seo">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Social Media Management Card */}
      <Col md={4}>
        <Card className="shadow-sm mb-4">
          <Card.Img variant="top" src="/icon.png" alt="Social Media Management" />
          <Card.Body>
            <Card.Title>Social Media Management</Card.Title>
            <Card.Text>
              Build and engage your audience across various platforms with our expert strategies.
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Content Creation</ListGroup.Item>
              <ListGroup.Item>Analytics & Reporting</ListGroup.Item>
              <ListGroup.Item>Community Management</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/social-media">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* PPC Advertising Card */}
      <Col md={4}>
        <Card className="shadow-sm mb-4">
          <Card.Img variant="top" src="/icon.png" alt="PPC Advertising" />
          <Card.Body>
            <Card.Title>PPC Advertising</Card.Title>
            <Card.Text>
              Maximize your ROI with targeted ad campaigns across multiple platforms.
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Campaign Strategy</ListGroup.Item>
              <ListGroup.Item>Ad Copywriting</ListGroup.Item>
              <ListGroup.Item>Performance Monitoring</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/ppc">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Additional Services Section */}
    <Row className="my-4">
      {/* Web Development Card */}
      <Col md={4}>
        <Card className="shadow-sm mb-4">
          <Card.Img variant="top" src="/icon.png" alt="Web Development" />
          <Card.Body>
            <Card.Title>Web Development</Card.Title>
            <Card.Text>
              Custom web development solutions that enhance user experience and drive conversions.
            </Card.Text>
            <Button variant="primary" href="/web-development">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Graphic Design Card */}
      <Col md={4}>
        <Card className="shadow-sm mb-4">
          <Card.Img variant="top" src="/icon.png" alt="Graphic Design" />
          <Card.Body>
            <Card.Title>Graphic Design</Card.Title>
            <Card.Text>
              High-quality design services to elevate your brand and visual communications.
            </Card.Text>
            <Button variant="primary" href="/graphic-design">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Mobile App Design Card */}
      <Col md={4}>
        <Card className="shadow-sm mb-4">
          <Card.Img variant="top" src="/icon.png" alt="Mobile App Design" />
          <Card.Body>
            <Card.Title>Mobile App Design</Card.Title>
            <Card.Text>
              User-friendly mobile app designs that enhance user engagement and satisfaction.
            </Card.Text>
            <Button variant="primary" href="/mobile-app-design">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Testimonials Section */}
    <Row className="my-4 text-center">
      <Col>
        <h2>What Our Clients Say</h2>
        <Card className="mb-4">
          <Card.Body>
            <Card.Text>
              “The team at Glory Grandeur transformed our online presence. We saw a significant increase in engagement and followers within just a few months.” – Jane Doe, Marketing Director at XYZ Inc.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Body>
            <Card.Text>
              “Their creative approach and professional execution exceeded our expectations. We couldn't be happier with the results!” – John Smith, CEO of GHI Ltd.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* FAQ Section */}
    <Row className="my-4">
      <Col>
        <h2>Frequently Asked Questions</h2>
        <dl>
          <dt>What is included in your SEO services?</dt>
          <dd>Our SEO services encompass keyword research, on-page optimization, technical SEO, link building, and monthly performance reports.</dd>
          <dt>How do you measure the success of a social media campaign?</dt>
          <dd>Success is measured through engagement metrics, follower growth, click-through rates, and overall campaign performance against set goals.</dd>
          <dt>Can you redesign an existing website?</dt>
          <dd>Yes, we offer website redesign services to modernize the look and functionality of your existing site.</dd>
        </dl>
      </Col>
    </Row>

    {/* Contact Form Section */}
    <Row className="my-4">
      <Col>
        <h2>Get in Touch</h2>
        <p>If you have any questions or would like to discuss how our services can benefit your business, please fill out the form below. We’ll get back to you as soon as possible.</p>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group controlId="formService">
            <Form.Label>Service of Interest</Form.Label>
            <Form.Control as="select" required>
              <option value="">Select a service</option>
              <option>SEO Optimization</option>
              <option>Social Media Management</option>
              <option>PPC Advertising</option>
              <option>Web Development</option>
              <option>Graphic Design</option>
              <option>Mobile App Design</option>
            </Form.Control>
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

export default ServicesPage;
