import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AudioScreenHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/34' }}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>My Music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Online Music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Podcast</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.border} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginLeft: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    // gap: 25,
    marginRight: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tabText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: '#353935',
    marginTop: 15,
    opacity: 0.3,
  },
})

export default AudioScreenHeader
