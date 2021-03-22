import React from 'react';
import {Card} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Vehicle = (props) => {
    const {image,type,id} = props.type;
    const history = useHistory();

    const handleSearch =(id)=>{
       const url =`/destination/${id}`;
       history.push(url)
    }
    return (
        <div  className="col-md-6 col-sm-10 col-lg-3 mt-5">
            <Card onClick={()=>handleSearch(props.type)} style={{ width: '320px' ,borderRadius :'10px',boxShadow:'1px 1px 3px grey' }}>
                <Card.Img variant="top" style={{ height: '200px', width: '300px'}} src={image} />
                <Card.Body>
                    <Card.Title><h1>{type}</h1></Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Vehicle;