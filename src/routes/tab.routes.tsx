import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import Home from '../screens/Home';
import IMCHistory from '../screens/IMCHistory';

interface tabBarIconProps {
  size: number;
  color: string;
}

const AppTab = createBottomTabNavigator();

function AuthRoutes() {
  const { theme } = useContext(ThemeContext);

  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.red,
        inactiveTintColor: theme.colors.erasedText,
        inactiveBackgroundColor: theme.colors.scndBackground,
        activeBackgroundColor: theme.colors.background,
        labelPosition: 'beside-icon',
        style: {
          height: 55,
          borderTopWidth: 1,
          borderTopColor: theme.colors.background,
        },
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }: tabBarIconProps) => (
            <MaterialIcons name="home" size={size} color={color} />
          )),
        }}
      />
      <AppTab.Screen
        name="List"
        component={IMCHistory}
        options={{
          tabBarIcon: (({ size, color }: tabBarIconProps) => (
            <MaterialIcons name="format-list-bulleted" size={size} color={color} />
          )),
        }}
      />
    </AppTab.Navigator>
  );
}
export default AuthRoutes;
