import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { pribtnStyle } from './primary-button.style';



const PrimaryButton = ({ label = "Click here!", style }) => {

    return <TouchableOpacity onPress={_ => console.log("WORKING")} style={[pribtnStyle.container]}>
        <Text style={[pribtnStyle.text,style]}> { label }  </Text>
    </TouchableOpacity>;
}


export default PrimaryButton;