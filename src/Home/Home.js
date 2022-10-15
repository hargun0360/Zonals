import React from 'react'
import Navbar from '../Navbar/Navbar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import star from "./star.svg"
import about from "./about.svg"
import category from "./categories.svg"
import Footer from "../Footer/Footer"
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
                                        18 - 20 November 2022
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
        <div className='content'>
            <div className='about' id="about">
                <div className='about-us-heading'>
                    <h1>About Us</h1>
                </div>
                <div className='Main-about-data'>
                    <div className='about-us-story'>
                        <p>The mission of the IDEA Lab is to help students' ideas and encourage them to think beyond the ordinary, for the betterment of mankind. To make IDEA Lab a place where no idea is considered out of bounds so that there is no pulling back. To encourage students and teachers alike to use their technical skills The mission of the IDEA Lab is to help students' ideas and encourage them to think beyond the ordinary, for the betterment of mankind. To make IDEA Lab a place where no idea is considered out </p>
                    </div>
                    <div className='about-us-image'>
                        <img src={about}></img>
                    </div>
                </div>
            </div>
        </div>
        <div className='category-content' id="categories">
            <div className='about'>
                <div className='category-heading'>
                    <h1>Categories</h1>
                </div>
                <div className='Main-category-data'>
                    <div className='category-image'>
                        <img src={category}></img>
                    </div>
                    <div className='category-story'>
                        <div className='listed-data'>
                            <ul>
                                <li>
                                    Men’s Single
                                </li>
                                <li>
                                    Women’s Single
                                </li>
                                <li>
                                    Men’s Team
                                </li>
                                <li>
                                    Women’s Team
                                </li>
                                <li>
                                    Girls (&lt; 18 years)
                                </li>
                            </ul>
                        </div>
                        <div className='listed-data'>
                            <ul>
                                <li>
                                    Boys (&lt; 18 years)
                                </li>
                                <li>
                                    Youth Boys (&lt; 21 years)
                                </li>
                                <li>
                                    Youth Girls (&lt; 21 years)
                                </li>
                                <li>
                                    Veteran Men (&gt; 40 years)
                                </li>
                                <li>
                                    Veteran Women (&gt; 40 years)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='organiser' id="organizers">
            <div className='organizing-committee'>
                <div className='heading'>
                    <h1>Organizing Committee</h1>
                </div>
                <div className='committee-list'>
                    <ul>
                        <li>
                            Prof. I.P. Sharma
                        </li>
                        <li>
                            Mr. Rajeev Sharma
                        </li>
                        <li>
                            Mr. Pratap Singh
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
                                <div className='student-name'>
                                    Umang Gupta
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (8077121060)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange'>
                                <div>
                                    Srijan Singh
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (7258869864)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange'>
                                <div>
                                    Abhiroop Tomar
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px" }}>
                                    (981078229)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange'>
                                <div>
                                    Palak Tyagi
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