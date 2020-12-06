import React from 'react'
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { layoutStyle } from '../../Common/Styles/layout.style';
import { pribtnStyle } from './primary-button.style';



const PrimaryButton = ({ text="HERE" }) => {
    
    return <TouchableOpacity style={pribtnStyle.container}>
        <Text style={pribtnStyle.text}>{ text }</Text>
    </TouchableOpacity>
};


export default PrimaryButton;