import React, { useCallback } from "react";
import { SafeAreaView, View, Linking, StyleSheet } from "react-native";
import SettingsNavbar from "../components/SettingsNavbar";
import SettingItem from "../components/SettingItem";

const Settings = (props) => {

    const HomeBack = () => {
        props.navigation.goBack();
    }

    const  goLink = (url) => {
        Linking.openURL(url);
    }

    return(
        <SafeAreaView style={styles.container}>
            <SettingsNavbar back={HomeBack} />
            <View style={styles.itemContainer}>
                <SettingItem onPress={() => goLink("https://google.com")}>Soru Oluştur</SettingItem>
                <SettingItem>Yardım</SettingItem>
                <SettingItem>Gizlilik Politikası</SettingItem>
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

export default Settings;