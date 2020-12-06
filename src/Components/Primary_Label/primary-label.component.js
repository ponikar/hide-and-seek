import React from 'react'
import { Text, View } from 'react-native';
import { primaryLabelStyle } from './primary-label.style';



const PrimaryLabel = ({label = "label", large}) => (
    <View style={primaryLabelStyle.container}>
    <Text style={[primaryLabelStyle.textStyle, { fontSize: large ? 20 : 14 }]}> { label } </Text>
    </View>);


export default PrimaryLabel;