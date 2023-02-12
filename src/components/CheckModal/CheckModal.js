import { Modal, Pressable, View, Text} from "react-native";
import styles from "./CheckModal.style";

const CheckModal = (props) => {
    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.container}>
                <View style={[styles.box, {backgroundColor: props.bgColor}]}>
                <Text style={styles.message}>{props.message}</Text>
                <Pressable style={styles.nextButton} onPress={props.next}>
                    <Text style={styles.buttonText}>Sıradaki Soru</Text>
                </Pressable>
                <Pressable style={styles.homeButton} onPress={props.returnHome}>
                    <Text style={styles.buttonText}>Ana Sayfa</Text>
                </Pressable>
                </View>
            </View>
        </Modal>
    );
}

export default CheckModal;