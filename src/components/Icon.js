import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const ICONS = {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Entypo,
}

const Icon = ({ name, size = 24, color = '#fff', type = 'Ionicons', style }) => {
  const IconComponent = ICONS[type] || Ionicons // Default to Ionicons if type not found

  return <IconComponent name={name} size={size} color={color} style={style} />
}

export default Icon
