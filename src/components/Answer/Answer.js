import {memo} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Answer.style";
import RandomArray from "../../apis/RandomArray";

const Answer = (props) => {

    let data = [props.data.correctAnswer, props.data.answer1, props.data.answer2, props.data.answer3];

    let newArray = RandomArray(data);

    return(
        <View style={styles.container}>
            <View style={styles.answerRow}>
                <TouchableOpacity style={styles.answer} onPress={() => props.onPress(newArray[0])} disabled={props.disabled}>
                    <Text style={styles.text}>{newArray[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer} onPress={() => props.onPress(newArray[1])} disabled={props.disabled}>
                    <Text style={styles.text}>{newArray[1]}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.answerRow}>
                <TouchableOpacity style={styles.answer} onPress={() => props.onPress(newArray[2])} disabled={props.disabled}>
                    <Text style={styles.text}>{newArray[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer} onPress={() => props.onPress(newArray[3])} disabled={props.disabled}>
                    <Text style={styles.text}>{newArray[3]}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default memo(Answer);