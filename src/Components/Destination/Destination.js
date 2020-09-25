import React from 'react';
import Picture1 from '../../images/picture/rectangle-26.png';
import Picture2 from '../../images/picture/rectangle-27.png';
import Picture3 from '../../images/picture/rectangle-28.png';
import Star from '../../images/icon/star.png';
import MapGoogle from '../MapGoogle/MapGoogle';

const Destination = () => {
    const fontStyle = {
        fontSize: '12px',
        textAlign: 'left'
    }

    return (
        <div className="container">
            <p style={{textAlign: 'left', color: 'gray', fontWeight: 'bold'}}>252 Stays Sep 17-20</p>
            <p style={{textAlign: 'left', color: 'black', fontWeight: 'bold'}}>Stay in Cox's Bazar</p>
            <div className="row">
                <div className="col-7">

                    <div className="row" style={{padding: '10px', borderShadow: '5px 5px 5px lightgray'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img className="col-12" src={Picture1} alt=""/>
                            </div>
                            <div className="col-7">
                                <p style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'left'}}>Light bright airy stylish apt & safe peaceful stay</p>
                                <p style={fontStyle}>small 4 guests   2 bedrooms   2 beds   2 baths</p>
                                <p style={fontStyle}>WiFi Air conditioning Kitchen</p>
                                <p style={fontStyle}>Cancellation flexibility available</p>
                                <div style={{display: 'flex'}}>
                                    <div>
                                        <img style={{width: '10px'}} src={Star} alt=""/>
                                    </div>
                                    <p style={fontStyle}>4.9(20) $59/Night 167 total</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{padding: '10px'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img className="col-12" src={Picture2} alt=""/>
                            </div>
                            <div className="col-7">
                                <p style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'left'}}>Apartment in Lost Panorama</p>
                                <p style={fontStyle}>small 4 guests   2 bedrooms   2 beds   2 baths</p>
                                <p style={fontStyle}>WiFi Air conditioning Kitchen</p>
                                <p style={fontStyle}>Cancellation flexibility available</p>
                                <div style={{display: 'flex'}}>
                                    <div>
                                        <img style={{width: '10px'}} src={Star} alt=""/>
                                    </div>
                                    <p style={fontStyle}>4.9(20) $59/Night 167 total</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{padding: '10px'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img className="col-12" src={Picture3} alt=""/>
                            </div>
                            <div className="col-7">
                                <p style={{fontWeight: 'bold', fontSize: '16px', textAlign: 'left'}}>AR Lounge and pool (r&r b&b)</p>
                                <p style={fontStyle}>small 4 guests   2 bedrooms   2 beds   2 baths</p>
                                <p style={fontStyle}>WiFi Air conditioning Kitchen</p>
                                <p style={fontStyle}>Cancellation flexibility available</p>
                                <div style={{display: 'flex'}}>
                                    <div>
                                        <img style={{width: '10px'}} src={Star} alt=""/>
                                    </div>
                                    <p style={fontStyle}>4.9(20) $59/Night 167 total</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-5">
                    <MapGoogle></MapGoogle>
                </div>
            </div>
        </div>
    );
};

export default Destination;