// @flow
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Row from 'react-bootstrap/esm/Row';
import Stack from 'react-bootstrap/esm/Stack';
import {FaRegBell, FaRegCompass, FaRegPlusSquare, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

type Props = {};
export const Home = (props: Props) => {
    return (
        <Container fluid className="mt-3">
            <Row>
                <Col sm={7} className="ps-2 pt-2 pe-0">
                    <Card border="dark">
                        <Card.Header>
                            <FaRegCompass className="align-middle"/>
                            <span className="align-middle"> Overview</span>
                        </Card.Header>
                        <Card.Body>
                            You have <b>4 events</b> today.<br/>
                            Next event: <b>09:00</b> (in 1h 37min).
                        </Card.Body>
                    </Card>
                    <Card className="mt-2">
                        <Card.Header>
                            <FaRegPlusSquare className="align-middle"/>
                            <span className="align-middle"> Add new event</span>
                        </Card.Header>
                        <Card.Body className="text-muted fst-italic">
                            Coming soon...
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={5} className="p-2">
                    <Card>
                        <Card.Header>
                            <FaRegBell className="align-middle"/>
                            <span className="align-middle"> Notifications</span>
                        </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="p-0">
                                <Stack className="alert alert-warning m-0 py-2 rounded-0">
                                    <div className="d-flex justify-content-between">
                                        An event "Work" started.
                                        <Link to="" className="text-dark ms-auto ps-1">
                                            <FaTimes/>
                                        </Link>
                                    </div>
                                    <span className="fs-6 text-muted text-end">15m ago</span>
                                </Stack>
                            </ListGroup.Item>
                            <ListGroup.Item className="p-0">
                                <Stack className="alert alert-danger m-0 py-2 rounded-0">
                                    <div className="d-flex justify-content-between">
                                        "Chuck's birthday" is coming in 3 days (March 10th).
                                        <Link to="" className="text-dark ms-auto ps-1">
                                            <FaTimes/>
                                        </Link>
                                    </div>
                                    <span className="fs-6 text-muted text-end">4h ago</span>
                                </Stack>
                            </ListGroup.Item>
                            <ListGroup.Item className="p-0">
                                <Stack className="alert alert-light m-0 py-2 rounded-0">
                                    <div className="d-flex justify-content-between">
                                        Normal notification.
                                        <Link to="" className="text-dark ms-auto ps-1">
                                            <FaTimes/>
                                        </Link>
                                    </div>
                                    <span className="fs-6 text-muted text-end">1d ago</span>
                                </Stack>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};