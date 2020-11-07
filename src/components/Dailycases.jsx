import React, { Component } from 'react'
import axios from 'axios'
import './dailycasescomponent.css'
import ChartComponent from './chart'


class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            country: '',
            casesType: 'cases',
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

    changeCase = (e) => {
        this.setState({
            casesType: [e.target.name]
        })
    }


    render() {
        return (
            <div className="daily-cases-component">
                <div className="daily-cases-conatiner">
                    <div className="activecases">
                        <h2>Total Confrimed  Cases</h2>
                        <div className="casesupdateTab">
                            <p className="noneupdate">+{this.state.data.todayCases}</p>
                            <h3 className="activeCases1">{this.state.data.cases}</h3>
                        </div>
                        <div >
                            <button className="showMaps1" type="submit"></button>
                        </div>
                    </div>
                    <div className="confrimed">
                        <h2>Active Cases </h2>
                        <div className="casesupdateTab">
                            <p className="liveUpdate">+{this.state.data.todayCases}</p>
                            <h3 className="activeCases">{this.state.data.active}</h3>
                        </div>
                        <div >
                            <button className="showMaps" name="cases" onClick={this.changeCase} type="submit">Show Chart Data</button>
                        </div>
                    </div>
                    <div className="deathcases">
                        <h2>Death Cases</h2>
                        <div className="casesupdateTab">
                            <p className="liveUpdate">+{this.state.data.todayDeaths}</p>
                            <h3 className="activeCases">{this.state.data.deaths}</h3>
                        </div>
                        <div >
                            <button className="showMaps" name="recovered" onClick={this.changeCase} type="submit">Show Chart Data</button>
                        </div>
                    </div>
                    <div className="recovered">
                        <h2>Recovered Cases</h2>
                        <div className="casesupdateTab">
                            <p className="liveUpdate">+{this.state.data.todayRecovered}</p>
                            <h3 className="activeCases">{this.state.data.recovered}</h3>
                        </div>
                        <div >
                            <button className="showMaps" name="deaths" onClick={this.changeCase} type="submit">Show Chart Data</button>
                        </div>
                    </div>
                </div>
                <div className="mapschange">
                    <ChartComponent casesType={this.state.casesType} />
                </div>
            </div>
        );
    }
}

export default Country;

