import React from 'react';
import {Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack' ;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Homescreen from './Screens/Homescreen';
import Profilescreen from './Screens/Historyscreen';
import Searchscreen from './Screens/Searchscreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Historyscreen from './Screens/Historyscreen';

const Stack = createStackNavigator();
//basically we need to wrap a navigation contaier inside our main component
//main component 

const App:React.FC =() =>{
 const Tab = createBottomTabNavigator();
 return(
  <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Homescreen'>
      <Stack.Screen name="Homescreen" component={Homescreen}/>
      <Stack.Screen name="Historyscreen" component={Historyscreen}/>
      
    </Stack.Navigator>
     
      <Tab.Navigator
     screenOptions= {({route}) => ({
      tabBarIcon: ({focused, size, color}) => {
        let iconName;
        if (route.name === 'Home'){
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Profile'){
          iconName = focused ? 'face-man-profile' : 'profile' ;
        } else if (route.name === 'Search'){
          iconName = focused ? 'search' : 'search';
        } 
       return <Ionic name={iconName} color={color} size={size}/>
       
      },
     })}>
     
     
     <Tab.Screen name='Home' component={Homescreen}/>
     <Tab.Screen name='Profile' component={Profilescreen}/>
     <Tab.Screen name='Search' component={Searchscreen}/>
  </Tab.Navigator>
  </NavigationContainer>

  
  
 );
};

export default App;