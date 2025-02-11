import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import TrackPlayer, {
  useProgress,
  usePlaybackState,
  useActiveTrack,
} from 'react-native-track-player'
import { BlurView } from '@react-native-community/blur'
import Slider from '@react-native-community/slider'

const FullPlayer = () => {
  const track = useActiveTrack()
  const progress = useProgress()
  const playbackState = usePlaybackState()
  const [isShuffled, setIsShuffled] = React.useState(false)
  const [repeatMode, setRepeatMode] = React.useState('off')

  if (!track) return null

  return (
    <View style={styles.container}>
      {/* Blurred Background */}
      <BlurView blurType="dark" style={StyleSheet.absoluteFill}>
        <Image source={{ uri: track.artwork }} style={styles.backgroundImage} />
      </BlurView>

      {/* Content */}
      <View style={styles.content}>
        <Image source={{ uri: track.artwork }} style={styles.albumArt} />

        <View style={styles.metaContainer}>
          <Text style={styles.title}>{track.title}</Text>
          <Text style={styles.artist}>{track.artist || 'Unknown Artist'}</Text>
        </View>

        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={progress.duration}
          value={progress.position}
          onSlidingComplete={async value => await TrackPlayer.seekTo(value)}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#666666"
        />

        <View style={styles.controls}>
          <TouchableOpacity onPress={() => setIsShuffled(!isShuffled)}>
            <Text style={[styles.icon, isShuffled && styles.activeIcon]}>🔀</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
            <Text style={styles.icon}>⏮</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.playButton}
            onPress={() => (playbackState === 'playing' ? TrackPlayer.pause() : TrackPlayer.play())}
          >
            <Text style={styles.playIcon}>{playbackState === 'playing' ? '⏸' : '▶'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
            <Text style={styles.icon}>⏭</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              const newMode = repeatMode === 'off' ? 'track' : 'off'
              setRepeatMode(newMode)
              TrackPlayer.setRepeatMode(newMode)
            }}
          >
            <Text style={[styles.icon, repeatMode !== 'off' && styles.activeIcon]}>
              {repeatMode === 'track' ? '🔂' : '🔄'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, opacity: 0.3 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  albumArt: { width: 300, height: 300, borderRadius: 10, marginBottom: 30 },
  metaContainer: { alignItems: 'center', marginBottom: 30 },
  title: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  artist: { color: '#bbbbbb', fontSize: 18 },
  progressBar: { width: '80%', height: 40 },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 30,
  },
  playButton: { backgroundColor: '#4CAF50', borderRadius: 50, padding: 20 },
  playIcon: { fontSize: 30, color: 'white' },
  icon: { fontSize: 24, color: 'white' },
  activeIcon: { color: '#4CAF50' },
})

export default FullPlayer
