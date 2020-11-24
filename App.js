import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SubScreen from './src/screens/SubScreens';

const navigator = createStackNavigator(
   {
      search: SearchScreen,
      subscreen: SubScreen,
   }, 
   {
      initialRouteName: 'search',
      defaultNavigationOptions: {
         title: 'Business Search'
      }
   }
);

export default createAppContainer(navigator);
