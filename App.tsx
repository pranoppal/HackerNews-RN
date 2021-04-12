import 'react-native-gesture-handler';
import React, {Suspense} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/routes/appNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {ActivityIndicator, LogBox} from 'react-native';
import {StoreProvider} from 'easy-peasy';
import store from './src/store';

export default function App() {
  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Suspense fallback={<ActivityIndicator />}>
            <AppNavigator />
          </Suspense>
        </PaperProvider>
      </NavigationContainer>
    </StoreProvider>
  );
}
