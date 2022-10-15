import React from 'react'
import Navbar from '../Navbar/Navbar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import star from "./star.svg"
import about from "./about.svg"
import category from "./categories.svg"
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
        <div className='content'>
            <div className='about'>
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
        <div className='category-content'>
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
    </>
    )
}

export default Home