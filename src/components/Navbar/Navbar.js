import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Navbar.style";


const Navbar = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.startContainer} onPress={props.back}>
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