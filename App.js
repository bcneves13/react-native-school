import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createRootNavigator } from './router';


const App = createAppContainer(createRootNavigator());

export default App;


