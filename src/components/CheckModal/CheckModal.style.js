import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    box: {
        backgroundColor: "green",
        borderRadius: 20
    },
    message: {
        color: "#fff",
        fontSize: 18,
        margin: 20
    },
    nextButton: {
        backgroundColor: "#03C988",
        padding: 10,
        alignItems: "center",
        fontSize: 16,  
    },
    buttonText: {
        color: "#fff"
    },
    homeButton: {
        backgroundColor: "#03C988",
        padding: 10,
        alignItems: "center",
        fontSize: 16, 
        borderBottomStartRadius: 20,
        borderBottomEndRadius:  20
    },
});
