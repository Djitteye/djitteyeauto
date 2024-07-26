import React from 'react';
import { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Bienvenue = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('connexion');
    }, 3000); // 3000 ms = 3 secondes

    return () => clearTimeout(timer); // Nettoie le timer si le composant est démonté
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/blanc.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Djitteye auto service</Text>
      <Text style={styles.subtitle}>
        Parcourez notre sélection exceptionnelle pour trouver la voiture de vos rêves.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={() => navigation.navigate('connexion')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={() => navigation.navigate('inscription')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Home" onPress={() => navigation.navigate('index')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 70,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 70,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

export default Bienvenue;
