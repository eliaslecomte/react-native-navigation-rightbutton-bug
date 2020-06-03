import {Navigation} from 'react-native-navigation';
import {EXAMPLE} from './screens/example/ids';
import ExampleContainer from './screens/example/ExampleContainer';

export const registerScreens = () => {
  Navigation.registerComponent(EXAMPLE, () => ExampleContainer);
};
