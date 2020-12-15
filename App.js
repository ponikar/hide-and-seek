import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/Navigations/Auth/auth.navigation';


const App = () => {

  useEffect(() => {
   SplashScreen.hide();
  }, []);

  return(<NavigationContainer>
    <AuthNavigation />
  </NavigationContainer>);
}

export default App;
