import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import PrimaryButton from './src/Components/Primary_Button/primary-button.component';
import PrimaryLabel from './src/Components/Primary_Label/primary-label.component';
const App = () => {

  useEffect(() => {
   SplashScreen.hide();
  }, []);

  return <View>
    <PrimaryLabel large label="Login with Email" />
    <PrimaryLabel label="Login with Email" />
    <PrimaryButton />
    <PrimaryButton />

  </View>;
}

export default App;
