import AsyncStorage from "@react-native-async-storage/async-storage";

const PointUpdate = async (value) => {
    const maxPoint = await AsyncStorage.getItem('@point');

    if(Number(value) >= maxPoint){
        await AsyncStorage.setItem('@point', value);
    }
}

export default PointUpdate;