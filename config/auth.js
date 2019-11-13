import User from '../mocks/user';
import { YellowBox, AsyncStorage } from 'react-native';
const user = new User();
class Auth {

    loginSubmit = (usrObj) => {
      return new Promise((resolve, reject) => {
          if (usrObj.email == user.email && usrObj.password == user.password){
              AsyncStorage.setItem("logado", "true");
              resolve(true);
          }
          reject(false);
      });
    }
    signOut = () => {
      return new Promise((resolve, reject) => {
        AsyncStorage.removeItem("logado").then(success => {
          resolve(true)
        }).catch(err => {
          reject(err)
        })
      })
    }
    isSignedIn = () => {
      return new Promise((resolve, reject) => {
        AsyncStorage.getItem("logado")
          .then(res => {
            if (res !== null) {
              resolve(true);
            } else {
              resolve(false);
            }
          })
          .catch(err => reject(err));
      });
    }

}

export default Auth;