import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { audioScreenStyles } from '../styles/audioScreenStyles'
import AudioScreenHeader from '../components/AudioScreenHeader'
import AudioFlatList from '../components/AudioFlatList'

const AudioListScreen = () => {
  return (
    <LinearGradient colors={['#111', '#111']} style={audioScreenStyles.container}>
      <SafeAreaView style={audioScreenStyles.content}>
        <AudioScreenHeader />
        <View>
          <AudioFlatList />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default AudioListScreen
