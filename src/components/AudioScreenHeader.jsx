import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AudioScreenHeader = ({ headerType, setHeaderType }) => {
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
          <TouchableOpacity
            style={headerType === 'myMusic' ? styles.activeTab : styles.tab}
            onPress={() => setHeaderType('myMusic')}
          >
            <Text style={headerType === 'myMusic' ? styles.activeTabText : styles.tabText}>
              My Music
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={headerType === 'onlineMusic' ? styles.activeTab : styles.tab}
            onPress={() => setHeaderType('onlineMusic')}
          >
            <Text style={headerType === 'onlineMusic' ? styles.activeTabText : styles.tabText}>
              Online Music
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={headerType === 'podcast' ? styles.activeTab : styles.tab}
            onPress={() => setHeaderType('podcast')}
          >
            <Text style={headerType === 'podcast' ? styles.activeTabText : styles.tabText}>
              Podcast
            </Text>
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
    gap: 5,
    marginRight: 20,
  },
  activeTab: {
    borderWidth: 1,
    borderColor: '#00ff94',
    borderRadius: 25,
    backgroundColor: '#00ff00',
    color: 'black',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tab: {
    borderWidth: 1,
    borderColor: '#00ff00',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  tabText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  activeTabText: {
    color: 'black',
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
