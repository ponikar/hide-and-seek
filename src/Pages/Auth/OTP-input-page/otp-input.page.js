import React from 'react'
import { StyleSheet, View } from 'react-native';
import { layoutStyle } from '../../../Common/Styles/layout.style';
import PrimaryButton from '../../../Components/Primary_Button/primary-button.component';
import PrimaryLabel from '../../../Components/Primary_Label/primary-label.component';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import colors from '../../../Helper/Constants/colors.constants';

const OTPInput = () => {

    return (<View style={[layoutStyle.flex,layoutStyle.commonPad]}>
        <PrimaryLabel large label="Verify Your Number" />
        { /* input text with country code */ }
            <OTPInputView
            codeInputFieldStyle={OTPStyle.fillStyle}
            codeInputHighlightStyle={OTPStyle.highlight}
            placeholderTextColor={colors.PRIMARY_COLOR}
            selectionColor={colors.PRIMARY_COLOR}
            onCodeFilled={code => console.log("OTP GOT", code)}
            onCodeChanged={code => console.log(code)} 
            style={[layoutStyle.flex,OTPStyle.container]} pinCount={4} />
        <PrimaryButton label="Continue" />
        <PrimaryLabel label="Resend Code?" />
    </View>)
}

const OTPStyle = StyleSheet.create({
    container: {
        alignSelf: "center",
        width:"80%",
        color:colors.PRIMARY_COLOR,
    },
    highlight: { borderColor: colors.PRIMARY_COLOR },
    fillStyle: { borderColor: colors.GREY_INFO_COLOR, color: "#000" }
});



export default OTPInput;