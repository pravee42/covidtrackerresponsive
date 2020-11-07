import React, { Component } from 'react'
import './homePhone.css'
import logoimage from './logoimage.jpg'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="phone-phone-tab1">
                    <div className="phone-phone-Home">
                        <div className="phone-phone-appinfo">
                            <h1 className="phone-phone-Apptitle">COVID-19 Tracker App</h1>
                            <p className="phone-phone-content">This app is used to track corona virus of worldwide or specific countries. <br />
                    By using the statictical data we can analyze the historical data with the graphical view for the past 30 days
                    </p>
                        </div>

                        <div className="phone-phone-logo-container">
                            <img className="phone-phone-logo" src="https://www.world-heart-federation.org/wp-content/uploads/WEB-_PREVENT-_MEDICAL_650.gif" alt="none" />
                        </div>
                    </div>
                    <div className="phone-phone-avideo">
                        {/* https://covid19.info.gov.pg/wp-content/uploads/2020/03/WHO-English.mp4 */}
                        <iframe className="phone-phone-awarnessVideo" src="https://covid19.info.gov.pg/wp-content/uploads/2020/03/WHO-English.mp4" title="Awarness Video"></iframe>
                        <h2>AwarnessVideo</h2>
                    </div>
                </div>
                <div className="phone-phone-div">
                    <img className="phone-phone-image" src={logoimage} alt="Logo" />
                    <div className="phone-phone-authorinfromation">
                        <div className="phone-phone-companyname">
                            <p>Company</p><h1>ABIPRAVI</h1>
                        </div>
                        <div className="phone-phone-authordetails">
                            <p>This Website was Created By Praveen Kumar</p>
                            <p className="phone-phone-sdata-corona">This Website will be helpfull to track corona's Statistical data from past 1 month.</p>
                        </div>
                    </div>
                    <div className="phone-phone-headermedia">
                        <h1>Follow Us on</h1>
                        <div className="phone-phone-socialmedia">
                            <a href="https://www.instagram.com/praveenkumar_abipravi/">Instagram</a>
                            <a href="https://github.com/pravee42">Github</a>
                            <a href="https://www.youtube.com/channel/UCTMAfI1rkf94YQGNmZwFT7Q">Youtube</a>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;