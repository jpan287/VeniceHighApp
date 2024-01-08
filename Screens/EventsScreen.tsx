import { Text, View } from 'react-native';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions, } from 'react-swipeable-list';
//import 'react-swipeable-list/dist/styles.css';

export function EventsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Events!</Text>
        </View>
    );
}