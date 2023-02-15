import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SettingsNavbar from "../components/SettingsNavbar";
import PointBar from "../components/PointBar";

const Statistic = (props) => {

    const [point, setPoint] = useState("");

    const getPoint = async () => {
        const value = await AsyncStorage.getItem("@point");
        setPoint(value);
    }

    const settingsBack = () => {
        props.navigation.goBack();
    }

    useEffect(() => {
        getPoint();
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <SettingsNavbar title="İstatistikler" back={settingsBack} />
            <View style={styles.itemContainer}>
                <PointBar point={point} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00337C"
    },
    itemContainer: {
        margin: 20
    }
});

export default Statistic;