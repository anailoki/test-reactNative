import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { User } from '../interfaces/userInterfaces';

import { UserScreen } from '../screens/UserScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { UsersScreen } from '../screens/UsersScreen';
// import { Permissions } from '../screens/PermissionsScreen';

export type RootStackParams = {
    HomeScreen: undefined,
    UsersScreen: undefined,
    UserScreen: { simpleUser: User, gender: string},
    Permissions: undefined
  }

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: 'white'
        }
    }}>
      <Stack.Screen name="HomeScreen" options={{ title: 'Inicio' }} component={HomeScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen}  />
      <Stack.Screen name="UsersScreen" component={UsersScreen} />          
      {/* <Stack.Screen name="Permissions" component={Permissions} /> */}
    </Stack.Navigator>
  );
}
