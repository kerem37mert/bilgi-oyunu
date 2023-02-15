import AsyncStorage from "@react-native-async-storage/async-storage";

const SoundUpdate = async () => {
    const value = await AsyncStorage.getItem('@sound');

    if(value == "true")
    {
        await AsyncStorage.setItem('@sound', "false")
        await AsyncStorage.setItem('@soundImg', "mute.png");;
    }
    else
    {
        await AsyncStorage.setItem('@sound', "true");     
        await AsyncStorage.setItem('@soundImg', "volume.png");
    }
    
}

export default SoundUpdate;