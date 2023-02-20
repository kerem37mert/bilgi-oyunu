import { View, Text } from "react-native";
import styles from "./ContributorsItem.style";

const ContributorsItem = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    );
}

export default ContributorsItem;