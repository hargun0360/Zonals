import React from 'react'
import Navbar from '../Navbar/Navbar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import star from "./star.svg"
import category from "./categories.svg"
import Footer from "../Footer/Footer"
import About from './About/About';
import Eligibility from './Eligibility/Eligibility';
import Notes from './Notes/Notes';
import Prizes from './Prizes/Prizes';
import Fee from './Fee/Fee';
import Schedule from './Schedule/Schedule';
import Last from './Last/Last';

const Home = () => {
    return (<>
        <div className='Home'>
            <Navbar />
            <br></br>
            <div className='Bg-image' id="home">
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
                                        19 -20 November 2022
                                    </h1>
                                </div>
                            </div>
                            <div className='btn-pos'>
                                <a href="https://www.google.com/" target={"_self"}><div className='register'>
                                    Register
                                </div></a>
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

        <About />
        <Eligibility />
        <Prizes />
        <Schedule />
        <Fee />
        <Last />
        <Notes />

        <div className='organiser' id="organizers">
            <div className='organizing-committee'>
                <div className='heading'>
                    <h1>Organizing Committee</h1>
                </div>
                <div className='committee-list'>
                    <ul>
                        <li>
                            <div className='arrange'>
                                <div className='student-name' style={{fontFamily: "Gilroy"}}>
                                    Prof. B.K. Sharma
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (9711004358)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    SH. Rajeev Sharma
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (9818085060)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    MR. Pratap Singh
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (9213709657)
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='student'>
                <div className='heading-student'>
                    <h1>Student Convenors</h1>
                </div>
                <div className='student-list'>
                    <ul>
                        <li>
                            <div className='arrange'>
                                <div className='student-name' style={{fontFamily: "Gilroy"}}>
                                    Eeshank krashwal
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (7500872215)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    Yash Saxena
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (8448161159)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    Srijan Mishra
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (8318802408)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    Somya Goel
                                </div>
                                <div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>

    </>
    )
}

export default Home