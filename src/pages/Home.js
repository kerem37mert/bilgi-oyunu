import React, {useEffect} from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PlaySound from '../apis/PlaySound';
import DefaultSound from '../apis/DefaultSound';
import DefaultPoint from '../apis/DefaultPoint';

const Home = (props) => {

  const playClick = () => {
    props.navigation.navigate("GameScreen");

  }

  const settingsClick = () => {
    props.navigation.navigate("SettingsScreen");
  }

  const buttonOnPressIn = () => {
    PlaySound("home_click.wav");
  }
  
  //Sound default true
  useEffect(() => {
    DefaultSound();
    DefaultPoint();  
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={playClick} onPressIn={buttonOnPressIn}>
            <Text style={styles.buttonTxt}>Oyna</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={settingsClick} onPressIn={buttonOnPressIn}>
            <Text style={styles.buttonTxt}>Ayarlar</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#13005A",
    },
    titleContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    logo: {
      width: 300,
      height: 300
    },
    buttonContainer: {
      flex: 1,
      alignItems: "center",
    },
    button: {
      backgroundColor: "#03C988",
      width: 200,
      borderRadius: 40,
      marginTop: 20
    },
    buttonTxt: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
      padding: 20
    },

});

export default Home;