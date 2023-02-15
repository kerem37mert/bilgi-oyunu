import AsyncStorage from "@react-native-async-storage/async-storage";

const DefaultSound = async () => {
    try {
        if(await AsyncStorage.getItem("@sound") === null || AsyncStorage.getItem("@soundImg") === null) {
            try {
                await AsyncStorage.setItem("@sound", "true");
                await AsyncStorage.setItem("@soundImg", "volume.png");
              } catch (e) {
                console.log(e);
            }
        }
      } catch(e) {
        console.log(e)
      }
}

export default DefaultSound;