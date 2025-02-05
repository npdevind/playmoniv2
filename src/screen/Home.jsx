import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#4769d4', '#4769d4', '#ae7fc7', '#a97fc9']} // Gradient colors
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Background Image */}
          <Image
            source={require('../assets/image_contents/Retro_Styled_Radio.jpeg')}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Overlay Logo Image */}
          <Image
            source={require('../assets/image_contents/logo.gif')}
            style={styles.logo}
            // resizeMode="contain"
          />
          {/* bitton */}
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playButtonText}>Play Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures LinearGradient takes full screen
  },
  safeArea: {
    flex: 1, // Ensures SafeAreaView also takes full screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 420, // Adjust as needed
    height: 700, // Adjust as needed
    borderRadius: 20,
  },
  logo: {
    position: 'absolute',
    width: 250,
    height: 130,
    top: 50,
    left: '38%',
    transform: [{translateX: -75}],
  },
  playButton: {
    position: 'absolute',
    bottom: 50, // Set bottom spacing
    alignSelf: 'center',
    backgroundColor: '#e89e44',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  playButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
