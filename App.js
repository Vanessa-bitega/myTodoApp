import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/form";
import AddTodo from "./components/addTodo";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "kill the kids", key: "1" },
    { text: "skin them", key: "2" },
    { text: "drink their blood", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 4) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text: text, key: Date.now() }];
      });
    } else {
      Alert.alert("OOPs!", "Todos must be over 4 chars long", [
        { text: "Understood" },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.form}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
              keyExtractor={(item) => item.key}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
    
    
  },
  form: {
    flex:1,
    marginTop: 20,
    backgroundColor:'pink'
  },
});
