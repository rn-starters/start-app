import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'));

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
