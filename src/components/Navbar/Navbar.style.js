import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    startContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    startText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    centerContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    centerText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff"
    },
    endContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    endText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
});