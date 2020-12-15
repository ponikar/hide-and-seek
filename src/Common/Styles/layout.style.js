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
    },
    marginBottom: {
        marginBottom:10
    },
    flexRow: {
        flexDirection: "row"
    },
    flexHalf: {
        flex:1,
    },
    flexFull: {
        flex:2
    },
    commonPad: {
        padding:5
    }
});


// export const centerHV = {...layoutStyle.aic, ...layoutStyle.flex, ...layoutStyle.jcc};