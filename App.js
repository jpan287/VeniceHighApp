import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator';
import Header from './components/Header';

export default function App() {
  const [curRoute, setCurRoute] = useState('Events');

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Header/>
      </View>
      <View style={{ flex: 24 }}>
        <TabNavigator/>
      </View>
    </NavigationContainer>
  );
}