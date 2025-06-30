import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaDeCarregamentoAcademia from './TelaDeCarregamentoAcademia';
import TelaVisaoGeral from './TelaVisaoGeral';
import Anamnese from './Anamnese';
import IMC from './IMC';
import Perfil from './Perfil';
import Dicas from './Dicas';
import Sobre from './Sobre';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="TelaDeCarregamento">

      <Stack.Screen
        name="TelaDeCarregamento"
        component={TelaDeCarregamentoAcademia}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="VisaoGeral"
        component={TelaVisaoGeral}
        options={{ title: 'Visão Geral', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name="Anamnese"
        component={Anamnese}
        options={{ title: 'Anamnese', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="IMC"
        component={IMC}
        options={{ title: 'Calculadora de IMC', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ title: 'Seu Perfil', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Dicas"
        component={Dicas}
        options={{ title: 'Dicas de Saúde', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{ title: 'Sobre o App', headerTitleAlign: 'center' }}
      />

    </Stack.Navigator>
  );
}