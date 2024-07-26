import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const ModifierProfil = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { firstName, lastName, phoneNumber, email, profileImage } = route.params;

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const [newEmail, setNewEmail] = useState(email);
  const [newProfileImage, setNewProfileImage] = useState(profileImage);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setNewProfileImage({ uri: result.assets[0].uri });
    }
  };

  const handleSave = () => {
    console.log('New Details:', newFirstName, newLastName, newPhoneNumber, newEmail, newProfileImage);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
        <Image source={newProfileImage} style={styles.profileImage} />
        <Text style={styles.editText}>Change Profile Image</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={newFirstName}
        onChangeText={setNewFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={newLastName}
        onChangeText={setNewLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={newPhoneNumber}
        onChangeText={setNewPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={newEmail}
        onChangeText={setNewEmail}
        keyboardType="email-address"
      />

      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editText: {
    marginTop: 10,
    color: '#FD6A00',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ModifierProfil;
