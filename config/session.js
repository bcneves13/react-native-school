import { AsyncStorage } from '@react-native-community/async-storage';
import { YellowBox } from 'react-native';

class Session {
    
    constructor(){
        this.is_logged = false;
    }

    saveData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            // Error saving data
            YellowBox.ignoreWarnings(['Warning: Error saving data']);
        }
    };
    
    getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (error) {
            YellowBox.ignoreWarnings(['Warning: No data']);
            return false;
        }
    };

    get is_logged(){
        this.getData('logged').then((result) => {
            this.is_logged = result;
        })
    }
}

export default Session;