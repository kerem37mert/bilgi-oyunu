import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Linking, StyleSheet } from "react-native";
import SettingsNavbar from "../components/SettingsNavbar";
import SettingItem from "../components/SettingItem";
import SettingsBox from "../components/SettingsBox";
import StatisticBox from "../components/StatisticBox";
import SoundUpdate from "../apis/SoundUpdate";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = (props) => {

    const [imgName , setImgName] = useState("");

    const getSoundImg = async () => {
        try {
          const value = await AsyncStorage.getItem('@soundImg')
          if(value !== null) {
            setImgName(value);
          }  
          
        }  catch (e){
          console.error(e);
        }
    }

    useEffect(() => {
        getSoundImg();
    }, []);
      
    const HomeBack = () => {
        props.navigation.goBack();
    }

    const  goLink = (url) => {
        Linking.openURL(url);
    }

    const changeSound = async () => {
        await SoundUpdate();
        await getSoundImg();
    }

    const statisticClick = () => {
        props.navigation.navigate("StatisticScreen");
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <SettingsNavbar title="Ayarlar" back={HomeBack} />
            <View style={styles.boxContainer}>
                <SettingsBox image={imgName} onPress={changeSound} />
                <StatisticBox onPress={statisticClick} />
            </View>
            <View style={styles.itemContainer}>
                <SettingItem onPress={() => goLink("https://google.com")}>Soru Oluştur</SettingItem>
                <SettingItem onPress={() => goLink("https://google.com")}>Yardım</SettingItem>
                <SettingItem onPress={() => goLink("https://google.com")}>Gizlilik Politikası</SettingItem>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00337C",
    },
    itemContainer: {
        margin: 20
    },
    boxContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "space-evenly",
        flexDirection: "row"
    }
});

export default Settings;