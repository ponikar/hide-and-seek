import React from 'react'
import { Text, View } from 'react-native';
import { primaryLabelStyle } from './primary-label.style';



const PrimaryLabel = ({label = "label", large, infoColor, style}) => (
    <View style={primaryLabelStyle.container}>
    <Text style={[primaryLabelStyle.textStyle, { fontSize: large ? 20 : 13, color: infoColor ? "grey" : "black" },style]}> { label } </Text>
    </View>);


export default PrimaryLabel;