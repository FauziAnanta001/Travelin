import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import CustomInput from '../../components/CustomInput'
import NextHome from '../../components/NextHome'

const SignIn = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

const onSignUp=()=>{
  navigation.navigate('CreateAccount')
}

const onForgotPress=()=>{
  navigation.navigate('ForgotPass')
}

  return (
    <View style={[styles.root, { backgroundColor: '#FFFFFF', }]}>
      <View style={[styles.rectangle]}>
        <View style={{ alignItems: 'flex-start', padding: 20,marginTop:-100,marginBottom: 250,backgroundColor:'#ffff' }}>
          <Text style={[styles.title]}>Sign In </Text>
        </View>
        <View >
          <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold', marginHorizontal: 30, marginBottom: 10 }}>Email</Text>
          <CustomInput value={email} setValue={setEmail}/>
          <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', marginHorizontal: 30, marginBottom: 10, marginTop: 10 }}>Password</Text>
          <CustomInput value={pass} setValue={setPass} secureTextEntry/>
          <View style={{ paddingRight: 21 }}>
            <NextHome />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' ,marginTop:30}}>
          <Text style={{color:'#000000'}}>Don't have an Account? <Text style={{color:'#85978E'}} onPress={onSignUp}>Register</Text></Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color:'#ffff'}}>Don't have account? <Text style={{color:'#7a51ed'}}>Register</Text></Text>
            </TouchableOpacity> */}
            <Text style={{color:'#85978E',marginTop:30}} onPress={onForgotPress}>Forgot password</Text>
          </View>
        </View>
      </View>
    </View>

  )
}

export default SignIn

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  rectangle: {
    width: 350,
    height: 450,
    borderRadius: 10,
    backgroundColor: '#ffff'
  }
})