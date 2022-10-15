// @flow
import * as React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Stack from 'react-bootstrap/esm/Stack';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="py-5 bg-light">
            <Container className="mb-5">
                <Row>
                    <Col md={6} sm={4} xs={12} className="mb-3">
                        <h5>q<span className="text-warning">Track</span></h5>

                        <p className="text-muted">
                            &copy;&nbsp;2022&nbsp;qTrack. All&nbsp;rights&nbsp;reserved.
                        </p>

                        <Stack direction="horizontal">
                            <a className="link-dark" href="">
                                <FaTwitterSquare size="32"/>
                            </a>
                            <a className="link-dark" href="">
                                <FaFacebookSquare size="32"/>
                            </a>
                            <a className="link-dark" href="">
                                <FaInstagramSquare size="32"/>
                            </a>
                            <a className="link-dark" href="">
                                <FaYoutubeSquare size="32"/>
                            </a>
                        </Stack>
                    </Col>

                    <Col md={2} sm={3} xs={4}>
                        <h5>Overview</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Business
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col md={2} sm={3} xs={4}>
                        <h5>Support</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Help Centre
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col md={2} sm={2} xs={4}>
                        <h5>Company</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    About us
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Reliability
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};