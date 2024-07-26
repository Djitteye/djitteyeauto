import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Notifications = () => {
  const navigation = useNavigation();

  const notifications = [
    {
      id: '1',
      profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
      date: '2023-07-13',
      time: '14:30',
      sender: 'Keita Business Auto',
      message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
    },
    {
      id: '2',
      profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
      date: '2023-07-12',
      time: '16:45',
      sender: 'Keita Business Auto',
      message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
    },
    {
        id: '3',
        profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
        date: '2023-07-12',
        time: '16:45',
        sender: 'Keita Business Auto',
        message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
      },
      {
        id: '4',
        profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
        date: '2023-07-12',
        time: '16:45',
        sender: 'Keita Business Auto',
        message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
      },
      {
        id: '5',
        profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
        date: '2023-07-12',
        time: '16:45',
        sender: 'Keita Business Auto',
        message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
      },
      {
        id: '6',
        profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
        date: '2023-07-12',
        time: '16:45',
        sender: 'Keita Business Auto',
        message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
      },
      {
        id: '7',
        profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
        date: '2023-07-12',
        time: '16:45',
        sender: 'Keita Business Auto',
        message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
      },
      {
        id: '8',
        profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
        date: '2023-07-12',
        time: '16:45',
        sender: 'Keita Business Auto',
        message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
      },
      {
        id: '9',
        profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
        date: '2023-07-12',
        time: '16:45',
        sender: 'Keita Business Auto',
        message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
      },
      {
        id: '10',
        profileImage: require('../assets/images/carrousel1.png'), // Remplacez par le chemin de votre image
        date: '2023-07-12',
        time: '16:45',
        sender: 'Keita Business Auto',
        message: 'Bonjour Abdoulaye! une nouvelle voiture a et...',
      },
    // Ajoutez plus de notifications ici
  ];

  const handleNotificationClick = (notification) => {
    navigation.navigate('NotificationDetails', { notification });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationContainer} onPress={() => handleNotificationClick(item)}>
      <Image source={item.profileImage} style={styles.profileImage} />
      <View style={styles.notificationDetails}>
        <Text style={styles.senderText}>{item.sender}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Notification List */}
      <ScrollView contentContainerStyle={styles.notificationsList}>
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false} // Disable FlatList's internal scroll to allow ScrollView to handle it
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationsList: {
    padding: 20,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  notificationDetails: {
    marginLeft: 15,
    flex: 1,
  },
  senderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  dateContainer: {
    alignItems: 'flex-end',
  },
  dateText: {
    fontSize: 12,
    color: '#888',
  },
  timeText: {
    fontSize: 12,
    color: '#888',
  },
});

export default Notifications;
