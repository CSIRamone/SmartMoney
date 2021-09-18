/**
 * @format
 */
if (__DEV__) {
  import('./src/config/ReactotronConfig');
}

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './src/pages/Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
