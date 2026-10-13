import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
       <TextInput style={styles.input}
       placeholder="Zadajte úlohu" />
      <Button title="ADD" />
      </View>
      <View style={styles.taskcontainer}>
      <Text style={styles.text}>UDALOSTI</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  input:{borderWidth:3,width:"80%",borderRadius:8},
  inputcontainer: {flex: 1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:"10"},
  taskcontainer: {flex: 3,borderTopWidth:3,margin:20},
  text:{padding:20},
});
