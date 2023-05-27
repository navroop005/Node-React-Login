/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Buttons from './src/view/buttons';
import StartPage from './src/view/start_page';

AppRegistry.registerComponent(appName, () => StartPage);
