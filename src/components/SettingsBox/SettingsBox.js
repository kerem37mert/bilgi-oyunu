import { TouchableOpacity, Image } from "react-native";
import styles from "./SettingsBox.style";

const SettingsBox = (props) => {

    const imgUrl = (props.image == "volume.png") ? require("../../assets/volume.png") : require("../../assets/mute.png");
    
    return(
        <TouchableOpacity style={styles.box} onPress={props.onPress}>
            <Image 
                source={imgUrl} 
                style={styles.image}
            />
        </TouchableOpacity>
    );
}

export default SettingsBox;