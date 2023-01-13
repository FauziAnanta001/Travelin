import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import CustomInput from '../../components/CustomInput'
import NextConfirm from '../../components/NextConfirm'

const SignUp = ({ navigation }) => {

  const [newemail, setCreateEmail] = useState('')
  const [newpass, setCreatePass] = useState('')

  const onSignIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <View style={[styles.root, { backgroundColor: '#ffffff', }]}>
      <View style={[styles.rectangle]}>
        <View style={{ alignItems: 'center', padding: 20, marginBottom: 150 }}>
          <Text style={{ color: '#000000', fontSize: 30 }}>Create an account</Text>
        </View>
        <View >
          <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold', marginHorizontal: 30, marginBottom: 10 }}>Enter Email</Text>
          <CustomInput />
          <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold', marginHorizontal: 30, marginBottom: 10, marginTop: 10 }}>Create Password</Text>
          <CustomInput />
          <View style={{ paddingRight: 21 }}>
            <NextConfirm />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: '#000000' }}>Have an Account? <Text style={{ color: '#85978E' }} onPress={onSignIn}>Sign In</Text></Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={{color:'#000000'}}>Have account? <Text style={{color:'#7a51ed'}}>Sign In</Text></Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  rectangle: {
    width: 350,
    height: 450,
    borderRadius: 10,
    backgroundColor: '#ffff'
  }
})