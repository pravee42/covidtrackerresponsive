import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
import { Header } from 'semantic-ui-react'
import ChartCountryComponent from './chartCountry'
import ChartCountryComponentDeaths from './ChartCountryComponentDeaths'
import ChartCountryComponentRecovered from './ChartCountryComponentRecovered'

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            country: '',
            countryName: 'India',
            casesType: 'cases',
        }
    }

    getData = () => {
        axios.get(`https://disease.sh/v3/covid-19/countries/${this.state.country}`).then(result => {
            const data = result.data
            this.setState({
                data
            }, () => {
                this.setState({ countryName: this.state.country }, () => { console.log(this.state.countryName) })
            })
        })
            .catch(error => {
                alert("Enter a Valid Country Name")
                this.setState({
                    country: ''
                })
            })
    }

    changeCountry = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }


    render() {
        return (
            <div className="countryComponent">
                <div className="country-conatiner">
                    <div className="search-container">
                        <Header as='h2'>Type Country Name</Header>
                        <input className="search-textbox" value={this.state.country} onChange={this.changeCountry} type="text" name="country" id="" />
                        <div className="button-values">
                            <button className="search-button" onClick={this.getData} >
                                Search
                        </button>
                        </div>
                    </div>
                    <div className="country-details">
                        <div className="active-cases">
                            Active Cases: {this.state.data.active}
                        </div>
                        <div className="today-cases">
                            Today's Cases: {this.state.data.todayCases}
                        </div>
                        <div className="death-cases">
                            Death: {this.state.data.deaths}
                        </div>
                        <div className="today-death-cases">
                            Today Deaths: {this.state.data.todayDeaths}
                        </div>
                        <div className="country-name">
                            {this.state.data.country}
                        </div>
                    </div>
                </div>
                <div className="mapschange">
                    <h2>Cases</h2>
                    <ChartCountryComponent casesType='cases' countryName={this.state.countryName} />
                    <div className="countryNameComponent">
                        <h2>Country: {this.state.countryName}</h2>
                    </div>
                </div>
                <div className="mapdata">
                    <div className="deaths">
                        <h2>Death</h2>
                        <ChartCountryComponentDeaths casesType='deaths' countryName={this.state.countryName} />
                    </div>
                    <div className="Recovered">
                        <h2>Recovered</h2>
                        <ChartCountryComponentRecovered casesType='recovered' countryName={this.state.countryName} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Country;

