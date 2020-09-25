import React from 'react';
import './travelPlace.css';
import Coxbazar from '../../images/picture/coxbazar.png';
import Sreemongol from '../../images/picture/sreemongol2.png';
import Sundorbon from '../../images/picture/sundorbon2.png';
import { Link } from 'react-router-dom';

const TravelPlace = () => {

    return (
        <div style={{marginTop: '100px'}} className="container">
            <div className="row">

                <div class="col-5">
                    <div className="description">
                        <h1 >COX'S BAZAR</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Link style={{textDecoration:"none"}} to="/booking">
                            <button type="button" class="btn btn-warning">BOOKING</button>
                        </Link>
                    </div>
                </div>

                <div className="homeImg" class="col-7">
                    <img src={Coxbazar} className="cardImg" alt=""/>
                    <img src={Sreemongol} className="cardImg" alt=""/>
                    <img src={Sundorbon} className="cardImg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default TravelPlace;