import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventsScreen } from './Screens/EventsScreen';
import { BellScreen } from './Screens/BellScreen';
import { SearchScreen } from './Screens/SearchScreen';
import { InfoScreen } from './Screens/InfoScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Events") {
              iconName = focused ? 'calendar-outline' : 'calendar'
            }
            else if (route.name === "Bell") {
              iconName = focused ? 'notifications-outline' : 'notifications-sharp'
            }
            else if (route.name === "Search") {
              iconName = focused ? 'search-outline' : 'search-sharp'
            }
            else if (route.name === "Info") {
              iconName = focused ? 'information-circle-outline' : 'information-circle-sharp'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Bell" component={BellScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
