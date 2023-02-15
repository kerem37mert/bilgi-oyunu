import { View, Text } from "react-native";
import styles from "./PointBar.style";

const PointBar = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>En Yüksek Puan: </Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.data}>{props.point}</Text>
            </View>
        </View>
    );
}

export default PointBar;