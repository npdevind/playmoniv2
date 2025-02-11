import TrackPlayer from 'react-native-track-player'

export const setupPlayer = async () => {
  try {
    const isSetup = await TrackPlayer.isServiceRunning()
    if (!isSetup) {
      console.log('🔹 Initializing TrackPlayer...')
      await TrackPlayer.setupPlayer()
      console.log('✅ TrackPlayer Initialized')
    }
  } catch (error) {
    console.log('❌ TrackPlayer Setup Error:', error)
  }
  // const isSetup = await TrackPlayer.isServiceActive()
  // if (!isSetup) {
  //   await TrackPlayer.setupPlayer()
  //   TrackPlayer.updateOptions({
  //     stopWithApp: true,
  //     capabilities: [
  //       TrackPlayer.CAPABILITY_PLAY,
  //       TrackPlayer.CAPABILITY_PAUSE,
  //       TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
  //       TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  //       TrackPlayer.CAPABILITY_SEEK_TO,
  //       TrackPlayer.CAPABILITY_STOP,
  //     ],
  //     notificationCapabilities: [
  //       TrackPlayer.CAPABILITY_PLAY,
  //       TrackPlayer.CAPABILITY_PAUSE,
  //       TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
  //       TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  //     ],
  //     compactCapabilities: [
  //       TrackPlayer.CAPABILITY_PLAY,
  //       TrackPlayer.CAPABILITY_PAUSE,
  //       TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
  //     ],
  //   })
  // }
}

export const playAudio = async (tracks, index = 0) => {
  console.log('playAudio called with tracks:', tracks, 'Index:', index)

  await setupPlayer()
  console.log('Player setup complete')

  await TrackPlayer.reset()
  console.log('TrackPlayer reset')

  await TrackPlayer.add(tracks)
  console.log('Tracks added:', tracks)

  await TrackPlayer.skip(index)
  console.log('Skipped to track:', index)

  await TrackPlayer.play()
  console.log('Playback started')
}
