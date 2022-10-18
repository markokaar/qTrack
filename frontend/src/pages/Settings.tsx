// @flow
import * as React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Row from 'react-bootstrap/esm/Row';
import {FaCalendarAlt, FaCog} from 'react-icons/fa';

type Props = {};
export const Settings = (props: Props) => {
    return (
        <Container>
            <Row>
                <Col md={6} className="mt-3">
                    <Card>
                        <Card.Header>
                            <FaCog className="align-middle"/>
                            <span className="align-middle"> Settings</span>
                            <span className="align-middle text-muted float-end">Saved.</span>
                        </Card.Header>
                        <Card.Body>
                            <Form.Label>Default view</Form.Label>
                            <Form.Select aria-label="Select default calendar view">
                                <option value="1">Day</option>
                                <option value="2" selected>Week</option>
                                <option value="3">Month</option>
                            </Form.Select>
                            <Form.Check
                                type="switch"
                                id="darkModeSwitch"
                                label="Dark mode"
                                className="mt-3"
                            />
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mt-3">
                    <Card>
                        <Card.Header>
                            <FaCalendarAlt className="align-middle"/>
                            <span className="align-middle"> My calendars</span>
                            <Button variant="outline-dark" size="sm" className="float-end">
                                Add new
                            </Button>
                        </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{borderLeft: "10px solid orange"}}>
                                <span className="align-middle"> Default</span>
                                <Button variant="outline-dark" size="sm" className="rounded-5 float-end">
                                    <FaCog/>
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item style={{borderLeft: "10px solid lightblue"}}>
                                <span className="align-middle"> Work</span>
                                <Button variant="outline-dark" size="sm" className="rounded-5 float-end">
                                    <FaCog/>
                                </Button></ListGroup.Item>
                            <ListGroup.Item style={{borderLeft: "10px solid pink"}}>
                                <span className="align-middle"> Family</span>
                                <Button variant="outline-dark" size="sm" className="rounded-5 float-end">
                                    <FaCog/>
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};