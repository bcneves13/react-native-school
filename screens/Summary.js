import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions } from 'react-native';
import MyBarChart from '../components/MyBarChart';
import MenuButton from '../components/MenuButton';
export default class Summary extends React.Component  {

    render() {
        return (
            <View>
                <MenuButton navigation={this.props.navigation}/> 
            </View>
        )
    }

}