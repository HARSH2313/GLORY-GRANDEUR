"use client"
// pages/index.tsx
import { NextPage } from 'next';
import { Container, Row, Col, Button, Card, Carousel, Form, Image } from 'react-bootstrap';

const HomePage: NextPage = () => (
  <Container>
    {/* Hero Section */}
    <Row className="my-4">
      <Col className="text-center">
        <h1>Welcome to Glory Grandeur</h1>
        <p>Your one-stop solution for digital marketing and creative services. We specialize in delivering tailored strategies to elevate your brand and drive growth.</p>
        <Button variant="primary" href="/contact-us">Get in Touch</Button>
      </Col>
    </Row>

    {/* Recent Projects */}
    <Row className="my-4">
      <Col>
        <h2>Our Recent Projects</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/icon.png"
              alt="Project 1"
            />
            <Carousel.Caption>
              <h3>Project One</h3>
              <p>Detailed description of Project One, showcasing its impact and results.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/icon.png"
              alt="Project 2"
            />
            <Carousel.Caption>
              <h3>Project Two</h3>
              <p>Highlights of Project Two, including key achievements and client feedback.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/icon.png"
              alt="Project 3"
            />
            <Carousel.Caption>
              <h3>Project Three</h3>
              <p>Insights into Project Three, demonstrating our expertise and results.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>

    {/* Mission Statement */}
    <Row className="my-4">
      <Col className="text-center">
        <h2>Our Mission</h2>
        <p>At Glory Grandeur, we are committed to helping businesses achieve their full potential through innovative digital marketing strategies and exceptional creative services. Our mission is to deliver measurable results and foster long-term partnerships.</p>
      </Col>
    </Row>

    {/* Featured Services */}
    <Row className="my-4">
      <Col>
        <h2>Featured Services</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>SEO Optimization</Card.Title>
                <Card.Text>
                  Boost your website’s visibility and drive organic traffic with our expert SEO services.
                </Card.Text>
                <Button variant="link" href="/seo">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Build a stunning and functional website that effectively represents your brand.
                </Card.Text>
                <Button variant="link" href="/web-development">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  Maximize your online presence with our comprehensive digital marketing strategies.
                </Card.Text>
                <Button variant="link" href="/digital-marketing">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>

    {/* Client Logos */}
    <Row className="my-4">
      <Col className="text-center">
        <h2>Trusted by Leading Brands</h2>
        <Row>
          <Col md={2}>
            <Image src="/icon.png" alt="Client Logo 1" fluid />
          </Col>
          <Col md={2}>
            <Image src="/icon.png" alt="Client Logo 2" fluid />
          </Col>
          <Col md={2}>
            <Image src="/icon.png" alt="Client Logo 3" fluid />
          </Col>
          <Col md={2}>
            <Image src="/icon.png" alt="Client Logo 4" fluid />
          </Col>
          <Col md={2}>
            <Image src="/icon.png" alt="Client Logo 5" fluid />
          </Col>
          <Col md={2}>
            <Image src="/icon.png" alt="Client Logo 6" fluid />
          </Col>
        </Row>
      </Col>
    </Row>

    {/* Blog Preview */}
    <Row className="my-4">
      <Col>
        <h2>Latest Insights from Our Blog</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/icon.png" />
              <Card.Body>
                <Card.Title>How to Improve Your SEO in 2024</Card.Title>
                <Card.Text>
                  Discover the latest SEO trends and strategies to enhance your website’s ranking.
                </Card.Text>
                <Button variant="link" href="/blog/how-to-improve-your-seo">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/icon.png" />
              <Card.Body>
                <Card.Title>Effective Strategies for Social Media Marketing</Card.Title>
                <Card.Text>
                  Learn how to leverage social media platforms to engage your audience and boost your brand.
                </Card.Text>
                <Button variant="link" href="/blog/social-media-marketing-strategies">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/icon.png" />
              <Card.Body>
                <Card.Title>The Future of Web Development</Card.Title>
                <Card.Text>
                  Explore the upcoming trends and technologies that will shape the future of web development.
                </Card.Text>
                <Button variant="link" href="/blog/future-of-web-development">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>

    {/* Free Consultation Call-to-Action */}
    <Row className="my-4 text-center">
      <Col>
        <h2>Ready to Take Your Business to the Next Level?</h2>
        <p>Contact us today for a free consultation and discover how we can help you achieve your goals.</p>
        <Button variant="primary" href="/contact-us">Book a Free Consultation</Button>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
