import { textStyle } from "../../Common/Styles/text.style";
import colors from "../../Helper/Constants/colors.constants";

const { StyleSheet } = require("react-native");


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
        ...textStyle.centerWhite,
    }
});