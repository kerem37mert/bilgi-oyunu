import React from "react";
import { SafeAreaView, View, StyleSheet, FlatList, Text } from "react-native";
import SettingsNavbar from "../components/SettingsNavbar";
import ContributorsItem from "../components/ContributorsItem";
import contributorsdata from "../data/contributorsdata.json";

const Contributors = (props) => {

    const SettingsBack = () => {
        props.navigation.goBack();
    }

    const renderContributors = ({item}) => {
        return(
            <ContributorsItem>{item.name}</ContributorsItem>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
            <SettingsNavbar title="Katkıda Bulunanlar" back={SettingsBack} />
            <View style={styles.listContainer}>
                <FlatList 
                    data={contributorsdata} 
                    renderItem={renderContributors} 
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00337C",
        flex: 1
    },
    listContainer: {
        margin: 20
    }
});

export default Contributors;