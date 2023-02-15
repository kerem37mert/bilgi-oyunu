import { TouchableOpacity, Image } from "react-native";
import styles from "./StatisticBox.style";

const StatisticBox = (props) => {
    
    return(
        <TouchableOpacity style={styles.box} onPress={props.onPress}>
            <Image 
                source={require("../../assets/graph.png")} 
                style={styles.image}
            />
        </TouchableOpacity>
    );
}

export default StatisticBox;