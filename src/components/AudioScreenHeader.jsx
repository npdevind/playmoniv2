import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const AudioScreenHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://avatar.iran.liara.run/public/34'}}
        style={styles.avatar}
      />
      <View style={styles.border} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'start', // Center the image horizontally
    marginTop: 15,
  },
  avatar: {
    width: 45, // Set width
    height: 45, // Set height
    borderRadius: 25, // Make it circular
    marginLeft: 20,
  },
  border: {
    width: '100%', // Full width
    height: 1, // Border thickness
    backgroundColor: 'gray', // Border color
    marginTop: 10, // Space from avatar
    opacity: 0.3, // Light border effect
    marginRight: 0,
  },
});

export default AudioScreenHeader;
