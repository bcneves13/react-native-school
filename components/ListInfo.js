import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ListInfo extends React.Component {

    _contructList = () => {
        let list = [];
        list = this.props.listObj.map(item => (
            <View style = {styles.listItem}>
                <View style = {styles.parentText}>
                    <Text style ={styles.itemLabel}>{item.label}</Text>
                    <Text style = {styles.itemValue}>{item.value}</Text>
                </View>
            </View>
        ));
        return list;
    }
    render() {
        return (
            <>
            {this._contructList()}
            </>
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        marginTop: 30,
        height: 30,
        width: "100%",
        borderBottomColor: "#000000",
        borderBottomWidth: 1,   
    },
    parentText: {
        width: " 80%",
        flexDirection: "row",
        paddingLeft: 20
    },
    itemLabel: {
        color: "#000000"
    },
    itemValue: {
        marginLeft: 30
    }
});