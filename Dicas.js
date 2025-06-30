import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Objetivo = () => {
  const [objetivo, setObjetivo] = useState('');
  const [conselho, setConselho] = useState('');

 
  const mostrarConselho = (objetivoEscolhido) => {
    setObjetivo(objetivoEscolhido);

    let conselho = '';

    switch (objetivoEscolhido) {
      case 'Perder Peso':
        conselho = 'Para perder peso de forma saudável, é essencial adotar uma dieta hipocalórica combinada com exercícios aeróbicos (como corrida, caminhada e natação) para queimar gordura. Profissionais de saúde recomendam reduzir de forma gradual a ingestão de calorias e aumentar a prática de atividade física para melhorar o metabolismo e alcançar resultados sustentáveis. Lembre-se de consultar um nutricionista para um plano alimentar adequado, sem recorrer a dietas extremamente restritivas ou mal planejadas.';
        break;
      case 'Ganhar Massa':
        conselho = 'Para ganhar massa muscular, é necessário consumir um superávit calórico e focar em uma dieta rica em proteínas e carboidratos. Além disso, os treinos de força (como musculação e levantamento de peso) devem ser parte central da rotina. Segundo especialistas em musculação, a recuperação muscular é fundamental, então dormir o suficiente e evitar treinar os mesmos músculos todos os dias são práticas recomendadas. Além disso, considere o uso de suplementos, como creatina ou proteínas, mas sempre com orientação profissional.';
        break;
      case 'Melhorar a Saúde':
        conselho = 'Para melhorar a saúde de maneira geral, adotar um estilo de vida equilibrado é fundamental. Isso inclui uma alimentação variada com frutas, vegetais, proteínas magras e grãos integrais. Os exercícios regulares (ao menos 150 minutos de atividade física moderada por semana) são essenciais para a saúde cardiovascular, muscular e mental. Consultar um médico ou nutricionista para exames regulares e ajustes na alimentação é importante para prevenir doenças crônicas. Além disso, práticas de bem-estar mental, como meditação, yoga ou atividades relaxantes, são recomendadas para reduzir o estresse e melhorar a qualidade de vida.';
        break;
      default:
        conselho = 'Escolha um objetivo para receber um conselho detalhado.';
    }

    setConselho(conselho);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Qual é o seu objetivo?</Text>

      <View style={styles.opcoesContainer}>
        <TouchableOpacity
          style={styles.botaoOpcao}
          onPress={() => mostrarConselho('Perder Peso')}
        >
          <Text style={styles.textoOpcao}>Perder Peso</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoOpcao}
          onPress={() => mostrarConselho('Ganhar Massa')}
        >
          <Text style={styles.textoOpcao}>Ganhar Massa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoOpcao}
          onPress={() => mostrarConselho('Melhorar a Saúde')}
        >
          <Text style={styles.textoOpcao}>Melhorar a Saúde</Text>
        </TouchableOpacity>
      </View>

      {objetivo !== '' && (
        <View style={styles.conselhoContainer}>
          <Text style={styles.conselhoTexto}>
            <Text style={styles.conselhoTitulo}>Conselho para {objetivo}:</Text>{'\n'}
            {conselho}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FFFA',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a5757',
    marginBottom: 30,
  },
  opcoesContainer: {
    marginBottom: 30,
  },
  botaoOpcao: {
    backgroundColor: '#1a5757',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: 250,
    alignItems: 'center',
  },
  textoOpcao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  conselhoContainer: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  conselhoTexto: {
    fontSize: 16,
    color: '#1a5757',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  conselhoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a5757',
  },
});

export default Objetivo;
