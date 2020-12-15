import React from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements'
import { layoutStyle } from '../../../Common/Styles/layout.style'
import PrimaryButton from '../../../Components/Primary_Button/primary-button.component'
import PrimaryLabel from '../../../Components/Primary_Label/primary-label.component'
import loginEmailStyle from './login-email.style'


const LoginWithEmail = () => {

    return (<View style={[layoutStyle.flex, loginEmailStyle.container]}>
        <PrimaryLabel style={{ marginBottom: 25 }} large label="Login with email" />
        {/* input text */}
        <Input containerStyle={{ height:40 }} inputStyle={loginEmailStyle.inputStyle} placeholder="Enter your email" />
        <PrimaryLabel style={[layoutStyle.marginBottom, { position: "relative", top: -5 }]} infoColor label="We will email you the link to login" />

        <PrimaryButton label="SEND EMAIL" />
    </View>)
}

export default LoginWithEmail