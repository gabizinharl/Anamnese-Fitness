import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const Perfil = () => {
  const [perfil, setPerfil] = useState(null);
  const [imc, setImc] = useState(null);

  const carregarPerfil = async () => {
    try {
      const perfilSalvo = await AsyncStorage.getItem('perfil');
      const imcCalculado = await AsyncStorage.getItem('imc');
      
      if (perfilSalvo !== null) {
        setPerfil(JSON.parse(perfilSalvo));
      }
      
      if (imcCalculado !== null) {
        setImc(imcCalculado);
      }
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  };

  useEffect(() => {
    carregarPerfil();
  }, []);

  const renderResposta = (resposta) => {
    if (resposta === 'Sim') {
      return <Icon name="check" size={20} color="green" />;
    } else if (resposta === 'Não') {
      return <Icon name="times" size={20} color="red" />;
    } else {
      return <Text style={styles.respostaTexto}>{resposta}</Text>;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Seu Perfil</Text>

      {perfil ? (
        <View style={styles.perfilContainer}>
          <Text style={styles.subTitulo}>Respostas da Anamnese</Text>
          {Object.keys(perfil.respostas).map((chave) => (
            <View key={chave} style={styles.respostaContainer}>
              <Text style={styles.perguntaTexto}>{chave}</Text>
              <View style={styles.iconeContainer}>
                {renderResposta(perfil.respostas[chave])}
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.carregandoTexto}>Carregando seu perfil...</Text>
      )}

      {imc && (
        <View style={styles.imcContainer}>
          <Text style={styles.subTitulo}>Último IMC Calculado:</Text>
          <Text style={styles.imcTexto}>{imc}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFFA',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a5757',
    textAlign: 'center',
    marginBottom: 20,
  },
  perfilContainer: {
    marginTop: 20,
  },
  subTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a5757',
    marginBottom: 15,
  },
  respostaContainer: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
  },
  perguntaTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a5757',
    marginBottom: 5,
  },
  respostaTexto: {
    fontSize: 16,
    color: '#000000',
  },
  iconeContainer: {
    marginTop: 5,
  },
  carregandoTexto: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  imcContainer: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
  },
  imcTexto: {
    fontSize: 18,
    color: '#1a5757',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default Perfil;
