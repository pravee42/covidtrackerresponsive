import React, { Component } from 'react'
import './Homecss.css'
import logoimage from './logoimage.jpg'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="tab1">
                    <div className="Home">
                        <div className="appinfo">
                            <h1 className="Apptitle">COVID-19 Tracker App</h1>
                            <p className="content">This app is used to track corona virus of worldwide or specific countries. <br />
                    By using the statictical data we can analyze the historical data with the graphical view for the past 100 days
                    </p>
                        </div>

                        <div className="logo-container">
                            <img className="logo" src="https://www.world-heart-federation.org/wp-content/uploads/WEB-_PREVENT-_MEDICAL_650.gif" alt="none" />
                        </div>
                    </div>
                    <div className="avideo">
                        {/* https://covid19.info.gov.pg/wp-content/uploads/2020/03/WHO-English.mp4 */}
                        <iframe className="awarnessVideo" src="https://covid19.info.gov.pg/wp-content/uploads/2020/03/WHO-English.mp4" title="Awarness Video"></iframe>
                        <h2>AwarnessVideo</h2>
                    </div>
                </div>
                <div className="div">
                    <img className="image" src={logoimage} alt="Logo" />
                    <div className="authorinfromation">
                        <div className="companyname">
                            <p>Company</p><h1>ABIPRAVI</h1>
                        </div>
                        <div className="authordetails">
                            <p>This Website was Created By Praveen Kumar</p>
                            <p className="sdata-corona">This Website will be helpfull to track corona's Statistical data from past 100days.</p>
                        </div>
                    </div>
                    <div className="headermedia">
                        <h1>Follow Us on</h1>
                        <div className="socialmedia">
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