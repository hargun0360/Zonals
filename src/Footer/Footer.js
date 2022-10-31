import React from 'react'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WebIcon from '@mui/icons-material/Web';
import QR from '../QR/QR';

const Footer = () => {
    return (<>

        <div className='Footer'>
            <div className='contact-us'>
                <div className='contact-us-details'>
                    <div className='contact-heading'>
                        <h1>Contact Us</h1>
                    </div>
                    <div className='college-name'>
                        <div className='icon'>
                            <MapsHomeWorkIcon fontSize='large'></MapsHomeWorkIcon>
                        </div>  
                        <div className='text'>
                            <a href="https://www.akgec.ac.in/" target={"_self"} ><p>AJAY KUMAR GARG ENGINEERING COLLEGE</p></a>
                        </div>
                    </div>
                    <div className='college-address'>
                        <div className='icon'>
                            <FmdGoodIcon fontSize='large'></FmdGoodIcon>
                        </div>
                        <div className='text'>
                            <p>27<sup>th</sup>KM STONE, NH-24 DELHI-HAPUR BYPASS ROAD</p>
                            <p>ADHYATMIK NAGAR GHAZIABAD - 201009</p>
                        </div>
                    </div>
                    <div className='mobile-number' id='contact-us'>
                        <div className='icon'>
                            <LocalPhoneIcon fontSize='large'></LocalPhoneIcon>
                        </div>
                        <div className='text'>
                            <p>8744052891 to 94, 7290034976</p>
                        </div>
                    </div>
                    <div className='site-link'>
                        <div className='icon'>
                            <WebIcon fontSize='large'></WebIcon>
                        </div>
                        <div className='text'>
                            <a href = "https://www.akgec.ac.in/life-akgec/events/sports-events/tt-tournament/" target={"_self"} ><p>
                                <span style={{cursor:"pointer"}} >www.akgec.in/tabletennistournament</span>
                            </p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='QR-50'>
                <div className='QR-Box'>
                    <QR />
                </div>
                <div className='scan-text'>Scan QR to Register</div>
            </div>
        </div>

    </>
    )
}

export default Footer