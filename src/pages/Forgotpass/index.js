import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'


const ForgotPass = ({ navigation }) => {

  const onSignIn = () => {
    navigation.navigate('SignIn')
  }



  return (
    <View style={[styles.root, { backgroundColor: '#252525', }]}>
      <View style={[styles.rectangle]}>
        <View style={{ alignItems: 'center', padding: 20, marginBottom: 20 }}>
          <Text style={[styles.title]}>Reset your password</Text>

        </View>
        <View >
          <Text style={{ color: '#ffff', fontSize: 18, fontWeight: 'bold', marginHorizontal: 30, marginBottom: 10 }}>Enter your email</Text>
          <CustomInput />
          <View style={{ paddingRight: 21 }}>
            <View style={[styles.bg, { marginLeft: 230, paddingVertical: 5, borderRadius: 10, marginTop: 15 }]}>
              <TouchableOpacity onPress={() => navigation.navigate('ConfirmForgotPass')}>
                <Text style={[styles.textnext]}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: '#ffff' }}>Back to <Text style={{ color: '#7a51ed' }} onPress={onSignIn}>Sign In</Text></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ForgotPass


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffff',
  },
  rectangle: {
    width: 350,
    height: 450,
    borderRadius: 10,
    backgroundColor: '#2d2d2d'
  },
  bg: {
    backgroundColor: '#7a51ed',
    alignItems: 'center',
  },
  textnext: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})