import { StyleSheet } from 'react-native'

export const audioScreenStyles = StyleSheet.create({
  container: {
    flex: 1, // Ensures LinearGradient takes full screen
  },
  content: {
    flex: 1, // Ensures SafeAreaView also takes full screen
    paddingHorizontal: 10, // Keep horizontal padding if needed
    paddingTop: 0, // 🔹 Ensures no extra top space
  },
  audioListView: {
    flex: 1,
  },
})
