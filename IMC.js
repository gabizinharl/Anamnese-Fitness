import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function IMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState(null); 

  const calcularIMC = async () => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (!pesoNum || !alturaNum || alturaNum === 0) {
      Alert.alert('Erro', 'Digite peso e altura válidos.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcFormatado = imc.toFixed(2);

    try {
      await AsyncStorage.setItem('imc', JSON.stringify(imcFormatado));
      setResultadoIMC(imcFormatado); 
      Alert.alert('IMC Calculado', `Seu IMC é ${imcFormatado}`);
    } catch (error) {
      console.log('Erro ao salvar IMC:', error);
      Alert.alert('Erro', 'Falha ao salvar o IMC.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular IMC" onPress={calcularIMC} />

      {resultadoIMC && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>Seu IMC é: {resultadoIMC}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#F5FFFA' },
  titulo: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
  },
  resultadoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1a5757',
    borderRadius: 8,
  },
  resultadoTexto: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
