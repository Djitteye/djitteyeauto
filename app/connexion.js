import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Connexion = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const auth = getAuth();
      const firestore = getFirestore();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Retrieve user details from Firestore
      const userDoc = await getDoc(doc(firestore, 'Users', user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const { firstName, lastName } = userData;

        Alert.alert('Succès', `Bienvenue, ${firstName} ${lastName} !`);
        
        // Navigate to the main screen and pass user data
        navigation.navigate('(tabs)', {
          userName: `${firstName} ${lastName}`
        });
      } else {
        Alert.alert('Erreur', "Impossible de récupérer les informations de l'utilisateur.");
      }

      // Réinitialisation des champs après la connexion
      setEmail('');
      setPassword('');
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          Alert.alert('Erreur', 'Mot de passe incorrect');
          break;
        case 'auth/user-not-found':
          Alert.alert('Erreur', "L'utilisateur n'existe pas");
          break;
        case 'auth/invalid-email':
          Alert.alert('Erreur', "L'adresse e-mail est invalide");
          break;
        default:
          Alert.alert('Erreur', error.message);
      }
    } finally {
      setLoading(false);
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

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton} disabled={loading}>
        <Text style={styles.loginButtonText}>{loading ? 'Connexion...' : 'Se connecter'}</Text>
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
    marginBottom: 20,
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
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
