import React from 'react'
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { layoutStyle } from '../../../Common/Styles/layout.style';
import PrimaryButton from '../../../Components/Primary_Button/primary-button.component';
import PrimaryLabel from '../../../Components/Primary_Label/primary-label.component';
import loginEmailStyle from '../login-email-page/login-email.style';


const LoginWithPhone = () => {

    return(
        <View style={layoutStyle.flex}>
            <PrimaryLabel large label="Verify Your Number" />
            <PrimaryLabel label="when you tap continue ...." />
            { /* input text with country code */ }
            <View style={[layoutStyle.flexRow]}>
                <View style={layoutStyle.flexHalf} />
                    <View style={layoutStyle.flexFull}>
                    <Input keyboardType="numeric" containerStyle={{ height:40 }} inputStyle={loginEmailStyle.inputStyle} placeholder="Enter your email" />
                    </View>
                </View>
            <PrimaryButton label="Continue" />
        </View>
    );
}

export default LoginWithPhone;