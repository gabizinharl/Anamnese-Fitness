import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const TelaVisaoGeral = () => {
  const navigation = useNavigation();

  const destaques = [
    {
      id: 'anamnese',
      titulo: 'Questionário de Saúde',
      descricao: 'Responda para uma análise personalizada.',
      icone: <MaterialCommunityIcons name="comment-question-outline" size={40} color="#FF0000" />,
      navegacao: 'Anamnese',
    },
    {
      id: 'imc',
      titulo: 'Calculadora de IMC',
      descricao: 'Descubra seu Índice de Massa Corporal.',
      icone: <MaterialCommunityIcons name="scale-unbalanced" size={40} color="#228B22" />,
      navegacao: 'IMC',
    },
    {
      id: 'perfil',
      titulo: 'Seu Perfil',
      descricao: 'Visualize suas respostas e histórico.',
      icone: <Ionicons name="person-circle-outline" size={40} color="#4169E1" />,
      navegacao: 'Perfil',
    },
    {
      id: 'dicas',
      titulo: 'Dicas de Saúde',
      descricao: 'Artigos e recomendações para seu bem-estar.',
      icone: <MaterialCommunityIcons name="lightbulb-on-outline" size={40} color="#eeca06" />,
      navegacao: 'Dicas',
    },
    {
      id: 'sobre',
      titulo: 'Sobre o App',
      descricao: 'Saiba mais sobre o aplicativo.',
      icone: <Ionicons name="information-circle-outline" size={40} color="#2F4F4F" />,
      navegacao: 'Sobre',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloPrincipal}>Bem-vindo(a)!</Text>
      <Text style={styles.subTitulo}>Explore as funcionalidades:</Text>

      <View style={styles.destaquesContainer}>
        {destaques.map((destaque) => (
          <TouchableOpacity
            key={destaque.id}
            style={styles.cartaoDestaque}
            onPress={() => navigation.navigate(destaque.navegacao)}
          >
            {destaque.icone}
            <Text style={styles.tituloDestaque}>{destaque.titulo}</Text>
            <Text style={styles.descricaoDestaque}>{destaque.descricao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5FFFA' },
  tituloPrincipal: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a5757',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitulo: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  destaquesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cartaoDestaque: {
    backgroundColor: '#fff',
    width: '42%',
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tituloDestaque: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  descricaoDestaque: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default TelaVisaoGeral;