import { StyleSheet } from 'react-native';


export const layoutStyle = StyleSheet.create({
    flex: {
        flex:1
    },
    jcc: {
        justifyContent: "center"
    },
    aic: {
        alignItems:"center"
    },
    container: {
        marginVertical:10,
        marginHorizontal:10
    }
});


export const centerHV = {...layoutStyle.aic, ...layoutStyle.flex, ...layoutStyle.jcc};