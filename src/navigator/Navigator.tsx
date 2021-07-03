import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { UsersScreen } from '../screens/UsersScreen';
import { StackNavigator } from './StackNavigator';
import { HomeScreen } from '../screens/HomeScreen';



const Drawer = createDrawerNavigator();

export const  Navigator = () => {
  const { width } = useWindowDimensions();

  
  return(
    <Drawer.Navigator  drawerType={ width >= 768 ? 'permanent' : 'front' }>
      <Drawer.Screen name="StackNavigator" options={{title: "Inicio"}}  component={ StackNavigator } />
      <Drawer.Screen name="UsersScreen"  options={{title: "Lista de Usuarios"}} component={UsersScreen} />
      {/* <Drawer.Screen name="HomeScreen" options={{title: "Inicio"}} component={HomeScreen} /> */}
    </Drawer.Navigator>
  );
}