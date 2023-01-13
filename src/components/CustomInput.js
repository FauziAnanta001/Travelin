import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue ,secureTextEntry}) => {
  return (
    <View style={[styles.container]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={[styles.input]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor:'#000',
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1

  },
  input: {
    color: '#000',
    fontSize: 16
  }
})