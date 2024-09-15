"use client";
import { NextPage } from 'next';
import { Container, Row, Col, Card, Button, ListGroup, Form, Image } from 'react-bootstrap';

const DigitalMarketingPage: NextPage = () => (
  <Container>
    {/* Overview Section */}
    <Row className="my-4">
      <Col>
        <h1>Digital Marketing Services</h1>
        <p>Unlock your brand’s potential with our comprehensive digital marketing services. We offer tailored strategies and solutions to elevate your online presence, drive traffic, and generate leads. Discover how our expertise in SEO, social media, PPC, content marketing, and more can benefit your business.</p>
      </Col>
    </Row>

    {/* SEO Optimization */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>SEO Optimization</Card.Title>
            <Card.Text>
              Enhance your website's visibility and attract more organic traffic with our SEO services. We focus on both on-page and off-page strategies to improve your search engine rankings and drive qualified traffic to your site.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Keyword Research</ListGroup.Item>
              <ListGroup.Item>On-Page SEO (Meta Tags, Content Optimization)</ListGroup.Item>
              <ListGroup.Item>Technical SEO (Site Speed, Mobile Optimization)</ListGroup.Item>
              <ListGroup.Item>Link Building</ListGroup.Item>
              <ListGroup.Item>Performance Reporting</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/seo">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Case Study: SEO for XYZ Corp</Card.Title>
            <Card.Text>
              <p>Our SEO strategy for XYZ Corp resulted in a 120% increase in organic traffic and improved keyword rankings, leading to greater brand visibility and higher conversions.</p>
              <Button variant="link" href="/case-studies#xyz-corp">Read Full Case Study</Button>
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
              Build a strong social media presence with our management services. We create engaging content, manage your social channels, and analyze performance to boost your brand's online visibility.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Content Creation & Scheduling</ListGroup.Item>
              <ListGroup.Item>Community Management</ListGroup.Item>
              <ListGroup.Item>Social Media Advertising</ListGroup.Item>
              <ListGroup.Item>Analytics & Reporting</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/social-media">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Testimonial: “Exceptional Social Media Management”</Card.Title>
            <Card.Text>
              <p>“The social media team at Glory Grandeur significantly increased our engagement and followers. Their strategic approach and creativity were key to our success.” – Sarah Lee, Marketing Director at ABC Inc.</p>
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
              Drive immediate traffic and leads with our PPC advertising services. We manage and optimize your ad campaigns to ensure maximum ROI and targeted reach across various platforms.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Campaign Strategy & Setup</ListGroup.Item>
              <ListGroup.Item>Keyword & Audience Targeting</ListGroup.Item>
              <ListGroup.Item>Ad Creation & Optimization</ListGroup.Item>
              <ListGroup.Item>Performance Monitoring</ListGroup.Item>
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
              <p>Our PPC campaigns for DEF Ltd. resulted in a 200% increase in leads and a 40% reduction in cost-per-click, showcasing the effectiveness of our targeted approach.</p>
              <Button variant="link" href="/case-studies#def-ltd">Read Full Case Study</Button>
            </Card.Text>
            <Image src="/icon.png" alt="PPC Case Study" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Content Marketing */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Content Marketing</Card.Title>
            <Card.Text>
              Engage your audience with high-quality content that drives action. Our content marketing services include strategy development, content creation, and distribution to boost your brand’s authority and audience engagement.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Content Strategy & Planning</ListGroup.Item>
              <ListGroup.Item>Blog Posts & Articles</ListGroup.Item>
              <ListGroup.Item>Infographics & Visual Content</ListGroup.Item>
              <ListGroup.Item>Content Distribution & Promotion</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/content-marketing">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Testimonial: “Effective Content Marketing”</Card.Title>
            <Card.Text>
              <p>“The content marketing services provided by Glory Grandeur increased our website traffic by 150% and significantly improved our engagement rates.” – Michael Davis, Content Manager at GHI Co.</p>
              <Button variant="link" href="/testimonials">Read More Testimonials</Button>
            </Card.Text>
            <Image src="/icon.png" alt="Content Marketing Testimonial" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Email Marketing */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Email Marketing</Card.Title>
            <Card.Text>
              Reach your audience directly with effective email marketing campaigns. We design, implement, and analyze email campaigns to boost engagement, conversions, and customer retention.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Campaign Strategy & Design</ListGroup.Item>
              <ListGroup.Item>List Management & Segmentation</ListGroup.Item>
              <ListGroup.Item>Performance Tracking & Analytics</ListGroup.Item>
              <ListGroup.Item>Automated Email Sequences</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/email-marketing">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Case Study: Email Marketing for JKL Brand</Card.Title>
            <Card.Text>
              <p>Our email marketing efforts for JKL Brand resulted in a 300% increase in open rates and a 50% increase in click-through rates, demonstrating our ability to drive effective communication.</p>
              <Button variant="link" href="/case-studies#jkl-brand">Read Full Case Study</Button>
            </Card.Text>
            <Image src="/icon.png" alt="Email Marketing Case Study" fluid />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Analytics & Reporting */}
    <Row className="my-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Analytics & Reporting</Card.Title>
            <Card.Text>
              Make data-driven decisions with our analytics and reporting services. We provide in-depth analysis and reports on your digital marketing performance to help optimize your strategies and achieve better results.
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>Performance Tracking</ListGroup.Item>
              <ListGroup.Item>Custom Reports & Dashboards</ListGroup.Item>
              <ListGroup.Item>Data Analysis & Insights</ListGroup.Item>
              <ListGroup.Item>Strategy Recommendations</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href="/analytics">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Testimonial: “Insightful Analytics”</Card.Title>
            <Card.Text>
              <p>“Glory Grandeur’s analytics services provided us with actionable insights that transformed our marketing strategies and improved our ROI.” – Laura Green, Marketing Analyst at MNO Corp.</p>
              <Button variant="link" href="/testimonials">Read More Testimonials</Button>
            </Card.Text>
            <Image src="/icon.png" alt="Analytics Testimonial" fluid />
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

export default DigitalMarketingPage;
