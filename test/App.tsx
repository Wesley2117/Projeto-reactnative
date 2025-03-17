import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App contador</Text>

      <View style={styles.counterArea}>
        <TouchableOpacity>
          <Text> - </Text>
        </TouchableOpacity>

        <Text>{counter}</Text>

        <TouchableOpacity>
          <Text> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 14,
    fontWeight: 'bold'
  },
  counterArea:{
    flexDirection: 'row',
    gap: 14,
    marginTop: 14,
    marginBottom: 14,
  }
});
