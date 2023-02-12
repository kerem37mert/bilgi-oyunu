import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Navbar.style";
import PlaySound from "../../apis/PlaySound";

const Navbar = (props) => {

    const buttonOnPressIn = () => {
        PlaySound("home_click.wav");
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.startContainer} onPress={props.back} onPressIn={buttonOnPressIn}>
                <Text style={styles.startText}>Geri</Text>
            </TouchableOpacity>
            <View style={styles.centerContainer}>
                <Text style={styles.centerText}>{props.category}</Text>
            </View>
            <View style={styles.endContainer}>
                <Text style={styles.endText}>Puan: {props.point}</Text>
            </View>
        </View>
    );
}

export default Navbar;