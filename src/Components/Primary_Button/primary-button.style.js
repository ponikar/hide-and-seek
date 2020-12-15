import colors from "../../Helper/Constants/colors.constants";

import { StyleSheet } from "react-native"


export const pribtnStyle = StyleSheet.create({
    container: {
        marginVertical:8,
        marginHorizontal: 20,
        paddingVertical:10,
        borderRadius:18,
        backgroundColor: colors.PRIMARY_COLOR,
        elevation:10,
        borderWidth:2,
        borderColor: "#fff"
    },
    text: {
        color: "#fff",
        textAlign: "center",  
    },
});