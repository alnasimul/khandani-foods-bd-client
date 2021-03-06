import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import './Charts.css';


const Charts = ({ data }) => {
    const defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        Month: 'Month'
    }
    return (
        <>
            <div className='col-md-4 mx-5 bg-light mt-5 p-3 barChart' style={{borderRadius: '7px'}}>
                <Bar
                    data={data}
                    width={450}
                    height={400}
                    options={{
                            maintainAspectRatio: false,
                            title: {
                                display: defaultProps.displayTitle,
                                text: 'Huge Sales In ' + defaultProps.Month,
                                fontSize: 25
                            },
                            legend: {
                                display: defaultProps.displayLegend,
                                position: defaultProps.legendPosition
                            }
                        }
                    }
                />
            </div>
            <div className='col-md-4 mx-5 mt-5 bg-light p-3 lineChart' style={{borderRadius: '7px'}}>
                <Line
                    data={data}
                    width={450}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: defaultProps.displayTitle,
                            text: 'Huge Sales In ' + defaultProps.Month,
                            fontSize: 25
                        },
                        legend: {
                            display: defaultProps.displayLegend,
                            position: defaultProps.legendPosition
                        }
                    }}
                />
            </div>
            <div className='col-md-2'>

            </div>
            <div className='col-md-4 mt-5 mx-5 bg-light p-3 mb-5 doughnutChart' style={{marginRight: '200px', borderRadius: '7px'}}>
                <Doughnut
                    data={data}
                    width={450}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: defaultProps.displayTitle,
                            text: 'Huge Sales In ' + defaultProps.Month,
                            fontSize: 25
                        },
                        legend: {
                            display: defaultProps.displayLegend,
                            position: defaultProps.legendPosition
                        }
                    }}
                />
            </div>
        </>
    );
};

export default Charts;