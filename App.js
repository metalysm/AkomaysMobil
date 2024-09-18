import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import SettingScreen from './screens/SettingScreen';
import StatisticsScreen from './screens/StatisticsScreen'

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={MainScreen} />
//       <Drawer.Screen name="Settings" component={SettingScreen} />
//       <Drawer.Screen name="Statistics" component={StatisticsScreen} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen
//           name="Home"
//           component={DrawerNavigator}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="Stats" component={StatisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

