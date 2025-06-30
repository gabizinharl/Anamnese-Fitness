import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const estacioLogoUrl = 'https://imagensfree.com.br/wp-content/uploads/2019/12/logotipo-estacio-horizontal-com-sombra.jpg'; 

const SobreAppScreen = () => {
  const navigation = useNavigation();

  const navegarParaInicio = () => {
    navigation.goBack(); 
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Sobre o App Anamnese Fitness</Text>
      </View>
      <Text style={styles.paragrafo}>
        Este aplicativo foi desenvolvido com o objetivo de fornecer ferramentas e informações úteis para ajudar você a cuidar da sua saúde e bem-estar geral.
      </Text>
      <Text style={styles.paragrafo}>
        Aqui você encontrará funcionalidades como um questionário de saúde para uma análise personalizada, uma calculadora de Índice de Massa Corporal (IMC) para monitorar seu peso, um espaço para visualizar suas respostas e dicas de saúde para promover hábitos saudáveis.
      </Text>
      <Text style={styles.paragrafo}>
        Esperamos que este aplicativo seja um companheiro valioso na sua jornada em direção a uma vida mais saudável e equilibrada.
      </Text>
      <Text style={styles.versao}></Text>
      <View style={styles.desenvolvedoresContainer}>
        <Text style={styles.desenvolvedoresTitulo}>Desenvolvedores:</Text>
        <Text style={styles.desenvolvedor}>Gabriela Dos Santos Lima Diogo</Text>
        <Text style={styles.desenvolvedor}>Guilherme Marques Dos Santos</Text>
        <Text style={styles.desenvolvedor}>Carlos Victor Nogueira do Nascimento</Text>
        <Text style={styles.desenvolvedor}>Bianca Martins Lopes</Text>
        <Text style={styles.desenvolvedor}>Gabriel De Oliveira Martins</Text>
      </View>
      <View style={styles.orientadorContainer}>
        <Text style={styles.orientadorTitulo}>Orientador:</Text>
        <Text style={styles.orientadorNome}>Professor: Antonio Candido</Text>
      
      </View>
      <Text style={styles.autor}></Text>
      <View style={styles.buttonContainer}>
        <Button title="Voltar" onPress={navegarParaInicio} />
      </View>
      
      {/* Logo final */}
      <View style={styles.logoFinalContainer}>
        <Image source={{ uri: estacioLogoUrl }} style={styles.logoFinal} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, backgroundColor: '#F5FFFA' },
  contentContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center', 
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#1a5757', textAlign: 'center', marginBottom: 10 },
  paragrafo: { fontSize: 16, lineHeight: 24, marginBottom: 15, color: '#000000', textAlign: 'center' },
  versao: { fontSize: 14, color: '#000000', marginBottom: 15, textAlign: 'center' },
  autor: { fontSize: 14, color: '#000000', textAlign: 'center' },
  desenvolvedoresContainer: {
    marginTop: 25,
    width: '80%',
    alignItems: 'center',
  },
  desenvolvedoresTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a5757',
    marginBottom: 8,
    textAlign: 'center',
  },
  desenvolvedor: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 5,
    textAlign: 'center',
  },
  orientadorContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  orientadorTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a5757',
    marginBottom: 5,
  },
  orientadorNome: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: '80%',
  },
  logoPequenaContainer: {
    alignItems: 'center',
  },
  logoPequena: {
    width: 80,
    height: 25,
    resizeMode: 'contain',
  },
  logoFinalContainer: {
    marginTop: 30, 
    alignItems: 'center', 
  },
  logoFinal: {
    width: 150, 
    height: 50, 
    resizeMode: 'contain',
  },
});

export default SobreAppScreen;
