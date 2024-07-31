// Connexion.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Connexion = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('User signed in:', user);

      Alert.alert('Succès', 'Connexion réussie !', [
        { text: 'OK', onPress: () => navigation.navigate('accueil') }
      ]);

      // Réinitialisation des champs après la connexion
      setEmail('');
      setPassword('');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Erreur', 'Mot de passe incorrect');
      } else if (error.code === 'auth/user-not-found') {
        Alert.alert('Erreur', "L'utilisateur n'existe pas");
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Erreur', "L'adresse e-mail est invalide");
      } else {
        Alert.alert('Erreur', error.message);
      }
    }
  };

  const handleForgotPassword = () => {
    // Insérer ici la logique pour gérer le lien "Mot de passe oublié ?"
    console.log('Forgot Password');
  };

  const handleSignUp = () => {
    // Redirection vers la page d'inscription
    navigation.navigate('inscription');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/gris.jpg')} style={styles.image} />
      <Text style={styles.title}>Connectez-vous!</Text>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
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
          onChangeText={setPassword}
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
        <TouchableOpacity onPress={handleSignUp}>
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
