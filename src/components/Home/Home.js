import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Data from '../../FakeData/Data.json'
import Vehicle from '../Vehicle/Vehicle';
import { useHistory } from 'react-router';
import './Home.css'

const Home = () => {
    const [types, setTypes] = useState([]);
    
    useEffect(() => {
        setTypes(Data)
    }, [])

    return (
        <div>
            <Header />
                <div className="row background">
                    {
                        types.map(type => <Vehicle type={type}></Vehicle>)
                    }
                </div>
        </div>
    );
};

export default Home;