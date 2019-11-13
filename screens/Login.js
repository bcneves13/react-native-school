import React from 'react';
import { Text, View, TextInput, Button, StatusBar, Alert, Image } from 'react-native';
import styles from '../styles/login';
import Auth from '../config/auth';
const authService = new Auth();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handlerLogin = () => {
        if (this.state.email != "" && this.state.password != ""){
            authService.loginSubmit({"email": this.state.email, "password": this.state.password}).then(
                (result) => this.props.navigation.navigate('Home')
            ).catch(err => {
                Alert.alert(
                    'Usuário ou senha incorreta',
                    'Tente novamente ou peça seu cadastro'
                    )
            })
        }
    }
    render() {
        return (
            <View style = {styles.container}>
                <StatusBar hidden />
                <Image source={require('../images/login.png')} />
                <Text style = {{fontSize: 24, fontFamily: "Roboto", margin: 20}}>School Project</Text>
                <TextInput 
                    style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Digite seu email"
                    textContentType = "emailAddress"
                    autoCapitalize = "none"
                    onChangeText={(email) => this.setState({email})}
                    value ={this.state.email}
                    onSubmitEditing ={this.handlerLogin}
                    />
    
                <TextInput
                    style ={styles.input}
                    underlineColorAndroid = "transparent"
                    textContentType = "password"
                    secureTextEntry ={true}
                    placeholder = "Digite sua senha"
                    autoCapitalize = "none"
                    onChangeText={(password) => this.setState({password})}
                    value ={this.state.password}
                    onSubmitEditing ={this.handlerLogin}
                    />
                <View style = {{flex: 1, width: 250}}>
                    <Button
                        style = {styles.submitButton}
                        title = "Entrar"
                        onPress={this.handlerLogin}/>
                    <Text
                        onPress={()=> {this.props.navigation.navigate('ForgotPassword')}}
                        style = {styles.forgotPassword}>
                        Esqueci a senha</Text>
                </View>
                
            </View>
        );
    }
}
export default Login;