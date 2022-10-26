// @flow
import moment from 'moment';
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Row from 'react-bootstrap/esm/Row';
import {FaRegBell, FaRegCompass, FaRegPlusSquare} from 'react-icons/fa';
import {Notification} from "../components/Notification";
import {useEffect, useState} from "react";
import {IEvent} from "../IEvent";
import {NewEvent} from '../components/NewEvent';

type Props = {
    events: IEvent[],
    handleAddEvent: (event: IEvent) => void
};
export const Home = (props: Props) => {
    const [currentTime, setCurrentTime] = useState<moment.Moment>(moment());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [])

    return (
        <Container fluid className="mt-3">
            <Row>
                <Col sm={7} className="ps-2 pt-2 pe-0">
                    <Card border="dark shadow-sm">
                        <Card.Header>
                            <FaRegCompass className="align-middle"/>
                            <span className="align-middle"> Overview</span>
                        </Card.Header>
                        <div className="bg-light px-3 py-2 border-bottom">
                            <h5 className="mb-0">{currentTime.format('dddd, MMM Do YYYY')}</h5>
                            <h5 className="mb-0">{currentTime.format('HH:mm:ss')}</h5>
                        </div>
                        <Card.Body>
                            You have <b>4 events</b> today.<br/>
                            Next event: <b>09:00</b> (in 1h 37min).
                        </Card.Body>
                    </Card>

                    <Card className="mt-2 shadow-sm">
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
                    <Card className="shadow-sm">
                        <Card.Header>
                            <FaRegBell className="align-middle"/>
                            <span className="align-middle"> Notifications</span>
                        </Card.Header>
                        <ListGroup variant="flush">
                            <Notification content={'An event "Work" started.'} time={"15m"} color={"warning"}/>
                            <Notification content={`"Chuck's birthday" is in 3 days (March 10th).`} time={"4h"}
                                          color={"danger"}/>
                            <Notification content={'Normal notification.'} time={"1d"} color={"light"}/>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};