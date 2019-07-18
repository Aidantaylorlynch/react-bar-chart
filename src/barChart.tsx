import React, { Component } from 'react';
import Chart from 'chart.js';

interface BarChartProps {
    countForEachBar: number[];
    labelForEachBar: any[];
    barChartLabel: string;
    rgba: number[];
};

interface BarChartState {};

export const BarChart = class extends Component<BarChartProps, BarChartState> {
    constructor(props: BarChartProps) {
        super(props);
    };

    componentDidMount() {
        let canvasContext = document.getElementById('bar-chart') as HTMLCanvasElement;
        let chart = new Chart(canvasContext, {
            type: 'bar',
            data: {
                labels: this.props.labelForEachBar,
                datasets: [
                    {
                        label: this.props.barChartLabel,
                        data: this.props.countForEachBar,
                        backgroundColor: `rgba(${this.props.rgba[0]}, ${this.props.rgba[1]}, ${this.props.rgba[2]}, ${this.props.rgba[3]})`
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
    };

    render() {
        return(
            <div className="bar-chart-container">
                <canvas id="bar-chart"></canvas>
            </div>
        );
    };
};