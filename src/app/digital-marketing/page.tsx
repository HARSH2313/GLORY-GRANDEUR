"use client";

import { NextPage } from 'next';
import { Container, Row, Col, Card, Button, ListGroup, Form, Image } from 'react-bootstrap';

const DigitalMarketingPage: NextPage = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Enhance your website's visibility and attract more organic traffic with our SEO services. We focus on both on-page and off-page strategies to improve your search engine rankings and drive qualified traffic to your site.",
      items: [
        "Keyword Research",
        "On-Page SEO (Meta Tags, Content Optimization)",
        "Technical SEO (Site Speed, Mobile Optimization)",
        "Link Building",
        "Performance Reporting",
      ],
      link: "/seo",
      caseStudy: {
        title: "Case Study: SEO for XYZ Corp",
        text: "Our SEO strategy for XYZ Corp resulted in a 120% increase in organic traffic and improved keyword rankings, leading to greater brand visibility and higher conversions.",
        link: "/case-studies#xyz-corp",
      },
    },
    {
      title: "Social Media Management",
      description: "Build a strong social media presence with our management services. We create engaging content, manage your social channels, and analyze performance to boost your brand's online visibility.",
      items: [
        "Content Creation & Scheduling",
        "Community Management",
        "Social Media Advertising",
        "Analytics & Reporting",
      ],
      link: "/social-media",
      testimonial: {
        text: "“The social media team at Glory Grandeur significantly increased our engagement and followers. Their strategic approach and creativity were key to our success.” – Sarah Lee, Marketing Director at ABC Inc.",
        link: "/testimonials",
      },
    },
    // Add other services here in a similar structure...
  ];

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Digital Marketing Services</h1>
          <p>
            Unlock your brand’s potential with our comprehensive digital marketing services. 
            We offer tailored strategies and solutions to elevate your online presence, drive traffic, and generate leads. 
            Discover how our expertise in SEO, social media, PPC, content marketing, and more can benefit your business.
          </p>
        </Col>
      </Row>

      {services.map((service, index) => (
        <Row className="my-4" key={index}>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <ListGroup>
                  {service.items.map((item, i) => (
                    <ListGroup.Item key={i}>{item}</ListGroup.Item>
                  ))}
                </ListGroup>
                <Button variant="primary" href={service.link}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                {service.caseStudy ? (
                  <>
                    <Card.Title>{service.caseStudy.title}</Card.Title>
                    <Card.Text>
                      <p>{service.caseStudy.text}</p>
                      <Button variant="link" href={service.caseStudy.link}>Read Full Case Study</Button>
                    </Card.Text>
                  </>
                ) : (
                  <>
                    <Card.Title>Testimonial</Card.Title>
                    <Card.Text>
                      <p>{service.testimonial.text}</p>
                      <Button variant="link" href={service.testimonial.link}>Read More Testimonials</Button>
                    </Card.Text>
                  </>
                )}
                <Image src="/icon.png" alt={`${service.title} Case Study`} fluid />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}

      {/* FAQ Section */}
      <Row className="my-4">
        <Col>
          <h2>Frequently Asked Questions</h2>
          <dl>
            <dt>What is included in your SEO services?</dt>
            <dd>Our SEO services include keyword research, on-page optimization, technical SEO, link building, and monthly performance reports.</dd>
            <dt>How do you measure the success of a social media campaign?</dt>
            <dd>We measure success through engagement metrics, follower growth, click-through rates, and overall campaign performance against set goals.</dd>
            <dt>What platforms do you use for PPC advertising?</dt>
            <dd>We use platforms like Google Ads, Facebook Ads, LinkedIn Ads, and other relevant networks to ensure your ads reach the right audience.</dd>
            <dt>Can you create a content marketing strategy for my business?</dt>
            <dd>Yes, we develop tailored content marketing strategies that align with your business goals and target audience to drive engagement and growth.</dd>
            <dt>How do you track the performance of email marketing campaigns?</dt>
            <dd>We track email marketing performance using metrics such as open rates, click-through rates, conversion rates, and overall engagement to optimize future campaigns.</dd>
          </dl>
        </Col>
      </Row>

      {/* Contact Form */}
      <Row className="my-4">
        <Col>
          <h2>Get in Touch</h2>
          <p>If you have any questions or would like to discuss how our digital marketing services can benefit your business, please fill out the form below. We’ll get back to you as soon as possible.</p>
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
                <option>Content Marketing</option>
                <option>Email Marketing</option>
                <option>Analytics & Reporting</option>
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
};

export default DigitalMarketingPage;
