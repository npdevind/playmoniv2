import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
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
    top: 15,
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 170,
    top: 0,
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
