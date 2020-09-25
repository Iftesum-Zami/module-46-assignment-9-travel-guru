import React from 'react';
import { Link } from 'react-router-dom';
import BgImg from '../../images/picture/rectangle-1.png'

const Booking = () => {
    const bgImg = {
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BgImg})`,
        height: "100vh",
        backgroundSize:"cover",
        backgroundPosition:"center",
    }
    const formText = {
        color: 'gray', 
        textAlign: 'left'
    }
    const bookingInput = {
        border: 'none',
        backgroundColor: 'lightgray',
        borderRadius: '5px',
        height: '40px',
    }

    return (
        <div style={bgImg}>
            <div style={{paddingTop: '150px', paddingLeft: '30px'}} className="container">
                <div className="row d-flex justify-content-between">

                    <div  className="col-5 description">
                        <h1>COX'S BAZAR</h1>
                        <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    </div>

                    <div className="col-6">
                        <form style={{borderRadius: '10px', width: '80%', padding: '20px', backgroundColor: 'white'}} action="">
                            
                            <div>
                                <p>Origin</p>
                                <input style={bookingInput} type="text" name="origin" id="" required/>
                                <br/>
                            </div>

                            <div>
                                <p>Destination</p>
                                <input style={bookingInput} type="text" name="destination" id="" required/>
                                <br/>
                            </div>

                            <div style={{display: 'flex'}}>

                                <div style={{paddingLeft: '20px'}}>
                                    <p style={formText}>from</p>
                                    <input style={{width: '160px'}} type="date" name="" id="" required/>
                                </div>

                                <div style={{paddingLeft: '30px'}}>
                                    <p style={formText}>to</p>
                                    <input style={{width: '160px'}} type="date" name="" id="" required/>
                                </div>
                            </div>
                            <br/>

                            <Link to="/destination"  style={{textDecoration:"none"}}>
                                <input style={{
                                    border: 'none', 
                                    backgroundColor:'#F9A51A', 
                                    borderRadius: '5px', height: 
                                    '40px'
                                }}
                                    type="button" 
                                    value="Start Booking"
                                />
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;