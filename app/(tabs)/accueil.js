import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '../header';

const Accueil = () => {
  const navigation = useNavigation();

  const images = [
    { source: require('../../assets/images/mercede.png'), name: 'Mercedes' },
    { source: require('../../assets/images/kia.jpg'), name: 'Kia' },
    { source: require('../../assets/images/renault.png'), name: 'Renault' },
    { source: require('../../assets/images/toyota.jpg'), name: 'Toyota' },
    { source: require('../../assets/images/audi.png'), name: 'Audi' },
  ];

  const moreImages = [
    { source: require('../../assets/images/toyota1.png'), name: 'Prado 4X4', price: '55Millions FCFA' },
    { source: require('../../assets/images/kia.png'), name: 'KIA EV6-2022', price: '35Millions FCFA' },
    { source: require('../../assets/images/mercedesbenz.jpg'), name: 'Mercedes Benz', price: '30Millions FCFA' },
    { source: require('../../assets/images/mercedesgla.jpg'), name: 'Mercedes GLA', price: '30Millions FCFA' },
  ];

  const carouselImages = [
    { source: require('../../assets/images/carrousel1.png'), name: 'Keita business auto' },
    { source: require('../../assets/images/carrousel2.png'), name: 'Carbox-ml' },
    { source: require('../../assets/images/carrousel3.jpg'), name: 'G-T- Djiguiya auto services' },
    { source: require('../../assets/images/carrousel4.jpg'), name: 'Damba auto' },
  ];

  const handleImagePress = (index, type) => {
    console.log('Image cliquée:', index, 'Type:', type);
  };

  const scrollViewRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (scrollViewRef.current) {
      const newScrollPosition = Math.max(0, scrollPosition - 300);
      scrollViewRef.current.scrollTo({ x: newScrollPosition, animated: true });
      setScrollPosition(newScrollPosition);
    }
  };

  const scrollRight = () => {
    if (scrollViewRef.current) {
      const newScrollPosition = scrollPosition + 300;
      scrollViewRef.current.scrollTo({ x: newScrollPosition, animated: true });
      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <View style={styles.container}>
        <Header userName="Abdoulaye Djitteye" />
      <View style={styles.searchBarContainer}>
        <Icon name="search-outline" size={30} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Recherche..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sortButton}>
          <Icon name="filter-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.carouselContainer}>
        <TouchableOpacity style={styles.arrowButton} onPress={scrollLeft}>
          <Icon name="chevron-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          style={styles.carouselScrollView}
          onScroll={(event) => setScrollPosition(event.nativeEvent.contentOffset.x)}
          scrollEventThrottle={16}
        >
          {carouselImages.map((item, index) => (
            <View key={index} style={styles.carouselItem}>
              <Image source={item.source} style={styles.carouselImage} />
              <Text style={styles.carouselText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.arrowButton} onPress={scrollRight}>
          <Icon name="chevron-forward-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* Ajoutez ici le contenu principal de votre page */}
      </View>

      <View style={styles.scrollContainer}>
        <View style={styles.scrollSection}>
          <Text style={styles.scrollTitle}>Nos marques</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.imageScrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            {images.map((item, index) => (
              <TouchableOpacity key={index} style={styles.imageContainer} onPress={() => handleImagePress(index, 'first')}>
                <View style={styles.imageWrapper}>
                  <Image source={item.source} style={styles.scrollImage} />
                </View>
                <View style={styles.imageOverlay}>
                  <Text style={styles.imageLabel}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.scrollTitleContainer}>
            <Text style={styles.scrollTitle}>Pour vous</Text>
            <TouchableOpacity style={styles.arrowIcon} onPress={() => navigation.navigate('pourVous')}>
              <Icon name="chevron-forward-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.imageScrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            {moreImages.map((item, index) => (
              <TouchableOpacity key={index} style={styles.imageContainerLarge} onPress={() => handleImagePress(index, 'second')}>
                <View style={styles.imageWrapperLarge}>
                  <Image source={item.source} style={styles.scrollImageLarge} />
                </View>
                <View style={styles.imageOverlay}>
                  <Text style={styles.imageLabel}>{item.name}</Text>
                  <Text style={styles.imagePrice}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f3',
    padding: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
  },
  sortButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FD6A00',
    marginLeft: 10,
  },
  carouselContainer: {
    height: 150,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselScrollView: {
    flex: 1,
  },
  arrowButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FD6A00',
    marginHorizontal: 5,
  },
  carouselItem: {
    width: 300,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  carouselImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  carouselText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  mainContent: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 0,
    paddingTop:20,

  },
  scrollSection: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop:25,
   
  },
  scrollTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
   
  },
  scrollTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
   
  },
 
  
  arrowIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FD6A00',
  },
  imageScrollView: {
    marginTop:0,
    marginBottom: 20,
    
  },
  imageContainer: {
    width: 100,
    padding: 5,
    marginTop:0,
    height:100,
    marginTop:10,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#F4F3F3',
  },
  imageContainerLarge: {
    width: 160,
    padding: 5,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#F4F3F3',
  },
  imageWrapper: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageWrapperLarge: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
  },
  scrollImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  scrollImageLarge: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  imageLabel: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  imagePrice: {
    color: '#000',
    fontSize: 12,
    marginTop: 2,
  },
});

export default Accueil;
