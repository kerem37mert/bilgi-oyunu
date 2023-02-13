import { View, TouchableOpacity, Text } from "react-native";
import styles from "./SettingsNavbar.style";
import PlaySound from "../../apis/PlaySound";

const SettingsNavbar = (props) => {

    const buttonOnPressIn = () => {
        PlaySound("home_click.wav");
    }

    return(
        <View style={styles.container}>
            <View style={styles.startContainer}>
                <TouchableOpacity style={styles.returnButton} onPress={props.back} onPressIn={buttonOnPressIn}>
                    <Text style={styles.returnText}>Geri Dön</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.endContainer}>
                <Text style={styles.endText}>Ayarlar</Text>
            </View>
        </View>
    );
}

export default SettingsNavbar;