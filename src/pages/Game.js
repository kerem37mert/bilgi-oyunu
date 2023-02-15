import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View, Modal, Pressable, Text, StyleSheet} from "react-native";
import Navbar from "../components/Navbar";
import Question from "../components/Question";
import Answer from "../components/Answer";
import CheckModal from "../components/CheckModal";
import GenerateQuestion from "../apis/GenerateQuestion";
import PlaySound from "../apis/PlaySound";
import PointUpdate from "../apis/PointUpdate";

const Game = (props) => {

    const HomeBack = () => {
        props.navigation.goBack();
    }

    const [data, setData] = useState(GenerateQuestion());
    const [point, setPoint] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalBGColor, setModalBGColor] = useState("");

    const onPress = useCallback((answr) => {
        if(answr == data.correctAnswer)
        {
            setPoint((prev) => prev + 10);
            setModalMessage("Doğru Cevap!");
            setModalBGColor("#00337C");
            PlaySound("win_effect.wav");
        }
        else
        {
            if(point > 0)
            {
                setPoint((prev) => prev - 10);
            }

            setModalMessage("Yanlış Cevap!");
            setModalBGColor("#13005A");
            PlaySound("lose_effect.wav");
        }

        setModalVisible(true);
    },[]);
    
    useEffect(() => {
        PointUpdate(point.toString());
    }, [point])
    

    const nextQuestion = () => {
        setData(GenerateQuestion());
        setModalVisible(false);
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
                <Answer data={data} onPress={onPress} />
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