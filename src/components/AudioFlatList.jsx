import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'

const AudioFlatList = () => {
  const [audioFiles, setAudioFiles] = useState([])
  const playbackState = usePlaybackState()

  // Request Storage Permission
  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          Platform.Version >= 33
            ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO
            : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED
      } catch (err) {
        console.warn(err)
        return false
      }
    }
    return true
  }

  // Fetch Local Audio Files
  const fetchAudioFiles = async () => {
    const hasPermission = await requestPermission()
    if (!hasPermission) return

    // Get the local files using TrackPlayer
    const tracks = await TrackPlayer.getQueue()
    setAudioFiles(tracks)
  }

  useEffect(() => {
    fetchAudioFiles()
  }, [])

  // Play or Pause Audio
  const togglePlayback = async trackId => {
    const state = await TrackPlayer.getState()
    if (state === State.Playing) {
      await TrackPlayer.pause()
    } else {
      await TrackPlayer.play()
    }
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {audioFiles.length === 0 ? (
        <Text>No audio files found</Text>
      ) : (
        <FlatList
          data={audioFiles}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => togglePlayback(item.id)}>
              <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ fontSize: 16, color: 'white' }}>{item.title || item.url}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}

export default AudioFlatList
