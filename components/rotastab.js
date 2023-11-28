import * as React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//telas
import HomeScreen from './HomeScreen';
import BenScreen from './BenScreen';

//nome das telas
const HomeName = 'Home'; 
const BenName = 'Ben 10'; 

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={HomeName} screenOptions={{ headerShown: false }} >

        <Tab.Screen name={HomeName} component={HomeScreen} options = {{tabBarIcon:({color,size})=> <MaterialCommunityIcons name="home" color={color} size={size} />}}/>
        <Tab.Screen name={BenName} component={BenScreen} options = {{tabBarIcon:({color,size})=> <MaterialCommunityIcons name="watch-vibrate" color={color} size={size} />}}/>

      </Tab.Navigator>
    </NavigationContainer>  
  );
}
