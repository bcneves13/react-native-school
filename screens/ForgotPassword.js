import React from 'react';
import styles from '../styles/forgotpassword';
import {View, Text, TextInput, Button} from 'react-native';
import User from '../mocks/user';
const user = new User();
class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            resultDisplay: "none",
            resultResponse: ""
        };
    }
    handlerVerify = () => {
        this.setState({resultDisplay:"flex"});
        if(this.state.email == user.email){
            this.setState({resultResponse:`Sua senha é ${user.password}`});
        } else {
            this.setState({resultResponse:`Usuário ${this.state.email} não cadastrado.`});
        }
    }
    render() {
        return (
            <>
                <View style = {styles.container}>
                    <Text style={{fontSize:17}}> Endereco de Email: </Text>
                    <TextInput style = {styles.input}
                        placeholder="Email"
                        onChangeText= {(email) => {this.setState({email})}}
                        value={this.state.email}
                    />
                    <Button style ={styles.btm}
                        color="#cccccc"
                        onPress={this.handlerVerify}
                        title="Recuperar"/>
                </View>
                <View style = {{...styles.response, display: this.state.resultDisplay}}>
                    <Text style = {styles.response}>{this.state.resultResponse}</Text>
                </View>
            </>
        )
    }
}

export default ForgotPassword;
