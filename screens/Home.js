import React from 'react';
import Session from '../config/session';
import Auth from '../config/auth';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions } from 'react-native';
import MenuButton from '../components/MenuButton';
import styles from '../styles/home';
import MyPieChart from '../components/MyPieChart';
import Core from '../services/core';

const coreData = new Core();

export default class Home extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        const mainFoulsData = coreData.getStudantFouls();
        const subjectFouls = coreData.getSubjectFouls();
        return (
            <ScrollView>
                <MenuButton navigation={this.props.navigation}/>
                <StatusBar hidden />
                <View style = {styles.container}>
                    <Text style = {styles.title}>Presença(Horas)</Text>
                    <MyPieChart data={mainFoulsData}></MyPieChart>
                </View>

                <View style = {styles.container}>
                    <Text style = {styles.title}>Faltas(Dias)</Text>
                    <MyPieChart data={subjectFouls}></MyPieChart>
                </View>
                
            </ScrollView>
        );
    }
}