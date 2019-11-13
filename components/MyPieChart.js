import React from 'react';
import {View, Text} from 'react-native';
import { PieChart } from 'react-native-svg-charts';

export default class MyPieChart extends React.Component {
    
    render(){
 
        const pieData = this.props.data
            .filter(obj => obj.value > 0)
            .map((dataObj, index) => ({
                value: dataObj.value,
                label: dataObj.label,
                svg: {
                    fill: dataObj.fill,
                    onPress: () => console.log('press', index),
                },
                key: `pie-${dataObj.label}`,
            }))
        const Labels = () => {
            return pieData.map(item => (
                <Text key={item.key} style={{marginLeft:10}}>
                    <View style={{height:30, width: 30, backgroundColor:item.svg.fill, marginRight: 20}}></View>
                    <Text style={{fontSize: 14, color:"#7a7a7a"}}>{item.label} ({item.value})</Text>
                </Text>
            ))
        }
        return (
            <View style={{flexDirection: "row", backgroundColor: "#eeeeee", borderColor: "#c7c7c7", borderWidth: 1, padding: 20}}>
                <View style={{flex: 2}}>
                    <PieChart
                        style={ { height: 150, width: 150 } }
                        data={ pieData }
                        innerRadius={ 0 }
                        valueAccessor={({item}) => item.value}
                    >
                    </PieChart>
                </View>
                <View style={{flex: 2}}>
                    <Labels />
                </View>
            </View>
        )
    }
}