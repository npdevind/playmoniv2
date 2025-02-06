import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {homeStyles} from '../styles/homeStyles';

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#4769d4', '#4769d4', '#ae7fc7', '#a97fc9']} // Gradient colors
      style={homeStyles.container}>
      <SafeAreaView style={homeStyles.safeArea}>
        <View style={homeStyles.content}>
          {/* Background Image */}
          <Image
            source={require('../assets/image_contents/Retro_Styled_Radio.jpeg')}
            style={homeStyles.image}
            resizeMode="contain"
          />

          {/* Overlay Logo Image */}
          <FastImage
            source={require('../assets/image_contents/logo.gif')}
            style={homeStyles.logo}
            // resizeMode="contain"
          />
          {/* bitton */}
          <TouchableOpacity style={homeStyles.playButton}>
            <Text
              style={homeStyles.playButtonText}
              onPress={() => navigation.navigate('AudioListScreen')}>
              Open Player
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
