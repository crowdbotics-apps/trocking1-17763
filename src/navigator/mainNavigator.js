import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile59905Navigator from '../features/UserProfile59905/navigator';
import Maps59886Navigator from '../features/Maps59886/navigator';
import Settings59864Navigator from '../features/Settings59864/navigator';
import Settings59849Navigator from '../features/Settings59849/navigator';
import NotificationList59848Navigator from '../features/NotificationList59848/navigator';
import Maps59847Navigator from '../features/Maps59847/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile59905: { screen: UserProfile59905Navigator },
Maps59886: { screen: Maps59886Navigator },
Settings59864: { screen: Settings59864Navigator },
Settings59849: { screen: Settings59849Navigator },
NotificationList59848: { screen: NotificationList59848Navigator },
Maps59847: { screen: Maps59847Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
