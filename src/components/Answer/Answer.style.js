import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    answerRow: {
        flex: 1,
        flexDirection: "row"
    },
    answer: {
        flex: 1,
        backgroundColor: "#00337C",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    text: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center"
    }
});