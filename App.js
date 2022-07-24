import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { EventsScreen } from './Screens/EventsScreen';
import { BellScreen } from './Screens/BellScreen';
import { SearchScreen } from './Screens/SearchScreen';
import { InfoScreen } from './Screens/InfoScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Events') {
            iconName = 'ios-list';
          }
          else if (route.name === 'Bell') {
            iconName = 'ios-notifications';
          }
          else if (route.name === 'Search') {
            iconName = 'ios-search';
          }
          else if (route.name === 'Info') {
            iconName = 'ios-information-circle-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerTitle: () => {
          let tabTitle;
          if (route.name === 'Events') {
            tabTitle = 'Upcoming Events';
          }
          else if (route.name === 'Bell') {
            tabTitle = 'Bell Schedules';
          }
          else if (route.name === 'Search') {
            tabTitle = 'Staff List';
          }
          else if (route.name === 'Info') {
            tabTitle = 'Info and Settings';
          }
          return tabTitle;
        },
        tabBarActiveTintColor: 'dark-gray',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Bell" component={BellScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}