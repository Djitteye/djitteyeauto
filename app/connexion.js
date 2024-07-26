import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

const Connexion = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Insérer ici la logique de connexion (envoi des données au backend, etc.)
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Réinitialisation des champs après la connexion
    setPhoneNumber('');
    setPassword('');
    // Redirection vers la page bienvenue après connexion
    navigation.navigate('Bienvenue');
  };

  const handleForgotPassword = () => {
    // Insérer ici la logique pour gérer le lien "Mot de passe oublié ?"
    console.log('Forgot Password');
  };

  const handleSignUp = () => {
    // Redirection vers la page d'inscription
    navigation.navigate('Inscription');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/gris.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Connectez-vous!</Text>
      
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#999" style={styles.icon} />
        <TextInput 
          style={styles.input}
          placeholder="Téléphone"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <Text style={styles.optionsText}>Se souvenir de moi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.optionsText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Vous n'avez pas de compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('inscription')}>
          <Text style={styles.signUpLink}>Inscrivez-vous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f3f3',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    width: '100%',
    height: 54,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    padding: 10,
    color: 'black',
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionsText: {
    paddingLeft: 25,
    color: 'black',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FD6A00',
    width: 168,
    padding: 10,
    borderRadius: 30,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: 'black',
  },
  signUpLink: {
    color: 'blue',
    fontSize: 16,
  },
});

export default Connexion;
