import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './src/screen/Home'
import AudioListScreen from './src/screen/AudioListScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// Create your tab navigator (main app after landing page)
const MainAppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Library') {
            iconName = focused ? 'library' : 'library-outline'
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline'
          } else if (route.name === 'AudioListScreen') {
            iconName = focused ? 'musical-notes' : 'musical-notes-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#1DB954',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Library" component={AudioListScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  )
}

// Placeholder screens
const SearchScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search</Text>
  </View>
)

// Root navigation stack
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Stack.Navigator initialRouteName="Home">
        {/* Landing Page (not part of tabs) */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        {/* Main App with Tabs */}
        <Stack.Screen name="MainApp" component={MainAppTabs} options={{ headerShown: false }} />

        {/* Audio List Screen (accessible from landing page) */}
        <Stack.Screen
          name="AudioListScreen"
          component={AudioListScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
