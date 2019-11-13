import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MenuButton extends React.Component {
    render() {
        return (
            <Icon
                name = "bars"
                size={30}
                color = "#000000"
                style = {styles.icon}
                onPress = {() => this.props.navigation.toggleDrawer()}
            />
        )
    }
}
const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        top: 10,
        left: 10,
    }
})