import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createSwitchNavigator } from 'react-navigation';
import { ActivityIndicator, View, StatusBar } from "react-native";
import Auth from './config/auth';
// import { Icon } from 'react-native-elements'
import Home from "./screens/Home";
import Summary from "./screens/Summary";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";

const auth = new Auth();
const headerStyle = {
    height: 0
}

export class AuthVerify extends React.Component {
    componentDidMount() {
        this._verifyAsync();
    }
    _verifyAsync = async () => {
        auth.isSignedIn().then((result) => {
            if(result) {
                this.props.navigation.navigate("Logado");
            } else {
                this.props.navigation.navigate("Deslogado");
            }
        })
    }
    render() {
        return (
            <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator />
                <StatusBar hidden/>
            </View>
        )
    }
}

export const Deslogado = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                headerStyle
            }
        },
        ForgotPassword:{
            screen: ForgotPassword,
            navigationOptions: {
                title: "Esqueci a senha",
            }
        },
    }, {
        defaultNavigationOptions : {
            header: null,
            tabBarVisible: false,
        }
    }
)

export const Logado = createDrawerNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Dashboard"
            }
        },
        MathPage: {
            screen: Summary,
            params: {subject: "Math"},
            navigationOptions: {
                title: "Matemática"
            }
        },
        HistoryPage: {
            screen: Summary,
            params: {subject: "History"},
            navigationOptions: {
                title: "História"
            }
        },
        PortuguesePage: {
            screen: Summary,
            params: {subject: "Portuguese"},
            navigationOptions: {
                title: "Português"
            }
        },
        Profile :{
            screen: Profile
        }
    }
)

export const createRootNavigator = () => {
    return createSwitchNavigator(
        {   
            Verify: AuthVerify,
            Logado: Logado,
            Deslogado: Deslogado
        },
        {
         initialRouteName: "Verify"
        }
    );
};