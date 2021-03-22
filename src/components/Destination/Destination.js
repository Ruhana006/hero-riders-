import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';
import './Destination.css';
import Data from "../../FakeData/Data.json"
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import mapImg from '../../image/Map.png'

const Destination = (props) => {

    const { register, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const history = useHistory();
    const [isClicked, setIsClicked] = useState(false)
    const handleSearch = () => {
        const url = "/details";
        history.push(url);
        setIsClicked(true)
    }
    return (
        <section>
            <Header></Header>
            <div className="container background">
                <div className="row">
                    <div className="col-md-7">
                        <form onSubmit={handleSearch}>
                            <input className="search-input" type="text" name="from" placeholder="Place From" ref={register({ required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <input className="search-input" type="text" name="to" placeholder="Place To" ref={register({ required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <input className="search-input" type="datetime-local" name="" placeholder="Place To" ref={register({ required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <button className="search-btn">Search Here</button>
                        </form>
                    </div>
                    <div className="col-md-5">
                        <img  src={mapImg} alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destination;