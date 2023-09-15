import { useState } from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>My Todos</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "coral",
        paddingTop: 38,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        height:80
    },
    headerText: {
        color: "#fff",
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold'
    }
})