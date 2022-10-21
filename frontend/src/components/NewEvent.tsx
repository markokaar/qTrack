// @flow
import * as React from "react";
import {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Modal from "react-bootstrap/esm/Modal";
import Row from "react-bootstrap/esm/Row";
import {
    FaCalendarAlt,
    FaCalendarDay,
    FaPlusSquare,
    FaSyncAlt,
} from "react-icons/fa";

import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import en from "date-fns/locale/en-GB";

type Props = {};
export const NewEvent = (props: Props) => {
    const locale = "en-GB";
    registerLocale(locale, en);

    const [show, setShow] = useState(false);
    const [allDay, setAllDay] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [startDate, setStartDate] = useState(new Date(2022, 9, 20));
    const [startTime, setStartTime] = useState(new Date(2022, 9, 20, 9));

    const [endDate, setEndDate] = useState(new Date(2022, 9, 20));
    const [endTime, setEndTime] = useState(new Date(2022, 9, 20, 10));

    return (
        <>
            <Button
                className="btn btn-light rounded-0 nav-link link-dark"
                onClick={handleShow}
            >
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
                            <Form.Control type="text" placeholder="Add title" autoFocus/>
                        </Form.Group>

                        <Row className="mb-1">
                            <Col>
                                <InputGroup>
                                    <div className="d-flex flex-fill">
                                        <InputGroup.Text id="startDate"
                                                         className="rounded-0 rounded-start border-end-0">
                                            <FaCalendarDay/>
                                        </InputGroup.Text>
                                        <DatePicker
                                            className="form-control rounded-0 rounded-end"
                                            locale={locale}
                                            dateFormat="MMM dd, yyyy"
                                            selected={startDate}
                                            onChange={(date) => date ? setStartDate(date) : setStartDate(new Date())}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            showWeekNumbers
                                        />
                                    </div>
                                </InputGroup>
                            </Col>
                            {
                                !allDay && <Col xs={4}>
                                    <DatePicker
                                        className="form-control"
                                        locale={locale}
                                        dateFormat="HH:mm"
                                        selected={startTime}
                                        onChange={(time) => time ? setStartTime(time) : setStartTime(new Date())}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        disabled={allDay}
                                    />
                                </Col>
                            }
                        </Row>

                        <Row className="mb-1">
                            <Col>
                                <InputGroup>
                                    <div className="d-flex flex-fill">
                                        <InputGroup.Text id="endDate"
                                                         className="rounded-0 rounded-start border-end-0">
                                            <FaCalendarDay/>
                                        </InputGroup.Text>
                                        <DatePicker
                                            className="form-control rounded-0 rounded-end"
                                            locale={locale}
                                            dateFormat="MMM dd, yyyy"
                                            selected={endDate}
                                            onChange={(date) => date ? setEndDate(date) : setEndDate(new Date())}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            showWeekNumbers
                                        />
                                    </div>
                                </InputGroup>
                            </Col>
                            {
                                !allDay && <Col xs={4}>
                                    <DatePicker
                                        className="form-control"
                                        locale={locale}
                                        dateFormat="HH:mm"
                                        selected={endTime}
                                        onChange={(time) => time ? setEndTime(time) : setEndTime(new Date())}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        disabled={allDay}
                                    />
                                </Col>
                            }
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
                                    onClick={() => setAllDay((old) => !old)}
                                />
                            </Col>
                        </Row>

                        <InputGroup className="mb-1">
                            <InputGroup.Text id="eventRepeat">
                                <FaSyncAlt/>
                            </InputGroup.Text>
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
                            <InputGroup.Text id="eventCalendar">
                                <FaCalendarAlt/>
                            </InputGroup.Text>
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
                    <Button
                        variant="outline-dark"
                        onClick={handleClose}
                        className="shadow-sm"
                    >
                        Close
                    </Button>
                    <Button
                        variant="warning"
                        onClick={handleClose}
                        className="shadow-sm"
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
