import React from 'react'
import about from "../about.svg"
import "./About.css"

const About = () => {
  return (
    <div className='Main-about-data'>
            <div className='about-us-story'>
                <div id='about' className='about-us-heading'>
                    <h1>About Us</h1>
                </div>
                <div className="para">
                    <p className='pa'>The 22nd annual Ajay Kumar Garg Memorial Table Tennis
                        Tournament is to be conducted on <b>19-20 November 2022</b> at Ajay Kumar Garg Engineering
                        College in association with GDDTC(A)- Affiliated with UPTTA. This tournament is state level which
                        is held every year for all professional institutions and schools of the state. Various teams mark
                        their participation in 8 different categories for men and women separately in individual and team
                        events. A huge amount is kept as the prize money.
                        Last Year the tournament had top eight State ranked Table Tennis players and 21 teams with a
                        total of 180 participants from the Cities of <b>Allahabad, Lucknow, Moradabad, Meerut, Agra, Noida
                        and Ghaziabad,</b> besides enthusiastic response from the neighbouring schools and colleges.</p>
                    <div className='about-us-image'>
                        <img src={about}></img>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default About