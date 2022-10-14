import React from 'react'
import Navbar from '../Navbar/Navbar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import star from "./star.svg"
const Home = () => {
    return (<>
        <div className='Home'>
            <Navbar />
            <br></br>
            <div className='Bg-image'>
                <div className="full-info">
                    <div className='details'>
                        <div className='Main-Heading'>
                            <h1>
                                24<sup>th</sup>  AJAY KUMAR GARG MEMORIAL
                            </h1>
                            <h1>
                                - TABLE TENNIS TOURNAMENT
                            </h1>
                            <p>
                                Under the aegis of GATT Affilliated to UPTA
                            </p>
                            <div className='dates'>
                                <div className='icon'>
                                    <CalendarMonthIcon fontSize='large'></CalendarMonthIcon>
                                </div>
                                <div className='text'>
                                    <h1>
                                        18 - 20 November 2022
                                    </h1>
                                </div>
                            </div>
                            <div className='btn-pos'>
                                <div className='register'>
                                    Register
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='prize'>
                    <div className='image'>
                        <img src={star}></img>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home