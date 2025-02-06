import {StyleSheet} from 'react-native';

export const audioScreenStyles = StyleSheet.create({
  container: {
    flex: 1, // Ensures LinearGradient takes full screen
  },
  content: {
    flex: 1, // Ensures SafeAreaView also takes full screen
  },
});
