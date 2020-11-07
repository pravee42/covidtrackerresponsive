import React from 'react'
import { Line } from "react-chartjs-2"
import { useState } from 'react';
import { useEffect } from 'react';
import numeral from 'numeral'
import './style.css'

const options = {
    global: {
        line: {
            borderColor: '#F85F73',
        },
    },
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 2,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },

    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    parser: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};

const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {

        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint
            }
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];

    }
    return chartData;
};

function ChartComponent({ casesType }) {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then(responce => responce.json())
                .then(data => {
                    const chartData = buildChartData(data, casesType);
                    setData(chartData);
                })
        }
        fetchData();
    }, [casesType])




    return (
        <div>
            {
                data?.length > 0 && (
                    <Line
                        options={options}
                        data={{
                            datasets: [
                                {
                                    data: data,
                                    backgroundColor: "#d2b21694",
                                    borderColor: "#ff9800"
                                }
                            ]
                        }} />
                )
            }
        </div>
    )
}

export default ChartComponent