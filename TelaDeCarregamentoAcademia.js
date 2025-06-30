import 'react-native-url-polyfill/auto';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaDeCarregamentoAcademia = ({
  mensagem = "Carregando",
  destinoAoCompletar = 'VisaoGeral',
  duracao = 10000, 
  imagemUrl = 'https://i.postimg.cc/8CRjbJs6/ANAMNESE-FITNESS-1.png',
  corDeFundo = '#FFFFFF',
  corDoTexto = '#1a5757',
}) => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const translateYValue = useRef(new Animated.Value(-50)).current;
  const [loadingText, setLoadingText] = useState(mensagem);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev.endsWith('...')) return 'Carregando.';
        if (prev.endsWith('.')) return 'Carregando..';
        return 'Carregando...';
      });
    }, 1200);

    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 800,
        easing: Easing.spring,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 800,
        easing: Easing.easeInOut,
        useNativeDriver: true,
      }),
      Animated.timing(translateYValue, {
        toValue: 0,
        duration: 800,
        easing: Easing.easeOut,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      if (navigation && destinoAoCompletar) {
        navigation.replace(destinoAoCompletar);
      }
    }, duracao);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigation, destinoAoCompletar, duracao]);

  const animatedImageStyle = {
    transform: [{ scale: scaleValue }, { translateY: translateYValue }],
    opacity: opacityValue,
  };

  const animatedTextStyle = {
    opacity: opacityValue,
    transform: [{ translateY: translateYValue }],
  };

  return (
    <View style={[styles.container, { backgroundColor: corDeFundo }]}>
      <Animated.View style={[styles.imageContainer, animatedImageStyle]}>
        <Image source={{ uri: imagemUrl }} style={styles.image} resizeMode="contain" />
      </Animated.View>
      <Animated.Text style={[styles.mensagem, { color: corDoTexto }, animatedTextStyle]}>
        {loadingText}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 500,
    height: 300,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mensagem: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default TelaDeCarregamentoAcademia;
