import React from "react";
import { StyleSheet, Text,TouchableOpacity} from "react-native";


export default function TodoItem({item, pressHandler}) {
return(
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
)
    
}
const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        // elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})
