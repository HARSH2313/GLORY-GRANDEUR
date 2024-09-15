"use client";
import { NextPage } from 'next';
import { Container, Row, Col, Card, Image, Button, ListGroup, Form } from 'react-bootstrap';

const AboutUsPage: NextPage = () => (
  <Container>
    {/* Introduction Section */}
    <Row className="my-4">
      <Col>
        <h1>About Us</h1>
        <p>Welcome to Glory Grandeur, your trusted partner in digital marketing and creative services. Our dedicated team combines industry expertise with a passion for innovation to deliver exceptional results for businesses of all sizes. Discover more about who we are and how we can help you achieve your goals.</p>
      </Col>
    </Row>

    {/* Our Story Section */}
    <Row className="my-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Our Story</Card.Title>
            <Card.Text>
              Founded in 2010, Glory Grandeur began with a vision to revolutionize the way businesses approach digital marketing and design. Over the years, we’ve grown from a small startup into a leading agency known for our commitment to excellence and innovative solutions. Our journey has been marked by numerous success stories, and we continue to push the boundaries to stay ahead in a fast-evolving industry.
            </Card.Text>
            <Image src="/icon.png" alt="Our Story" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Our Mission Section */}
    <Row className="my-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Our Mission</Card.Title>
            <Card.Text>
              At Glory Grandeur, our mission is to empower businesses by providing cutting-edge digital marketing and creative solutions. We are dedicated to delivering strategies that drive results, foster growth, and build meaningful connections with audiences. Our client-centric approach ensures that we understand and exceed our clients' expectations every step of the way.
            </Card.Text>
            <Image src="/icon.png" alt="Our Mission" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Our Vision Section */}
    <Row className="my-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Our Vision</Card.Title>
            <Card.Text>
              Our vision is to be recognized as a pioneering leader in digital marketing and creative design. We strive to set new industry standards through innovation, creativity, and strategic thinking. By continually adapting to market trends and technological advancements, we aim to help our clients navigate the digital landscape and achieve sustainable success.
            </Card.Text>
            <Image src="/icon.png" alt="Our Vision" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Our Values Section */}
    <Row className="my-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Our Values</Card.Title>
            <ListGroup>
              <ListGroup.Item><strong>Integrity:</strong> We uphold honesty and transparency in all our interactions and business practices.</ListGroup.Item>
              <ListGroup.Item><strong>Innovation:</strong> We are committed to exploring new ideas and leveraging cutting-edge technologies to deliver exceptional results.</ListGroup.Item>
              <ListGroup.Item><strong>Client-Centricity:</strong> Our clients' needs and satisfaction are at the forefront of everything we do.</ListGroup.Item>
              <ListGroup.Item><strong>Collaboration:</strong> We believe in the power of teamwork and collaboration to achieve the best outcomes.</ListGroup.Item>
              <ListGroup.Item><strong>Excellence:</strong> We strive for excellence in every project, ensuring the highest quality of work.</ListGroup.Item>
            </ListGroup>
            <Image src="/icon.png" alt="Our Values" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Meet the Team Section */}
    <Row className="my-4">
      <Col>
        <h2>Meet the Team</h2>
        <p>Our team consists of passionate professionals with diverse expertise, working together to deliver outstanding results. Get to know the people behind Glory Grandeur who make it all happen:</p>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/icon.png" alt="Jane Doe" />
              <Card.Body>
                <Card.Title>Jane Doe</Card.Title>
                <Card.Text>Founder & CEO</Card.Text>
                <Button variant="link" href="/team/jane-doe">Read Bio</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/icon.png" alt="John Smith" />
              <Card.Body>
                <Card.Title>John Smith</Card.Title>
                <Card.Text>Chief Marketing Officer</Card.Text>
                <Button variant="link" href="/team/john-smith">Read Bio</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/icon.png" alt="Emily Johnson" />
              <Card.Body>
                <Card.Title>Emily Johnson</Card.Title>
                <Card.Text>Lead Designer</Card.Text>
                <Button variant="link" href="/team/emily-johnson">Read Bio</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>

    {/* Achievements Section */}
    <Row className="my-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Our Achievements</Card.Title>
            <Card.Text>
              We take pride in our accomplishments and the impact we’ve made. Here are some of the milestones we’ve achieved:
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Recognized as a Top Digital Marketing Agency by XYZ Magazine</ListGroup.Item>
              <ListGroup.Item>Recipient of the ABC Award for Best Creative Design</ListGroup.Item>
              <ListGroup.Item>Successfully managed over 500+ client campaigns globally</ListGroup.Item>
              <ListGroup.Item>Achieved a 95% client satisfaction rate</ListGroup.Item>
            </ListGroup>
            <Image src="/icon.png" alt="Achievements" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Client Testimonials Section */}
    <Row className="my-4">
      <Col>
        <h2>What Our Clients Say</h2>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Testimonial from XYZ Corp</Card.Title>
                <Card.Text>
                  <p>“Working with Glory Grandeur has been a game-changer for our business. Their innovative approach and dedication to excellence have exceeded our expectations. Highly recommended!” – Alex Brown, CEO of XYZ Corp</p>
                </Card.Text>
                <Image src="/icon.png" alt="Testimonial 1" fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Testimonial from ABC Ltd.</Card.Title>
                <Card.Text>
                  <p>“The team at Glory Grandeur brought our vision to life with their exceptional creativity and strategic insights. Our brand has never looked better.” – Sarah Green, Marketing Director at ABC Ltd.</p>
                </Card.Text>
                <Image src="/icon.png" alt="Testimonial 2" fluid />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>

    {/* Contact Us Section */}
    <Row className="my-4">
      <Col>
        <h2>Get in Touch</h2>
        <p>If you have any questions or would like to discuss how our services can benefit your business, please fill out the form below or reach out to us through the contact details provided. We look forward to hearing from you!</p>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter the subject" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message" />
          </Form.Group>
          <Button variant="primary" type="submit">Send Message</Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default AboutUsPage;
