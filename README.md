# react-really-easy-charts
A simple bar chart react component built with [chart.js](https://www.chartjs.org/).


# Usage
~~~~ 
npm install --save react-really-easy-charts
~~~~

~~~~ 
import { BarChart } from 'react-really-easy-charts'

class App extends Component {

  render() {
    return(
      <div>
        <BarChart 
            countForEachBar={ [ 1, 5, 15 ] } 
            labelForEachBar={ [ 'monday', 'tuesday', 'wednesday' ] } 
            barChartLabel={ "Unique Users" } 
            rgba={ [ 13, 102, 255, 0.8 ] } 
            />
      </div>
    );
  };
};

export default App;
~~~~

# Props
## countForEachBar: number[]
- The **Y** value for each verticle bar in the chart.
- The **order** of the values should correspond to the order of the values in the **labelForEachBar** list.
## labelForEachBar: any[]
- The **label** for each verticle bar in the chart.
- The **order** of the values should correspond to the order of the values in the **countForEachBar** list.
## barChartLabel: string
- The **label** for the bar chart.
## rgba: number[]
- A list of 4 numbers that are passed into the css rgba function to provide a colour for chart.