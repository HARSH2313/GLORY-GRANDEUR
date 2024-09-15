"use client";
import { NextPage } from 'next';
import { Container, Row, Col, Card, Button, ListGroup, Image, Form } from 'react-bootstrap';

const ServicesPage: NextPage = () => (
  <Container>
    {/* Overview Section */}
    <Row className="my-4">
      <Col>
        <h1>Our Services</h1>
        <p>We offer a comprehensive range of services designed to help you achieve your business goals. Our expertise spans digital marketing, creative design, and web development. Explore our offerings below to find out how we can help elevate your brand.</p>
      </Col>
    </Row>

    {/* SEO Optimization */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>SEO Optimization</Card.Title>
            <Card.Text>
              Our SEO services are tailored to improve your website's visibility in search engines and attract targeted traffic. We use a combination of on-page and off-page optimization strategies to enhance your site’s performance.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Keyword Research & Analysis</ListGroup.Item>
              <ListGroup.Item>On-Page Optimization (Meta Tags, Content, etc.)</ListGroup.Item>
              <ListGroup.Item>Technical SEO (Site Speed, Mobile Optimization)</ListGroup.Item>
              <ListGroup.Item>Link Building & Outreach</ListGroup.Item>
              <ListGroup.Item>Monthly Performance Reports</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/seo">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Case Study: SEO for ABC Corp</Card.Title>
            <Card.Text>
              <p>ABC Corp approached us to enhance their organic search rankings. Through a targeted SEO strategy, we increased their website traffic by 150% and improved their Google ranking for key terms.</p>
              <Button variant="link" href="/case-studies#abc-corp">Read Full Case Study</Button>
            </Card.Text>
            <Image src="/icon.png" alt="SEO Case Study" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Social Media Management */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Social Media Management</Card.Title>
            <Card.Text>
              Our social media management services are designed to build and engage your audience across various platforms. We handle everything from content creation to performance analysis, ensuring a cohesive and effective social media strategy.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Content Strategy & Calendar</ListGroup.Item>
              <ListGroup.Item>Social Media Content Creation</ListGroup.Item>
              <ListGroup.Item>Community Management</ListGroup.Item>
              <ListGroup.Item>Analytics & Reporting</ListGroup.Item>
              <ListGroup.Item>Paid Social Advertising</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/social-media">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Testimonial: “Exceptional Social Media Results”</Card.Title>
            <Card.Text>
              <p>“The social media team at Glory Grandeur transformed our online presence. We saw a significant increase in engagement and followers within just a few months.” – Jane Doe, Marketing Director at XYZ Inc.</p>
              <Button variant="link" href="/testimonials">Read More Testimonials</Button>
            </Card.Text>
            <Image src="/icon.png" alt="Social Media Testimonial" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* PPC Advertising */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>PPC Advertising</Card.Title>
            <Card.Text>
              Our PPC advertising services help you reach potential customers quickly and efficiently. We manage your ad campaigns across platforms like Google Ads and social media to maximize your ROI.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Ad Campaign Strategy & Setup</ListGroup.Item>
              <ListGroup.Item>Keyword & Audience Targeting</ListGroup.Item>
              <ListGroup.Item>Ad Copywriting & Design</ListGroup.Item>
              <ListGroup.Item>Campaign Monitoring & Optimization</ListGroup.Item>
              <ListGroup.Item>Detailed Performance Reporting</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/ppc">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Case Study: PPC for DEF Ltd.</Card.Title>
            <Card.Text>
              <p>DEF Ltd. needed to increase their lead generation through PPC. We optimized their campaigns, resulting in a 200% increase in leads and a 50% reduction in cost per acquisition.</p>
              <Button variant="link" href="/case-studies#def-ltd">Read Full Case Study</Button>
            </Card.Text>
            <Image src="/icon.png" alt="PPC Case Study" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Web Development */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Web Development</Card.Title>
            <Card.Text>
              We offer custom web development services to create functional and visually appealing websites tailored to your business needs. From concept to launch, we ensure a seamless development process.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Custom Web Design & Development</ListGroup.Item>
              <ListGroup.Item>E-commerce Solutions</ListGroup.Item>
              <ListGroup.Item>Content Management Systems (CMS)</ListGroup.Item>
              <ListGroup.Item>Responsive & Mobile-Friendly Design</ListGroup.Item>
              <ListGroup.Item>Website Maintenance & Support</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/web-development">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Testimonial: “Outstanding Web Development”</Card.Title>
            <Card.Text>
              <p>“The team at Glory Grandeur built us a fantastic website that not only looks great but performs excellently. We couldn’t be happier with the results!” – John Smith, CEO of GHI Ltd.</p>
              <Button variant="link" href="/testimonials">Read More Testimonials</Button>
            </Card.Text>
            <Image src="/icon.png" alt="Web Development Testimonial" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Logo Design */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Logo Design</Card.Title>
            <Card.Text>
              Our logo design service ensures your brand stands out with a unique and memorable logo. We work closely with you to create a logo that reflects your brand’s identity and values.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Initial Concepts & Sketches</ListGroup.Item>
              <ListGroup.Item>Design Refinements</ListGroup.Item>
              <ListGroup.Item>Final Logo Files & Formats</ListGroup.Item>
              <ListGroup.Item>Brand Guidelines</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/logo">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Case Study: Logo for JKL Brand</Card.Title>
            <Card.Text>
              <p>We created a new logo for JKL Brand that successfully captured their modern and innovative approach. The new logo helped them revamp their brand identity and increase brand recognition.</p>
              <Button variant="link" href="/case-studies#jkl-brand">Read Full Case Study</Button>
            </Card.Text>
            <Image src="/icon.png" alt="Logo Case Study" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Graphic Design */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Graphic Design</Card.Title>
            <Card.Text>
              Our graphic design services enhance your visual communications. From marketing materials to digital graphics, we deliver high-quality designs that align with your brand’s message and goals.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Brochures & Flyers</ListGroup.Item>
              <ListGroup.Item>Infographics</ListGroup.Item>
              <ListGroup.Item>Social Media Graphics</ListGroup.Item>
              <ListGroup.Item>Advertising Materials</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/graphic-design">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Testimonial: “Exceptional Graphic Design”</Card.Title>
            <Card.Text>
              <p>“Glory Grandeur’s graphic design team provided us with stunning visuals that have significantly enhanced our marketing campaigns. Their creativity and professionalism are unmatched.” – Emily Johnson, Marketing Manager at MNO Corp.</p>
              <Button variant="link" href="/testimonials">Read More Testimonials</Button>
            </Card.Text>
            <Image src="/icon.png" alt="Graphic Design Testimonial" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Mobile App Design */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Mobile App Design</Card.Title>
            <Card.Text>
              We specialize in designing user-friendly mobile apps that deliver an exceptional user experience. Our design process includes user research, wireframing, and prototyping to ensure your app meets users’ needs.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>UI/UX Design</ListGroup.Item>
              <ListGroup.Item>Wireframing & Prototyping</ListGroup.Item>
              <ListGroup.Item>User Testing & Feedback</ListGroup.Item>
              <ListGroup.Item>App Design Optimization</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/mobile-app-design">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Case Study: Mobile App for PQR Startup</Card.Title>
            <Card.Text>
              <p>We designed a mobile app for PQR Startup that streamlined their user engagement and increased app downloads by 300%. Our design approach focused on simplicity and usability.</p>
              <Button variant="link" href="/case-studies#pqr-startup">Read Full Case Study</Button>
            </Card.Text>
            <Image src="/icon.png" alt="Mobile App Case Study" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Creative Advertising */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Creative Advertising</Card.Title>
            <Card.Text>
              Our creative advertising services help you develop impactful campaigns that capture attention and drive results. We focus on crafting unique concepts and executing strategies that resonate with your audience.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Campaign Strategy & Development</ListGroup.Item>
              <ListGroup.Item>Creative Concept Design</ListGroup.Item>
              <ListGroup.Item>Ad Copywriting & Visuals</ListGroup.Item>
              <ListGroup.Item>Campaign Execution & Analysis</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/creative-advertising">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Testimonial: “Outstanding Creative Campaigns”</Card.Title>
            <Card.Text>
              <p>“Glory Grandeur’s creative advertising team exceeded our expectations with their innovative approach and attention to detail. Our campaign performance improved dramatically.” – Mark Lee, CEO of STU Co.</p>
              <Button variant="link" href="/testimonials">Read More Testimonials</Button>
            </Card.Text>
            <Image src="/icon.png" alt="Creative Advertising Testimonial" fluid />
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
          <dd>Our SEO services include keyword research, on-page optimization, technical SEO, link building, and monthly performance reports.</dd>
          <dt>How do you measure the success of a social media campaign?</dt>
          <dd>We measure success through engagement metrics, follower growth, click-through rates, and overall campaign performance against set goals.</dd>
          <dt>What platforms do you use for PPC advertising?</dt>
          <dd>We use platforms like Google Ads, Facebook Ads, LinkedIn Ads, and other relevant networks to ensure your ads reach the right audience.</dd>
          <dt>Can you redesign an existing website?</dt>
          <dd>Yes, we offer website redesign services to update the look and functionality of your existing site to better meet your current business needs.</dd>
          <dt>How long does it take to complete a logo design?</dt>
          <dd>The timeline for logo design varies based on complexity, but typically ranges from 2 to 4 weeks, including revisions and finalization.</dd>
        </dl>
      </Col>
    </Row>

    {/* Contact Form */}
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
              <option>Logo Design</option>
              <option>Graphic Design</option>
              <option>Mobile App Design</option>
              <option>Creative Advertising</option>
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
