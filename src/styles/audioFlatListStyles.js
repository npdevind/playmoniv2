import { StyleSheet } from 'react-native'

export const audioFlatListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingVertical: 0,
  },
  audioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#353935',
  },
  audioIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
    tintColor: '#fff',
  },
  audioTitle: {
    fontSize: 16,
    color: 'white',
    flex: 1,
  },
  noFilesText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
})
