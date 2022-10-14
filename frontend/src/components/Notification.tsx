// @flow
import * as React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Stack from 'react-bootstrap/esm/Stack';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

type Props = {
    content: string,
    time: string,
    color: string
};
export const Notification = (props: Props) => {
    return (
        <ListGroup.Item className="p-0">
            <Stack className={"alert alert-" + props.color + " m-0 py-2 rounded-0"}>
                <div className="d-flex justify-content-between">
                    {props.content}
                    <Link to="" className="text-dark ms-auto ps-1">
                        <FaTimes/>
                    </Link>
                </div>
                <span className="fs-6 text-muted text-end">{props.time} ago</span>
            </Stack>
        </ListGroup.Item>
    );
};