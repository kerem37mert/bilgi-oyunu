import AsyncStorage from "@react-native-async-storage/async-storage";

const DefaultPoint = async () => {
    try{
        if(await AsyncStorage.getItem("@point") === null) {
            try {
                await AsyncStorage.setItem("@point", "0");
              } catch (e) {
                console.log(e);
            }
        }
    }catch(e){
        console.log(e);
    }
}

export default DefaultPoint;