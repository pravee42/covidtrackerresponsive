import React, { Component } from 'react';
import axios from 'axios'
import './Phonestyle.css';
import PhoneCases from './phonecaseschart';
import PhoneDeath from './phonedeathchart';
import Phonerecovered from './phonerecoveredchart';


class HomePhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    getData = () => {
        axios.get(`https://disease.sh/v3/covid-19/all/`).then(result => {
            const data = result.data
            this.setState({
                data
            })
        })
    }

    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div className="HomePageContainer">
                <h1 className="title">Covid Tracker</h1>
                <div className="HomePageContainer-1">
                    <div className="phone-cases">
                        <p className="title-cases">Cases</p>
                        <p className="count">{this.state.data.cases}</p>
                    </div>
                    <div className="phone-active">
                        <p className="title-cases">Active Cases</p>
                        <p className="phone-liveUpdate">+{this.state.data.todayCases}</p>
                        <h3 className="phone-activeCases">{this.state.data.active}</h3>
                    </div>
                </div>
                <div className="HomePageContainer-2">
                    <div className="phone-recovered">
                        <p className="title-cases">Recovered Cases</p>
                        <p className="phone-rectoday">+{this.state.data.todayRecovered}</p>
                        <h3 className="phone-rec">{this.state.data.recovered}</h3>
                    </div>
                    <div className="phone-deaths">
                        <p className="title-cases">Deaths Cases</p><br></br>
                        <p className="phone-detoday">+{this.state.data.todayRecovered}</p>
                        <h3 className="phone-death">{this.state.data.recovered}</h3>
                    </div>
                </div>
                <hr className="phone-divider" />
                <div className="phone-chartdata">
                    <div className="phone-caseschart">
                        <h1>Cases Data</h1>
                        <PhoneCases casesType="cases" />
                    </div>
                    <div className="phone-deathschart">
                        <h1>Deaths Data</h1>
                        <PhoneDeath casesType="deaths" />
                    </div>
                    <div className="phone-recoveredchart">
                        <h1>Recovered</h1>
                        <Phonerecovered casesType="deaths" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePhone;