// @flow
import * as React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Row from 'react-bootstrap/esm/Row';
import Stack from 'react-bootstrap/esm/Stack';
import {FaInfo, FaPen, FaUserEdit, FaUsers} from 'react-icons/fa';
import {Link} from 'react-router-dom';

type Props = {};
export const Account = (props: Props) => {
    return (
        <Container>
            <Row>
                <Col md={6} className="mt-3">
                    <Card>
                        <Card.Header>
                            <FaUserEdit className="align-middle"/>
                            <span className="align-middle"> Account</span>
                            <Button variant="outline-dark" size="sm" className="float-end">
                                <FaPen/> <span className="align-middle">Edit</span>
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Stack>
                                <Row>
                                    <Col xs={4} className="fw-bold">Username</Col>
                                    <Col>
                                        <span className="align-middle">Example </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={4} className="fw-bold">Email</Col>
                                    <Col>
                                        <span className="align-middle">sample@example.com </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={4} className="fw-bold">Plan</Col>
                                    <Col>
                                        <span className="align-middle">Pro </span>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={4} className="fw-bold">Password</Col>
                                    <Col>
                                        <Link to="" className="btn btn-outline-dark btn-sm">Change password</Link>
                                    </Col>
                                </Row>
                            </Stack>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mt-3">
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col className="my-auto" xs={7}>
                                    <FaUsers className="align-middle"/>
                                    <span className="align-middle"> Friends & Groups</span>
                                </Col>
                                <Col>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder="Search"
                                            aria-label="Search friends"
                                            className="rounded-5"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Card.Header>

                        <ListGroup variant="flush">
                            {/*<ListGroup.Item className="bg-light border-bottom border-2 border-dark">
                                <InputGroup>
                                    <span className="input-group-text">Add new</span>
                                    <Form.Control
                                        placeholder="Friend/group name"
                                        aria-label="Add friends"
                                    />
                                </InputGroup>
                            </ListGroup.Item>*/}

                            <ListGroup.Item>
                                <span className="align-middle">Chuck Norris</span>
                                <Button variant="outline-dark" size="sm" className="rounded-5 float-end">
                                    <FaInfo/>
                                </Button>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <span className="align-middle">Jim Carrey</span>
                                <Button variant="outline-dark" size="sm" className="rounded-5 float-end">
                                    <FaInfo/>
                                </Button>
                            </ListGroup.Item>

                            <ListGroup.Item className="bg-light">
                                <span className="align-middle">
                                    My Workplace <span className="text-muted">(9 members)</span>
                                </span>
                                <Button variant="outline-dark" size="sm" className="rounded-5 float-end">
                                    <FaInfo/>
                                </Button>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <span className="align-middle">Morgan Freeman</span>
                                <Button variant="outline-dark" size="sm" className="rounded-5 float-end">
                                    <FaInfo/>
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};