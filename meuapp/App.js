import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

function App(){
  const [nome, setNome] = useState('Wesley');
  
  async function entrar(){
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      const nomeCompleto = `${data.results[0].name.firts} ${data.results[0].name.last}`;
      setNome(nomeCompleto);
    } catch (erro) {
      console.error('Erro ao bucar nome:', error);
    }
    
  }

  return (
    <View>
      <Button style={{ margin: 150 }} title="Mudar nome" onPress={entrar}></Button>
      <Text style={{ fontSize: 25, margin: 150 }}>{nome}</Text>

    </View>
  );
}

export default App;