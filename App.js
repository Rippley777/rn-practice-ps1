import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home';
import Shows from './Shows';
import Contact from './Contact';
import TicketPurchase from './TicketPurchase';
import News from './News';
// import type {Node} from 'react';

const Stack = createStackNavigator();

// const App: () => Node = () => {
const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          headerMode='screen'
        >
          <Stack.Screen
            name='Home'
            options={{
              headerShown: false
            }}
          >
            {(props) => <Home {...props} username='sports fan' />}
          </Stack.Screen>
          <Stack.Screen
            name='Shows'
            component={Shows}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: { fontFamily: 'Ubuntu-Regular' }
            }}
          />
          <Stack.Screen
            name='Contact'
            component={Contact}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: { fontFamily: 'Ubuntu-Regular' },
              headerTitle: 'Contact Us'
            }}
          />
          <Stack.Screen
            name='Purchase'
            component={TicketPurchase}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: { fontFamily: 'Ubuntu-Regular' },
              headerTitle: 'Purchase Tickets'
            }}
          />
          <Stack.Screen 
            name='News'
            component={News}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
              headerTitle: 'Latest News'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
