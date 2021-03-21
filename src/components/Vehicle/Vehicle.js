import React from 'react';
import {Card} from 'react-bootstrap'
const Vehicle = (props) => {
    const {image,type} = props.type;
    return (
        <div className="col-md-6 col-sm-10 col-lg-3 mt-5">
            <Card style={{ width: '300px' }}>
                <Card.Img variant="top" style={{ height: '200px', width: '300px'}} src={image} />
                <Card.Body>
                    <Card.Title><h1>{type}</h1></Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Vehicle;