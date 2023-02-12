import React, { useCallback, useState } from "react";
import { SafeAreaView, View, Modal, Pressable, Text, StyleSheet} from "react-native";
import Navbar from "../components/Navbar";
import Question from "../components/Question";
import Answer from "../components/Answer";
import CheckModal from "../components/CheckModal";
import GenerateQuestion from "../apis/GenerateQuestion";

const Game = (props) => {

    const HomeBack = () => {
        props.navigation.goBack();
    }

    const [data, setData] = useState(GenerateQuestion());
    const [disabled, setDisabled] = useState(false);
    const [point, setPoint] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalBGColor, setModalBGColor] = useState("");

    const onPress = useCallback((answr) => {
        if(answr == data.correctAnswer)
        {
            setPoint(point+1);
            setModalMessage("Doğru Cevap!");
            setModalBGColor("#00337C");
        }
        else
        {
            setPoint(point-1);
            setModalMessage("Yanlış Cevap!");
            setModalBGColor("#13005A");
        }

        setDisabled(true);
        setModalVisible(true);
    },[]);

    const nextQuestion = () => {
        setData(GenerateQuestion());
        setModalVisible(false);
        setDisabled(false); 
    }
    

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.navContainer}>
                    <Navbar 
                        back={HomeBack} 
                        point={point} 
                        category={data.category}
                    />
                </View>
                <View style={styles.questionContainer}>
                    <Question data={data.question} />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Answer data={data} onPress={onPress} disabled={disabled} />
            </View>
            <CheckModal
                visible={modalVisible}
                message={modalMessage}
                bgColor={modalBGColor}
                returnHome={HomeBack}
                next={() => nextQuestion()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#13005A"
    },
    topContainer: {
        flex: 1
    },
    navContainer: {
        flex: 1,
    },
    questionContainer: {
        flex: 3,
    },
    bottomContainer: {
        flex: 1,
    }
});

export default Game;