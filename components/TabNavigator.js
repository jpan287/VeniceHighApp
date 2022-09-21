import { TouchableOpacity, Alert } from 'react-native';
import { EventsScreen } from '../screens/EventsScreen';
import { BellScreen } from '../screens/BellScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { InfoScreen } from '../screens/InfoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const eventsHelp = "View upcoming events at school. \nSwipe from left to right on an event to save it to your calendar or to add an alert. \nAlerts will send a notification at the time of the event, or at 7:00 am for all-day events.";
  const bellHelp = "View all of the current school bell schedule. \nA timer will appear at the top of the page during school hours indicating the time left in the period or passing period. \nSchedules for finals and parent conference days are visible the day they occur.";
  const searchHelp = "Find a specific school staff member or room. \nUtilize the search bar for quick results."
  const infoHelp = "View the website, get directions, and call the school. \nYou can change the app's theme, event calendar, and show/hide periods 0 and 7."

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
        
        tabBarActiveTintColor: 'dark-gray',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Events" component={EventsScreen} 
        options={{
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => Alert.alert("Events Page", eventsHelp)}>
              <Ionicons size={40} name='ios-help-circle-outline'/>
            </TouchableOpacity>
          ),
          headerRight: (props) => (
            <TouchableOpacity>
              <Ionicons size={40} name='ios-calendar-outline'/>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Bell" component={BellScreen} 
        options={{
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => Alert.alert("Bell Page", bellHelp)}>
              <Ionicons size={40} name='ios-help-circle-outline'/>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} 
        options={{
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => Alert.alert("Search Page", searchHelp)}>
              <Ionicons size={40} name='ios-help-circle-outline'/>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Info" component={InfoScreen} 
        options={{
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => Alert.alert("Info Page", infoHelp)}>
              <Ionicons size={40} name='ios-help-circle-outline'/>
            </TouchableOpacity>
          ),
          headerRight: (props) => (
            <TouchableOpacity>
              <Ionicons size={40} name='ios-information-circle-outline'/>
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}