import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ userName }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/images/blanc.jpg')} style={styles.logo} />

      {/* User Name */}
      <Text style={styles.userName}>{userName}</Text>

      {/* Notification Icon */}
      <TouchableOpacity style={styles.notificationIcon} onPress={() => navigation.navigate('Notifications')}>
        <Icon name="notifications-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width:'100%',
    backgroundColor: '#fff',
    elevation: 4, // for shadow on Android
    shadowColor: '#000', // for shadow on iOS
    shadowOffset: { width: 0, height: 2 }, // for shadow on iOS
    shadowOpacity: 0.2, // for shadow on iOS
    shadowRadius: 2, // for shadow on iOS
  },
  logo: {
    width: 40,
    height: 40,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationIcon: {
    padding: 5,
  },
});

export default Header;
