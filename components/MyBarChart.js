import React from 'react';
import View from 'react-native';
import {BarChart, Grid, YAxis} from 'react-native-svg-charts';

export default class MyBarChart extends React.Component {
    render() {
        const data = [ 14, 80, 100, 55 ];
        const contentInset = { top: 20, bottom: 20 }
        return (
            <View>
                <BarChart
                    data = {data}
                    gridMin = {0}
                    svg={{ fill: 'rgb(134, 65, 244)' }}
                    contentInset = {contentInset}
                />
            </View>
        )
    }
}