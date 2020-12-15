import React from 'react'
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { AuthNavigationConstant } from '../../Helper/Constants/navigation.constants';
import LoginWithEmail from '../../Pages/Auth/login-email-page/login-email.page';
import LoginWithPhone from '../../Pages/Auth/login-phone-page/login-phone.page';
import OTPInput from '../../Pages/Auth/OTP-input-page/otp-input.page';

const StackNavigator = createStackNavigator();

const AuthNavigation = () => {
    return(<StackNavigator.Navigator initialRouteName={AuthNavigationConstant.ENTER_OTP_SCREEN}>
        <StackNavigator.Screen component={LoginWithEmail} name={AuthNavigationConstant.LOGIN_WITH_EMAIL_SCREEN} />
        <StackNavigator.Screen component={LoginWithPhone} name={AuthNavigationConstant.LOGIN_WITH_PHONE_SCREEN} />
        <StackNavigator.Screen component={OTPInput} name={AuthNavigationConstant.ENTER_OTP_SCREEN} />
    </StackNavigator.Navigator>);
}


export default AuthNavigation;