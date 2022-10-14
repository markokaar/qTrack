// @flow
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Row from 'react-bootstrap/esm/Row';
import {FaRegBell, FaRegCompass, FaRegPlusSquare} from 'react-icons/fa';
import {Notification} from "../components/Notification";

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