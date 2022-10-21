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
import {IEvent} from "../IEvent";
import moment from "moment";

type Props = {
    handleAddEvent: (event: IEvent) => void,
};
export const NewEvent = (props: Props) => {
    // Locale
    const locale = "en-GB";
    registerLocale(locale, en);

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Event
    const [title, setTitle] = useState<string>("");
    const [startDate, setStartDate] = useState<Date>(new Date(2022, 9, 20, 9, 0, 0));
    const [endDate, setEndDate] = useState<Date>(new Date(2022, 9, 20, 10, 0, 0));
    const [notification, setNotification] = useState(false);
    const [allDay, setAllDay] = useState(false);
    const [repeat, setRepeat] = useState(0);
    const [calendarGroup, setCalendarGroup] = useState("lightblue");
    const [description, setDescription] = useState("");

    // Currently correct date format is "2022-10-16 07:00:00"
    // TODO id random is temporary.
    const addEvent = () => {
        props.handleAddEvent({
            id: Math.floor(Math.random() * 1000),
            title: title,
            start: moment(startDate).format("YYYY-MM-DD hh:mm:ss"),
            end: moment(endDate).format("YYYY-MM-DD hh:mm:ss"),
            notification: notification,
            repeat: repeat,
            calendarGroup: calendarGroup,
            description: description
        });
        setShow(false)
    }

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
                            <Form.Control
                                type="text"
                                placeholder="Add title"
                                autoFocus
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                            />
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
                                            onChange={date => date ? setStartDate(date) : setStartDate(new Date())}
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
                                        selected={startDate}
                                        onChange={time => time ? setStartDate(time) : setStartDate(new Date())}
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
                                            onChange={date => date ? setEndDate(date) : setEndDate(new Date())}
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
                                        selected={endDate}
                                        onChange={time => time ? setEndDate(time) : setEndDate(new Date())}
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
                                    onClick={() => setNotification(old => !old)}
                                />
                            </Col>
                            <Col xs={4}>
                                <Form.Check
                                    type="switch"
                                    id="allDaySwitch"
                                    label="All day"
                                    onClick={() => setAllDay(old => !old)}
                                />
                            </Col>
                        </Row>

                        <InputGroup className="mb-1">
                            <InputGroup.Text id="eventRepeat">
                                <FaSyncAlt/>
                            </InputGroup.Text>
                            <Form.Select
                                aria-label="Event repeats"
                                onChange={e => setRepeat(parseInt(e.target.value, 10))}
                            >
                                <option value="0">Does not repeat</option>
                                <option value="1">Every day</option>
                                <option value="2">Every week</option>
                                <option value="3">Every month</option>
                                <option value="4">Every year</option>
                                <option value="5">Custom</option>
                            </Form.Select>
                        </InputGroup>

                        <InputGroup className="mb-1">
                            <InputGroup.Text id="eventCalendar">
                                <FaCalendarAlt/>
                            </InputGroup.Text>
                            <Form.Select
                                aria-label="Calendar type"
                                onChange={e => setCalendarGroup(e.target.value)}
                            >
                                <option value="1">Default calendar</option>
                                <option value="2">Work</option>
                                <option value="3">Important</option>
                            </Form.Select>
                        </InputGroup>

                        <Form.Group controlId="eventDescription">
                            <Form.Label className="my-1">Add description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                            />
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
                        onClick={addEvent}
                        className="shadow-sm"
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
