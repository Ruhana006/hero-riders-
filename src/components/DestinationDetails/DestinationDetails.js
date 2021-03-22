import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../FakeData/Data.json';
import Header from '../Header/Header';
import carImg from '../../image/Frame-2.png';
import mapImg from '../../image/Map.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
const DestinationDetails = () => {
    const rowStyle = {
        boxShadow: "1px 1px 3px grey",
        margin: '15px'
    }
    return (
        <section>
            <Header />
            <div className="container" >
                <div className="row">
                    <div className="col-md-5 ">
                        <div style={rowStyle} class="row">
                            <div class="col">
                                <img style={{ width: "80px" }} src={carImg} alt=""></img>
                            </div>
                            <div class="col"><h3>Car</h3></div>
                            <div class="col"> <h3><FontAwesomeIcon icon={faUserFriends}/> 4</h3></div>
                            <div class="col"><h3>$54</h3></div>
                        </div>
                        <div style={rowStyle} class="row">
                            <div class="col">
                                <img style={{ width: "80px" }} src={carImg} alt=""></img>
                            </div>
                            <div class="col"><h3>Car</h3></div>
                            <div class="col"> <h3><FontAwesomeIcon icon={faUserFriends}/> 4</h3></div>
                            <div class="col"><h3>$54</h3></div>
                        </div>
                        <div style={rowStyle} class="row">
                            <div class="col">
                                <img style={{ width: "80px" }} src={carImg} alt=""></img>
                            </div>
                            <div class="col"><h3>Car</h3></div>
                            <div class="col">  <h3><FontAwesomeIcon icon={faUserFriends} />4</h3></div>
                            <div class="col"><h3>$54</h3></div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <img src={mapImg} alt="" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default DestinationDetails;