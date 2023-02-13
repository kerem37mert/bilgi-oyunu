import { TouchableOpacity, Text } from "react-native";
import styles from "./SettingItem.style";

const SettingItem = (props) => {
  return(
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default SettingItem;