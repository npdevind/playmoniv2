import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native'
import RNFS from 'react-native-fs'
import { audioFlatListStyles } from '../styles/audioFlatListStyles'

const AudioFlatList = () => {
  const [audioFiles, setAudioFiles] = useState([])
  const [loading, setLoading] = useState(true) // Loader state

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          Platform.Version >= 33
            ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO
            : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your audio files',
            buttonPositive: 'OK',
          },
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED
      } catch (err) {
        console.warn('❌ Permission error:', err)
        return false
      }
    }
    return true
  }

  const scanDirectories = async directory => {
    try {
      const items = await RNFS.readDir(directory)
      if (!items || items.length === 0) return []

      let audioList = []

      for (const item of items) {
        if (item.isDirectory()) {
          if (item.path.includes('/Android/')) continue
          const subfolderFiles = await scanDirectories(item.path)
          audioList = [...audioList, ...subfolderFiles]
        } else if (item.isFile() && /\.(mp3|wav|m4a|flac|aac|ogg)$/i.test(item.name)) {
          audioList.push({
            id: item.path,
            title: item.name.replace(/\.(mp3|wav|m4a|flac|aac|ogg)$/i, ''),
            url: 'file://' + item.path,
          })
        }
      }
      return audioList
    } catch (error) {
      console.error(`❌ Error scanning ${directory}:`, error.message)
      return []
    }
  }

  const getExternalSDCardPath = async () => {
    try {
      const storageDirs = await RNFS.getAllExternalFilesDirs()
      if (storageDirs.length > 1) {
        return storageDirs[1].split('/Android')[0]
      }
    } catch (error) {
      console.error('❌ Error getting SD card path:', error.message)
    }
    return null
  }

  const fetchAudioFiles = async () => {
    setLoading(true) // Show loader when scanning starts

    try {
      const hasPermission = await requestPermission()
      if (!hasPermission) return

      const externalSDCardPath = await getExternalSDCardPath()

      const rootDirectories = [
        RNFS.ExternalStorageDirectoryPath + '/Music',
        RNFS.ExternalStorageDirectoryPath + '/Download',
        RNFS.ExternalStorageDirectoryPath,
        ...(externalSDCardPath
          ? [externalSDCardPath, externalSDCardPath + '/Music', externalSDCardPath + '/Downloads']
          : []),
      ].filter(Boolean)

      let allAudioFiles = []
      let uniqueFiles = new Set()

      for (const directory of rootDirectories) {
        const files = await scanDirectories(directory)
        for (const file of files) {
          if (!uniqueFiles.has(file.id)) {
            uniqueFiles.add(file.id)
            allAudioFiles.push(file)
          }
        }
      }

      setAudioFiles(allAudioFiles)
    } catch (error) {
      console.error('Error fetching audio files:', error)
    } finally {
      setLoading(false) // Hide loader when done
    }
  }

  useEffect(() => {
    fetchAudioFiles()
  }, [])

  return (
    <View style={audioFlatListStyles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={audioFiles}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={audioFlatListStyles.audioItem}>
              <Image
                source={require('../assets/image_contents/audio_icon.png')}
                style={audioFlatListStyles.audioIcon}
              />
              <Text style={audioFlatListStyles.audioTitle} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
            </View>
          )}
          contentContainerStyle={{ paddingTop: 0 }} // 🔹 Removes unwanted top padding
          // scrollEnabled={false} //to disable scroll
          showsVerticalScrollIndicator={false} // 🔹 Hides vertical scrollbar
          showsHorizontalScrollIndicator={false} // 🔹 Hides horizontal scrollbar (if needed)
          ListEmptyComponent={
            <Text style={audioFlatListStyles.noFilesText}>No audio files found...</Text>
          }
        />
      )}
    </View>
  )
}

export default AudioFlatList
