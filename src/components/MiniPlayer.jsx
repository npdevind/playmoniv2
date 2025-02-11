import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native'
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player'
import { useNavigation } from '@react-navigation/native'

const MiniPlayer = () => {
  const playbackState = usePlaybackState()
  const [track, setTrack] = useState(null)
  const navigation = useNavigation()
  const fadeAnim = useRef(new Animated.Value(0)).current

  console.log('MiniPlayer Rendered')
  console.log('Playback State:', playbackState)

  // Listen for track change events
  // useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
  //   console.log('Track Change Event Received:', event)

  //   if (event.track) {
  //     const currentTrack = await TrackPlayer.getTrack(event.track)
  //     console.log('Current Track from Event:', currentTrack)
  //     setTrack(currentTrack)
  //   }
  // })
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    console.log('🎶 Event Received:', event)

    if (event.nextTrack) {
      // Correct way to check for next track
      const currentTrack = await TrackPlayer.getTrack(event.nextTrack)
      console.log('🔹 New Track Playing:', currentTrack)
      setTrack(currentTrack)
    }
  })

  // Fetch currently playing track when component mounts or playback state changes
  useEffect(() => {
    const fetchTrack = async () => {
      const currentTrack = await TrackPlayer.getActiveTrack()
      console.log('Fetched Track:', currentTrack)
      setTrack(currentTrack)
    }
    fetchTrack()
  }, [playbackState])

  // If no track is playing, hide MiniPlayer
  if (!track) {
    console.log('No track is playing, hiding MiniPlayer')
    return null
  }

  // Animate MiniPlayer when a track is set
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [track])

  // Toggle play/pause
  const togglePlayback = async () => {
    console.log('Toggling Playback. Current state:', playbackState)

    if (playbackState === TrackPlayer.STATE_PLAYING) {
      await TrackPlayer.pause()
      console.log('Playback Paused')
    } else {
      await TrackPlayer.play()
      console.log('Playback Started')
    }
  }

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#121212',
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          console.log('MiniPlayer Clicked, Navigating to FullPlayer')
          navigation.navigate('FullPlayer')
        }}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <Image
          source={
            track.artwork
              ? { uri: track.artwork }
              : require('../assets/image_contents/audio_icon.png')
          }
          style={{ width: 50, height: 50, borderRadius: 5 }}
        />
        <Text style={{ color: '#fff', flex: 1, marginLeft: 10 }} numberOfLines={1}>
          {track.title || 'Unknown Title'}
        </Text>
        <TouchableOpacity onPress={togglePlayback}>
          <Text style={{ color: '#fff' }}>
            {playbackState === TrackPlayer.STATE_PLAYING ? '⏸' : '▶️'}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default MiniPlayer
