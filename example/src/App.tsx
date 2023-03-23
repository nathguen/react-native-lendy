import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Colors } from 'react-native-lendy';

import ScreenNames from './constants/screenNames';
import ButtonScreen from './screens/Button';
import Home from './screens/Home';
import InputScreen from './screens/Input';
import ScreenTabsScreen from './screens/ScreenTabs';
import TextScreen from './screens/Text';
import WrapperScreen from './screens/Wrapper';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={() => ({
          headerTintColor: Colors.Dark,
          headerStyle: {
            backgroundColor: Colors.Yellow,
          },
          drawerStyle: {
            backgroundColor: Colors.Dark,
          },
          drawerItemStyle: {
            backgroundColor: Colors.Dark,
          },
          drawerActiveTintColor: Colors.Yellow,
          drawerInactiveTintColor: Colors.White,
        })}
      >
        <Drawer.Screen
          name={ScreenNames.Home}
          component={Home}
          options={{
            title: 'Lendy Components Library',
          }}
        />
        <Drawer.Screen
          name={ScreenNames.Text}
          component={TextScreen}
          options={{
            title: 'Text',
          }}
        />
        <Drawer.Screen
          name={ScreenNames.ScreenTabs}
          component={ScreenTabsScreen}
          options={{
            title: 'Screen Tabs',
          }}
        />
        <Drawer.Screen
          name={ScreenNames.Button}
          component={ButtonScreen}
          options={{
            title: 'Button',
          }}
        />
        <Drawer.Screen
          name={ScreenNames.Input}
          component={InputScreen}
          options={{
            title: 'Input',
          }}
        />
        <Drawer.Screen
          name={ScreenNames.Wrapper}
          component={WrapperScreen}
          options={{
            title: 'Wrapper',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
