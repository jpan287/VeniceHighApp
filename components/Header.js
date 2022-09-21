import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export function Header() {
  const eventHelp = "Event Page \nView upcoming events at school. \nSwipe from left to right on an event to save it to your calendar or to add an alert. \nAlerts will send a notification at the time of the event, or at 7:00 am for all-day events.";
  const bellHelp = "Bell Page \nView all of the current school bell schedule. \nA timer will appear at the top of the page during school hours indicating the time left in the period or passing period. \nSchedules for finals and parent conference days are visible the day they occur.";
  const searchHelp = "Search Page \nFind a specific school staff member or room. \nUtilize the search bar for quick results."
  const infoHelp = "Info Page \nView the website, get directions, and call the school. \nYou can change the app's theme, event calendar, and show/hide periods 0 and 7."
  
  let tabTitle;
  if (routeName === 'Events') {
    tabTitle = 'Upcoming Events';
  }
  else if (routeName === 'Bell') {
    tabTitle = 'Bell Schedules';
  }
  else if (routeName === 'Search') {
    tabTitle = 'Staff List';
  }
  else if (routeName === 'Info') {
    tabTitle = 'Info and Settings';
  }

  return (
    <View style={{flexDirection: "column"}}>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={() => {
          if (cur_route === "Events") alert(eventHelp)
          else if (cur_route === "Bell") alert(bellHelp)
          else if (cur_route === "Search") alert(searchHelp)
          else if (cur_route === "Info") alert(infoHelp)
          else { 
            alert("Error");
            print(cur_route); 
          } 
          }} >
          <Ionicons size={40} name='ios-help-circle-outline'/>
        </TouchableOpacity>
      </View>
      <Text>tabTitle</Text>
    </View>
  );
}