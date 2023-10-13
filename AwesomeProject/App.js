import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import screen1 from "./Source/screen1"
import screen2 from "./Source/screen2"
import screen3 from "./Source/screen3"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="screen1" component={screen1}/>
        <Stack.Screen name="screen2" component={screen2}/>
        <Stack.Screen name="screen3" component={screen3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
