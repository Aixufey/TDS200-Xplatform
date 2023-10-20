import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#8f9779",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 5,
        // borderColor: 'gold',
    },
    container: {
        flex: 1,
        width: "100%",
        borderColor: "gold",
        borderWidth: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonPrimary: {
        flexBasis: 50,
        paddingHorizontal: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#237ce1",
        color: "white",
    },
    buttonTakePicture: {
        borderRadius: 50,
        width: 70,
        height: 70,
        backgroundColor: `rgba(245,255,255,0.4)`,
    },
    title: {
        fontSize: 55,
        color: "black",
        fontFamily: "serif",
        fontStyle: "italic",
    },
    textWhite: {
        color: "white",
    },
    textBlack: {
        color: "black",
    },
});
