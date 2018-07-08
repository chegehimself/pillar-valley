import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import tabBarIcon from './ExpoParty/components/tabBarIcon';
import AchievementScreen from './ExpoParty/screens/AchievementScreen';
import LeaderboardScreen from './ExpoParty/screens/LeaderboardScreen';
import ProfileScreen from './ExpoParty/screens/ProfileScreen';
import ReportScreen from './ExpoParty/screens/ReportScreen';
import GameScreen from './screens/GameScreen';
import Licenses from './components/Licenses';
const themedHeaderProps = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: Constants.manifest.primaryColor,
  },
  headerTitleStyle: { color: 'white' },
};

// const PartyTabNavigator = LeaderboardScreen;
const PartyTabNavigator = createMaterialBottomTabNavigator(
  {
    Leaderboard: {
      screen: LeaderboardScreen,
      navigationOptions: () => ({
        tabBarColor: '#2962ff',
        tabBarIcon: tabBarIcon('show-chart'),
      }),
    },
    Achievement: {
      screen: AchievementScreen,
      navigationOptions: () => ({
        tabBarColor: '#9013FE',
        tabBarIcon: tabBarIcon('star'),
      }),
    },
  },
  {
    shifting: true,

    initialRouteName: 'Leaderboard',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },

    mode: 'modal',
    title: Constants.manifest.name,
    cardStyle: {
      backgroundColor: 'transparent',
    },
  },
);

const ModalStack = createStackNavigator(
  {
    Game: GameScreen,
    Leaderboard: {
      screen: PartyTabNavigator,
      navigationOptions: {
        title: `Expo ${Constants.manifest.name}`,
      },
    },
    Licenses,
    Report: ReportScreen,
    Profile: ProfileScreen,
  },
  {
    navigationOptions: {
      ...themedHeaderProps,
    },
    initialRouteName: 'Game',
    // initialRouteName: 'Leaderboard',
    // mode: 'modal',
    // headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white',
    },
  },
);

export default ModalStack;
