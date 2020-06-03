import {Navigation} from 'react-native-navigation';
import {registerScreens} from './ui';
import {EXAMPLE} from './screens/example/ids';

function launchUI() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: EXAMPLE,
            },
          },
        ],
      },
    },
  });
}

function bootstrap() {
  let hasLaunched = false;
  const onAppLaunched = async () => {
    if (!hasLaunched) {
      hasLaunched = true;

      registerScreens();
      launchUI();
    } else {
      launchUI();
    }
  };
  Navigation.events().registerAppLaunchedListener(onAppLaunched);
}

export default bootstrap;
