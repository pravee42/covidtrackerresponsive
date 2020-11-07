import React, { Component } from 'react'
import axios from 'axios'
import './phone-style.css'
import { Header } from 'semantic-ui-react'
import ChartCountryComponent from './chart2/chartCountry'
import ChartCountryComponentRecovered from './chart2/ChartCountryComponentRecovered'
import ChartCountryComponentDeaths from './chart2/ChartCountryComponentDeaths'

class PhoneCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            country: '',
            countryName: 'India',
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
            <div className="phonecountryComponent">
                <div className="phonecountry-conatiner">
                    <div className="phonesearch-container">
                        <Header as='h2'>Type Country Name</Header>
                        <input className="phonesearch-textbox" value={this.state.country} onChange={this.changeCountry} type="text" name="country" id="" />
                        <div className="phonebutton-values">
                            <button className="phonesearch-button" onClick={this.getData} >
                                Search
                        </button>
                        </div>
                    </div>
                    <div className="phonecountry-details">
                        <div className="phonecases">
                            Active Cases: {this.state.data.active}
                        </div>
                        <div className="phonecases">
                            Today's Cases: {this.state.data.todayCases}
                        </div>
                        <div className="phonecases">
                            Death: {this.state.data.deaths}
                        </div>
                        <div className="phonecases">
                            Today Deaths: {this.state.data.todayDeaths}
                        </div>
                        <div className="phonecountry-name">
                            {this.state.data.country}
                        </div>
                    </div>
                </div>
                <div className="phonemapdata">
                    <div className="phonecountryNameComponent">
                        <h2>Country: {this.state.countryName}</h2>
                    </div>
                    <div className="phonecases11">
                        <h2>Cases</h2>
                        <ChartCountryComponent casesType="cases" countryName={this.state.countryName} />
                    </div>
                    <div className="phonedeaths">
                        <h2>Death</h2>
                        <ChartCountryComponentDeaths casesType="deaths" countryName={this.state.countryName} />
                    </div>
                    <div className="phoneRecovered">
                        <h2>Recovered</h2>
                        <ChartCountryComponentRecovered casesType="recovered" countryName={this.state.countryName} />
                    </div>
                </div>
            </div>
        );
    }
}

export default PhoneCountry;

