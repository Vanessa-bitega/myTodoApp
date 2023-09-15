import React,{useState} from "react";
import { StyleSheet, Text,TextInput, Button, View} from "react-native";


export default function AddTodo({submitHandler}) {
    const [todo, setTodo] = useState("");

    const changeHandler = (text) => {
        setTodo(text);
    }
    return(
        <View>
            <TextInput
            style={style.input}
                placeholder="new todo...."
                onChangeText={changeHandler}
            />
            <Button onPress={() =>submitHandler(todo)} title='add todo' color='coral'/>
        </View>
    )
}
const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        // fontSize: 18,
    }
})