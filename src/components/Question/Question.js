import { View, Text } from "react-native";
import styles from "./Question.style";

const Question = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.data}</Text>
        </View>
    );
}

export default Question;