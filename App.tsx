import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { Permission } from 'react-native-permissions';
import { PermissionsProvider } from './src/context/PermissionsContext';
import { store } from './src/store/store';

const AppState = ({ children}: any) =>{

  return  (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppState>
          <Navigator />
        </AppState>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
