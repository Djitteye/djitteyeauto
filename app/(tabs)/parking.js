import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../header';
import { useNavigation } from '@react-navigation/native';

const Parking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <Header userName="Abdoulaye Djitteye" />
      <View style={styles.headerContainer}>
        {/* Title */}
        <Text style={styles.title}>Nos parkings</Text>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Icon name="search-outline" size={24} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Recherche..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.sortButton}>
            <Icon name="filter-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile 1 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile 2 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile 3 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile 4 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile 5 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile 6 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile 7 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile 8 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile 9 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Profile 10 */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/carrousel1.png')} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Keita business auto</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
              <Text style={styles.profileRating}>4.5/5</Text>
            </View>
            <Text style={styles.profileReviews}>Avis: 100</Text>
            <TouchableOpacity
              style={styles.consultButton}
              onPress={() => navigation.navigate('ParkingDetail', { profile: 'Keita business auto' })}
            >
              <Text style={styles.consultButtonText}>Consulter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Repeat for other profiles */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // same styles as before
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchBarContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f3f3',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  sortButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FD6A00',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starIcon: {
    marginRight: 5,
  },
  profileRating: {
    fontSize: 16,
    color: '#777',
  },
  profileReviews: {
    fontSize: 16,
    color: '#777',
  },
  consultButton: {
    alignItems: 'center',
    width: '60%',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FD6A00',
    borderRadius: 5,
  },
  consultButtonText: {
    color: '#fff',
    fontSize: 16,
  },

});

export default Parking;
