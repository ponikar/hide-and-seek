
const { StyleSheet } = require("react-native");
const { layoutStyle } = require("../../Common/Styles/layout.style");


export const primaryLabelStyle = StyleSheet.create({
    container: {
       ...layoutStyle.container,
    },
    textStyle: {
        textAlign:"center",
    }
});

