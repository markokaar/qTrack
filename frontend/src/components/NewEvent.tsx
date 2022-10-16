// @flow
import * as React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Modal from 'react-bootstrap/esm/Modal';
import Row from 'react-bootstrap/esm/Row';
import {FaCalendarAlt, FaCalendarDay, FaClock, FaPlusSquare, FaSyncAlt} from 'react-icons/fa';

type Props = {};
export const NewEvent = (props: Props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="btn btn-light rounded-0 nav-link link-dark" onClick={handleShow}>
                <FaPlusSquare className="align-middle"/>
                <span className="align-middle"> New event</span>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new event</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="eventTitle">
                            <Form.Label className="mb-1">Event title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add title"
                                autoFocus
                            />
                        </Form.Group>

                        <Row className="mb-0">
                            <Col xs={8}>
                                <InputGroup className="mb-1">
                                    <InputGroup.Text id="startDate"><FaCalendarDay/></InputGroup.Text>
                                    <Form.Control placeholder="Start date" defaultValue="Oct 15, 2022"/>
                                </InputGroup>
                            </Col>
                            <Col xs={4}>
                                <InputGroup className="mb-1">
                                    <InputGroup.Text id="startTime"><FaClock/></InputGroup.Text>
                                    <Form.Control placeholder="Start time" defaultValue="09:00"/>
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row className="mb-1">
                            <Col xs={8}>
                                <InputGroup>
                                    <InputGroup.Text id="endDate"><FaCalendarDay/></InputGroup.Text>
                                    <Form.Control placeholder="Start date" defaultValue="Oct 15, 2022"/>
                                </InputGroup>
                            </Col>
                            <Col xs={4}>
                                <InputGroup>
                                    <InputGroup.Text id="endTime"><FaClock/></InputGroup.Text>
                                    <Form.Control placeholder="Start time" defaultValue="10:00"/>
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col xs={8}>
                                <Form.Check
                                    type="switch"
                                    id="notificationSwitch"
                                    label="Add notification"
                                />
                            </Col>
                            <Col xs={4}>
                                <Form.Check
                                    type="switch"
                                    id="allDaySwitch"
                                    label="All day"
                                />
                            </Col>
                        </Row>

                        <InputGroup className="mb-1">
                            <InputGroup.Text id="eventRepeat"><FaSyncAlt/></InputGroup.Text>
                            <Form.Select aria-label="Event repeats">
                                <option value="1">Does not repeat</option>
                                <option value="2">Every day</option>
                                <option value="3">Every week</option>
                                <option value="4">Every month</option>
                                <option value="5">Every year</option>
                                <option value="6">Custom</option>
                            </Form.Select>
                        </InputGroup>

                        <InputGroup className="mb-1">
                            <InputGroup.Text id="eventCalendar"><FaCalendarAlt/></InputGroup.Text>
                            <Form.Select aria-label="Calendar type">
                                <option value="1">Default calendar</option>
                                <option value="2">Work</option>
                                <option value="3">Important</option>
                            </Form.Select>
                        </InputGroup>

                        <Form.Group controlId="eventDescription">
                            <Form.Label className="my-1">Add description</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleClose} className="shadow-sm">
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleClose} className="shadow-sm">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
