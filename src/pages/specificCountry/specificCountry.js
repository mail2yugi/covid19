import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import {Line} from 'react-chartjs-2';

const stateprv = {
    labels: [],
    datasets: [
      {
        fill: true,
        backgroundColor: '#9C27B0',
        borderColor: '#9C27B0',
        borderWidth: 1,
        lineTension: 0.5,
        data: []
      }
    ]
  }

const SpecificCountry = (props) => {
    const [stateC, setStateC] = useState(stateprv);
    const [stateD, setStateD] = useState(stateprv);
    const [stateR, setStateR] = useState(stateprv);
    const [stateA, setStateA] = useState(stateprv);

    useEffect(() => {
        if(props.countrytDtls) {
            let label = [];
            let dataC = [];
            let dataD = [];
            let dataR = [];
            let dataA = [];
            Object.keys(props.countrytDtls).forEach((key) => {
                label.push(key);
                dataC.push(props.countrytDtls[key].confirmed);
                dataD.push(props.countrytDtls[key].deaths);
                dataR.push(props.countrytDtls[key].recovered);
                dataA.push(+props.countrytDtls[key].confirmed - props.countrytDtls[key].deaths - props.countrytDtls[key].recovered);
            })

            setStateC({
                labels: label,
                datasets : [
                    {
                        fill: true,
                        backgroundColor: '#9C27B0',
                        borderColor: '#9C27B0',
                        borderWidth: 1,
                        lineTension: 0.5,
                        data: dataC
                    }
                ]
            });

            setStateD({
                labels: label,
                datasets : [
                    {
                        fill: true,
                        backgroundColor: '#9C27B0',
                        borderColor: '#9C27B0',
                        borderWidth: 1,
                        lineTension: 0.5,
                        data: dataD
                    }
                ]
            });

            setStateR({
                labels: label,
                datasets : [
                    {
                        fill: true,
                        backgroundColor: '#9C27B0',
                        borderColor: '#9C27B0',
                        borderWidth: 1,
                        lineTension: 0.5,
                        data: dataR
                    }
                ]
            });

            setStateA({
                labels: label,
                datasets : [
                    {
                        fill: true,
                        backgroundColor: '#9C27B0',
                        borderColor: '#9C27B0',
                        borderWidth: 1,
                        lineTension: 0.5,
                        data: dataA
                    }
                ]
            });
        }
    }, [props.countrytDtls])

    return (
        <div className="specific-country">
            <Card>
                <Card.Header as="h5">{props.country3code}</Card.Header>
                <Card.Body>
                {props.latestDtls ? 
                    <div className="row">
                            <div className="col-3">
                                <Card style={{ width: '18rem' }} className="bg-warning box-shadow">
                                    <Card.Body>
                                        <Card.Title>Confirmed</Card.Title>
                                        <Card.Text className="count confirmed">{props.latestDtls.confirmed}</Card.Text>
                                        <div id="confirmChart">
                                        <Line
                                            data={stateC}
                                            options={
                                                {
                                                    scales:{
                                                        xAxes: [{
                                                            display: false //this will remove all the x-axis grid lines
                                                        }],
                                                        yAxes: [{
                                                            display: false //this will remove all the x-axis grid lines
                                                        }]
                                                    },
                                                    legend:{
                                                    display:false,
                                                    position:'right'
                                                    }
                                                }
                                            }
                                            />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-3">
                                <Card style={{ width: '18rem' }} className="bg-danger box-shadow">
                                    <Card.Body>
                                        <Card.Title>Death</Card.Title>
                                        <Card.Text className="count death">{props.latestDtls.deaths}</Card.Text>
                                        <div id="deathChart">
                                            <Line
                                                data={stateD}
                                                options={
                                                    {
                                                        legend:{
                                                            display:false,
                                                            position:'right'
                                                        },
                                                        scales:{
                                                            xAxes: [{
                                                                display: false //this will remove all the x-axis grid lines
                                                            }],
                                                            yAxes: [{
                                                                display: false //this will remove all the x-axis grid lines
                                                            }]
                                                        }
                                                    }
                                                }/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-3">
                                <Card style={{ width: '18rem' }} className="bg-success box-shadow">
                                    <Card.Body>
                                        <Card.Title>Recovered</Card.Title>
                                        <Card.Text className="count recover">{props.latestDtls.recovered}</Card.Text>
                                        <div id="recoverChart">
                                            <Line
                                                data={stateR}
                                                options={
                                                    {
                                                        legend:{
                                                            display:false,
                                                            position:'right'
                                                        },
                                                        scales:{
                                                            xAxes: [{
                                                                display: false //this will remove all the x-axis grid lines
                                                            }],
                                                            yAxes: [{
                                                                display: false //this will remove all the x-axis grid lines
                                                            }]
                                                        },
                                                    }
                                                }/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-3">
                                <Card style={{ width: '18rem' }} className="bg-secondary box-shadow">
                                    <Card.Body>
                                        <Card.Title>Active</Card.Title>
                                        <Card.Text className="count active">{+props.latestDtls.confirmed - props.latestDtls.deaths - props.latestDtls.recovered}</Card.Text>
                                        <div id="activeChart">
                                            <Line
                                                data={stateA}
                                                options={
                                                    {
                                                        legend:{
                                                            display:false,
                                                            position:'right'
                                                        },
                                                        scales:{
                                                            xAxes: [{
                                                                display: false //this will remove all the x-axis grid lines
                                                            }],
                                                            yAxes: [{
                                                                display: false //this will remove all the x-axis grid lines
                                                            }]
                                                        },
                                                    }
                                                }/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                     </div>
                    : null }
                </Card.Body>
            </Card>
        </div>
    )
}

export default SpecificCountry;