"use client";
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Container, Row, Col, Card, Image, Button, ListGroup, Form } from 'react-bootstrap';
import styles from './AboutUs.module.css'; // Ensure this CSS module is created

interface TeamMember {
  name: string;
  title: string;
  imgSrc: string;
  link: string;
}

interface Testimonial {
  company: string;
  testimonial: string;
  name: string;
  imgSrc: string;
}

const AboutUsPage: NextPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTeamMembers([
      { name: "Jane Doe", title: "Founder & CEO", imgSrc: "/icon.png", link: "/team/jane-doe" },
      { name: "John Smith", title: "Chief Marketing Officer", imgSrc: "/icon.png", link: "/team/john-smith" },
      { name: "Emily Johnson", title: "Lead Designer", imgSrc: "/icon.png", link: "/team/emily-johnson" },
    ]);

    setTestimonials([
      { company: "XYZ Corp", testimonial: "Working with Glory Grandeur has been a game-changer for our business. Their innovative approach and dedication to excellence have exceeded our expectations. Highly recommended!", name: "Alex Brown", imgSrc: "/icon.png" },
      { company: "ABC Ltd.", testimonial: "The team at Glory Grandeur brought our vision to life with their exceptional creativity and strategic insights. Our brand has never looked better.", name: "Sarah Green", imgSrc: "/icon.png" },
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>About Us | Glory Grandeur</title>
        <meta name="description" content="Learn more about Glory Grandeur, your trusted partner in digital marketing and creative services." />
      </Head>
      <Container className={styles.container}>
        {/* Introduction Section */}
        <Row className={`${styles.section} text-center my-4`}>
          <Col>
            <h1 className={styles.heading}>About Us</h1>
            <p>Welcome to Glory Grandeur, your trusted partner in digital marketing and creative services. Our dedicated team combines industry expertise with a passion for innovation to deliver exceptional results for businesses of all sizes. Discover more about who we are and how we can help you achieve your goals.</p>
          </Col>
        </Row>

        {/* Our Story Section */}
        <Row className={`${styles.section} my-4`}>
          <Col>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className="text-center">Our Story</Card.Title>
                <Card.Text>
                  Founded in 2010, Glory Grandeur began with a vision to revolutionize the way businesses approach digital marketing and design. Over the years, we’ve grown from a small startup into a leading agency known for our commitment to excellence and innovative solutions.
                </Card.Text>
                <Image src="/icon.png" alt="Our Story" fluid />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Our Mission Section */}
        <Row className={`${styles.section} my-4`}>
          <Col>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className="text-center">Our Mission</Card.Title>
                <Card.Text>
                  At Glory Grandeur, our mission is to empower businesses by providing cutting-edge digital marketing and creative solutions. Our client-centric approach ensures that we understand and exceed our clients' expectations every step of the way.
                </Card.Text>
                <Image src="/icon.png" alt="Our Mission" fluid />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Our Vision Section */}
        <Row className={`${styles.section} my-4`}>
          <Col>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className="text-center">Our Vision</Card.Title>
                <Card.Text>
                  Our vision is to be recognized as a pioneering leader in digital marketing and creative design. By continually adapting to market trends and technological advancements, we aim to help our clients achieve sustainable success.
                </Card.Text>
                <Image src="/icon.png" alt="Our Vision" fluid />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Our Values Section */}
        <Row className={`${styles.section} my-4`}>
          <Col>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className="text-center">Our Values</Card.Title>
                <ListGroup>
                  <ListGroup.Item><strong>Integrity:</strong> Honesty and transparency in all interactions.</ListGroup.Item>
                  <ListGroup.Item><strong>Innovation:</strong> Leveraging new ideas and technologies.</ListGroup.Item>
                  <ListGroup.Item><strong>Client-Centricity:</strong> Prioritizing client needs and satisfaction.</ListGroup.Item>
                  <ListGroup.Item><strong>Collaboration:</strong> Teamwork to achieve the best outcomes.</ListGroup.Item>
                  <ListGroup.Item><strong>Excellence:</strong> Striving for the highest quality in every project.</ListGroup.Item>
                </ListGroup>
                <Image src="/icon.png" alt="Our Values" fluid />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Meet the Team Section */}
        <Row className={`${styles.section} my-4`}>
          <Col>
            <h2 className={`${styles.subheading} text-center`}>Meet the Team</h2>
            <Row>
              {teamMembers.map((member, index) => (
                <Col md={4} key={index}>
                  <Card className={styles.teamCard}>
                    <Card.Img variant="top" src={member.imgSrc} alt={member.name} />
                    <Card.Body>
                      <Card.Title className="text-center">{member.name}</Card.Title>
                      <Card.Text className="text-center">{member.title}</Card.Text>
                      <Button variant="link" href={member.link} className="d-block mx-auto">Read Bio</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Achievements Section */}
        <Row className={`${styles.section} my-4`}>
          <Col>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className="text-center">Our Achievements</Card.Title>
                <Card.Text>We take pride in our accomplishments. Here are some milestones:</Card.Text>
                <ListGroup>
                  <ListGroup.Item>Top Digital Marketing Agency by XYZ Magazine</ListGroup.Item>
                  <ListGroup.Item>ABC Award for Best Creative Design</ListGroup.Item>
                  <ListGroup.Item>Over 500+ client campaigns managed globally</ListGroup.Item>
                  <ListGroup.Item>95% client satisfaction rate</ListGroup.Item>
                </ListGroup>
                <Image src="/icon.png" alt="Achievements" fluid />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Client Testimonials Section */}
        <Row className={`${styles.section} my-4`}>
          <Col>
            <h2 className={`${styles.subheading} text-center`}>What Our Clients Say</h2>
            <Row>
              {testimonials.map((testimony, index) => (
                <Col md={6} key={index}>
                  <Card className={styles.testimonialCard}>
                    <Card.Body>
                      <Card.Title>Testimonial from {testimony.company}</Card.Title>
                      <Card.Text>
                        <p>“{testimony.testimonial}” – {testimony.name}</p>
                      </Card.Text>
                      <Image src={testimony.imgSrc} alt={`Testimonial from ${testimony.company}`} fluid />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Contact Us Section */}
        <Row className={`${styles.section} my-4`}>
          <Col>
            <h2 className={`${styles.subheading} text-center`}>Get in Touch</h2>
            <p className="text-center">If you have any questions or would like to discuss how our services can benefit your business, please fill out the form below.</p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter the subject" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="d-block mx-auto">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUsPage;
