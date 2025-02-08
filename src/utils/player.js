import TrackPlayer from 'react-native-track-player'

export const setupPlayer = async () => {
  await TrackPlayer.setupPlayer()
  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP,
      TrackPlayer.CAPABILITY_SEEK_TO,
    ],
    compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  })
}

export const playAudio = async (tracks, index = 0) => {
  await TrackPlayer.reset()
  await TrackPlayer.add(tracks)
  await TrackPlayer.skip(index)
  await TrackPlayer.play()
}
