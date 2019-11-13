import React from 'react';
import Auth from '../config/auth';
import User from '../mocks/user';
import { View, Text, Button, StatusBar, Alert, Card, TouchableHighlight } from 'react-native';
import MenuButton from '../components/MenuButton';
import ListInfo from '../components/ListInfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/profile';
const user = new User();
const auth = new Auth();
class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.initials = user.name.split(" ");
        this.initials = `${this.initials[0][0]} ${this.initials[1][0]}`;
    }

    handlerLogout = () => {
        auth.signOut().then(result => {
            this.props.navigation.navigate("Deslogado");
        }).catch(err => {
            Alert.alert(err.message);
        })
    }

    render() {
        return (
            <View style = {styles.container}>
                <StatusBar hidden />
                <MenuButton navigation={this.props.navigation}/>
                <View style = {styles.logoName}>
                    <Text style = {styles.logoNameText}>{this.initials}</Text>
                </View>
                <ListInfo listObj={user.getData()}/>
                <TouchableHighlight style={styles.logoutButton} onPress = {this.handlerLogout}>
                    <View>
                        <Text style={{fontSize: 20}}>Sair <Icon name="sign-out" size={15} color="black"></Icon></Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Profile;