import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar, View, Text } from 'react-native'
import Icon from './src/components/Icon'
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
          const icons = {
            Home: { name: focused ? 'home' : 'home-outline', type: 'Ionicons' },
            Search: { name: focused ? 'search' : 'search-outline', type: 'Ionicons' },
            Library: { name: focused ? 'list-circle' : 'list-circle-outline', type: 'Ionicons' },
            Setting: { name: focused ? 'settings' : 'settings-outline', type: 'Ionicons' },
          }

          const { name, type } = icons[route.name] || {}

          return <Icon name={name} size={size} color={color} type={type} />
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
      <Tab.Screen name="Home" component={AudioListScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={SearchScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  )
}

// Placeholder screens
const SearchScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search</Text>
  </View>
)

const SettingScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Setting</Text>
  </View>
)

// Root navigation stack
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Stack.Navigator initialRouteName="Index">
        {/* Landing Page (not part of tabs) */}
        <Stack.Screen name="Index" component={HomeScreen} options={{ headerShown: false }} />

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
