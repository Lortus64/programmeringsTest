import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/home';
import PictureScreen from './components/picture';
import StateScreen from './components/state';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#AE43B6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#AC58AD',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15,
          marginBottom: 15
        },
        tabBarIconStyle: {display: 'none'},
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Picture" component={PictureScreen} />
        <Tab.Screen name="State" component={StateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
