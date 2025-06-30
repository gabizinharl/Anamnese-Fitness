import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Anamnese = () => {
  const navigation = useNavigation();

  const perguntas = [
    { id: 'Exercício', texto: 'Você se exercita regularmente?' },
    { id: 'Alimentação', texto: 'Você tem uma alimentação equilibrada?' },
    { id: 'Sono', texto: 'Você dorme de 7 a 8 horas por noite?' },
    { id: 'Estresse', texto: 'Você lida bem com situações de estresse?' },
    { id: 'Lesões', texto: 'Você tem alguma lesão ou condição física atual?' },
    { id: 'Fumo', texto: 'Você fuma ou usa produtos derivados do tabaco?' },
    { id: 'Álcool', texto: 'Você consome álcool frequentemente?' },
    { id: 'Água', texto: 'Você bebe pelo menos 2L de água por dia?' },
    { id: 'Trabalho', texto: 'Seu trabalho exige esforço físico?' },
    { id: 'Saúde Mental', texto: 'Você se sente emocionalmente equilibrado no dia a dia?' },
  ];

  const opcoesResposta = {
    'Sim': 'Sim',
    'Não': 'Não'
  };

  const [respostas, setRespostas] = useState({});
  const [analise, setAnalise] = useState('');
  const [dicas, setDicas] = useState([]);

  const selecionarResposta = (id, resposta) => {
    setRespostas({ ...respostas, [id]: resposta });
  };

  const resetarRespostas = () => {
    setRespostas({});
    setAnalise('');
    setDicas([]);
  };

  const analisarPerfil = () => {
    const respostasArray = Object.values(respostas);
    const respostasPositivas = respostasArray.filter(r => r === 'Sim').length;

    if (respostasArray.length < perguntas.length) {
      setAnalise('Por favor, responda todas as perguntas.');
      return;
    }

    let resultado = '';
    if (respostasPositivas >= 7) {
      resultado = 'Seu perfil está excelente! Mantenha seus bons hábitos. Parabéns pela sua saúde!';
    } else if (respostasPositivas >= 4) {
      resultado = 'Você está indo bem, mas há espaço para melhorias.';
    } else {
      resultado = 'É importante buscar um estilo de vida mais saudável.';
    }

    setAnalise(resultado);
    setDicas(gerarDicas());
  };

  const salvarPerfil = async () => {
    try {
      const perfil = {
        respostas,
      };
      await AsyncStorage.setItem('perfil', JSON.stringify(perfil));
      navigation.navigate('Perfil'); 
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
    }
  };

  const gerarDicas = () => {
    let dicas = [];

    if (respostas.Exercício === 'Não') {
      dicas.push('A prática regular de exercícios físicos é fundamental para manter a saúde. Tente começar com atividades simples, como caminhadas ou alongamentos.');
    }
    if (respostas.Alimentação === 'Não') {
      dicas.push('Uma alimentação equilibrada é essencial para o bem-estar. Considere aumentar o consumo de frutas, vegetais e proteínas magras.');
    }
    if (respostas.Sono === 'Não') {
      dicas.push('Dormir pelo menos 7-8 horas por noite é importante para a saúde física e mental. Tente ajustar sua rotina para garantir um bom descanso.');
    }
    if (respostas.Estresse === 'Não') {
      dicas.push('Práticas de relaxamento como meditação, respiração profunda e yoga podem ajudar a reduzir o estresse.');
    }
    if (respostas.Fumo === 'Sim') {
      dicas.push('Fumar é um dos principais fatores de risco para várias doenças. Considerar parar de fumar é uma excelente escolha para melhorar sua saúde.');
    }
    if (respostas.Álcool === 'Sim') {
      dicas.push('O consumo excessivo de álcool pode ter impactos negativos na saúde. Tente reduzir gradualmente e explore atividades que não envolvam bebidas alcoólicas.');
    }
    if (respostas.Água === 'Não') {
      dicas.push('Manter-se hidratado é essencial para o funcionamento do corpo. Tente beber pelo menos 2L de água por dia.');
    }
    if (respostas.Trabalho === 'Não') {
      dicas.push('Se o seu trabalho exige esforço físico, isso pode ser uma boa oportunidade para manter-se em movimento e ativo durante o dia.');
    }

    return dicas;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Questionário de Saúde</Text>

      {perguntas.map((pergunta) => (
        <View key={pergunta.id} style={styles.perguntaContainer}>
          <Text style={styles.perguntaTexto}>{pergunta.texto}</Text>
          <View style={styles.opcoesObjetivoContainer}>
            <TouchableOpacity
              style={[styles.botaoOpcao, respostas[pergunta.id] === 'Sim' && styles.botaoSelecionado]}
              onPress={() => selecionarResposta(pergunta.id, 'Sim')}
            >
              <Text style={styles.textoOpcao}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.botaoOpcao, respostas[pergunta.id] === 'Não' && styles.botaoSelecionado]}
              onPress={() => selecionarResposta(pergunta.id, 'Não')}
            >
              <Text style={styles.textoOpcao}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {analise !== '' && (
        <View style={styles.analiseContainer}>
          <Text style={styles.textoAnalise}>{analise}</Text>
        </View>
      )}

      {dicas.length > 0 && (
        <View style={styles.dicasContainer}>
          <Text style={styles.dicasTitulo}>Dicas Personalizadas</Text>
          {dicas.map((dica, index) => (
            <Text key={index} style={styles.dicaTexto}>{dica}</Text>
          ))}
        </View>
      )}

      <View style={styles.botoesAcoes}>
        <TouchableOpacity style={styles.botaoAcaoAzul} onPress={analisarPerfil}>
          <Text style={styles.textoBotaoAcao}>ANALISAR PERFIL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcaoAzul} onPress={salvarPerfil}>
          <Text style={styles.textoBotaoAcao}>SALVAR E VER PERFIL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcaoAzul} onPress={() => navigation.navigate('VisaoGeral')}>
          <Text style={styles.textoBotaoAcao}>VOLTAR AO INÍCIO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcaoAmarelo} onPress={resetarRespostas}>
          <Text style={styles.textoBotaoAcao}>RESETAR RESPOSTAS</Text>
        </TouchableOpacity>
      </View>
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
  perguntaContainer: {
    marginBottom: 20,
  },
  perguntaTexto: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
  },
  opcoesObjetivoContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  botaoOpcao: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  botaoSelecionado: {
    backgroundColor: '#778899',
    borderColor: '#000000',
  },
  botoesAcoes: {
    marginTop: 30,
  },
  botaoAcaoAzul: {
    backgroundColor: '#1a5757',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  botaoAcaoAmarelo: {
    backgroundColor: '#FFB300',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  textoBotaoAcao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  analiseContainer: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  textoAnalise: {
    fontSize: 16,
    color: '#00796B',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dicasContainer: {
    marginTop: 20,
  },
  dicasTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796B',
  },
  dicaTexto: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  textoOpcao: {
    fontSize: 16,
    color: '#333',
  },
});

export default Anamnese;
