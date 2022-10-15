// @flow
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/esm/CardGroup';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Stack from 'react-bootstrap/esm/Stack';
import {FaCalendarAlt, FaCheckDouble, FaFingerprint, FaGlobeEurope, FaUsers} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Footer} from '../components/Footer';

export const Index = () => {
    return (
        <>
            <Container className="py-5">
                <Row className="py-5">
                    <Col>
                        <Stack gap={3} className="text-center">
                            <h1>qTrack is a time-tracking & calendar application</h1>
                            Create a qTrack account to get lorem ipsum dolor sit amet!
                            <Link to="" className="btn btn-warning btn-lg w-50 m-auto shadow-sm">
                                Create a Free Account
                            </Link>
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <hr className="mb-0"/>
            <div className="py-3 text-bg-light shadow-sm">
                <Container className="py-3">
                    <Row>
                        <Col>
                            <h3>What is qTrack?</h3>
                            <p>
                                Praesent egestas, urna quis malesuada aliquet, erat erat aliquam est, ut tincidunt sem
                                lacus
                                condimentum lectus. Integer sit amet urna eu mauris convallis finibus. Suspendisse
                                pulvinar
                                maximus tincidunt.
                            </p>
                            <Link to="" className="btn btn-outline-dark btn-sm shadow-sm">Read more</Link>
                        </Col>
                        <Col sm={3} className="align-self-center">
                            <FaCalendarAlt size={100}/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <hr className="mt-0"/>
            <Container className="mt-5">
                <Row>
                    <Col sm={4}>
                        <FaCheckDouble size={50}/>
                        <h3>Features</h3>
                        <p>Curabitur ligula ex, consequat at risus non, placerat hendrerit nisi. <b>Quisque
                            facilisis</b>, lorem ac cursus bibendum, lorem nulla hendrerit nulla, molestie auctor orci
                            dolor ut turpis.</p>
                    </Col>
                    <Col sm={4}>
                        <FaFingerprint size={50}/>
                        <h3>Lorem</h3>
                        <p><b>Phasellus et pretium urna</b>, non mollis ante. Nulla in scelerisque nibh. Sed sed dapibus
                            ligula, ac iaculis dolor. Proin eleifend, nulla sed imperdiet volutpat, ipsum ex finibus
                            leo, ac interdum massa nibh pretium eros.</p>
                    </Col>
                    <Col sm={4}>
                        <FaGlobeEurope size={50}/>
                        <h3>Vestibulum</h3>
                        <p>Praesent egestas, urna quis malesuada aliquet, erat erat aliquam est, ut tincidunt sem lacus
                            condimentum lectus. <b>Integer sit amet</b> urna eu mauris convallis finibus. Suspendisse
                            pulvinar maximus tincidunt. </p>
                    </Col>
                    <Col sm={12}>
                        <FaUsers size={50}/>
                        <h3>Proin</h3>
                        <p>Vestibulum tempus lorem ligula, at convallis erat euismod ut. Proin aliquet, dolor vel
                            tincidunt ullamcorper, <b>mauris nibh hendrerit risus</b>, varius fermentum metus felis non
                            dolor. Praesent dictum eros sit amet egestas volutpat.</p>
                    </Col>
                </Row>
            </Container>

            <hr/>
            <Container className="py-3">
                <Row>
                    <Col className="text-center">
                        <h1>Pricing</h1>
                    </Col>
                </Row>
                <Row>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title>Lite</Card.Title>
                                <Card.Text>
                                    <h1 className="m-0">FREE</h1>
                                    <span className="text-muted"><small>forever</small></span>
                                </Card.Text>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item py-1">1 Calendar</li>
                                    <li className="list-group-item py-1">5 Notifications</li>
                                </ul>
                            </Card.Body>
                            <Link to="" className="btn btn-outline-dark mx-2 mb-2 shadow-sm">Register Now</Link>
                        </Card>

                        <Card className="text-bg-light">
                            <Card.Body className="d-flex flex-column pb-0">
                                <Card.Title>Pro</Card.Title>
                                <Card.Text>
                                    <h1 className="m-0">4.99€</h1>
                                    <span className="text-muted">EUR/month</span>
                                </Card.Text>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item py-1 text-bg-light">Unlimited Calendars</li>
                                    <li className="list-group-item py-1 text-bg-light">Unlimited Notifications</li>
                                    <li className="list-group-item py-1 text-bg-light">Collaborative Calendars</li>
                                    <li className="list-group-item py-1 text-bg-light">And much more</li>
                                </ul>
                                <span className="text-muted pt-2">
                                    <small>1 Month free, 4.99 EUR/month after.</small>
                                </span>
                            </Card.Body>
                            <Link to="" className="btn btn-warning mx-2 mb-2 shadow-sm">1 Month Free</Link>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>

            <hr/>
            <Container>
                <Row className="my-5">
                    <Col className="text-center">
                        <h3>Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula ex, consequat at
                            risus
                            non, placerat hendrerit nisi. Quisque facilisis, lorem ac cursus bibendum, lorem nulla
                            hendrerit
                            nulla, molestie auctor orci dolor ut turpis.</p>
                        <Link to="" className="btn btn-dark me-1 shadow-sm">Create a Business Account</Link>
                        <Link to="" className="btn btn-outline-dark shadow-sm">Contact us</Link>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};
