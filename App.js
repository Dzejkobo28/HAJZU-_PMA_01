import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import TaskItem from "./src/components/TaskItem";

export default function App() {
  const [text, setText] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleInputText(text) {
    setText(text);
  }

  function handleAddItem() {
    if (text.trim() !== "") {
      setTaskList([...taskList, text]);
      setText("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="Zadaj úlohu..."
        />

        <Button onPress={handleAddItem} title="ADD" />
      </View>

      <FlatList
        data={taskList}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => item.id}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 3,
    width: "80%",
    borderRadius: 8,
  },
});