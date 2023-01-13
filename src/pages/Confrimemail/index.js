import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import ConfirmCode from '../../components/ConfirmCode'

const ConfirmEmail = ({navigation}) => {

  const onSignIn=()=>{
    navigation.navigate('SignIn')
  }

  const onResendPress=()=>{
    console.warn('COMING SOON')
  }

  return (
    <View style={[styles.root, { backgroundColor: '#252525', }]}>
      <View style={[styles.rectangle]}>
        <View style={{ alignItems: 'center', padding: 20, marginBottom: 20 }}>
          <Text style={[styles.title]}>Confirm your email</Text>
          
        </View>
        <View >
          <Text style={{ color: '#ffff', fontSize: 18, fontWeight: 'bold', marginHorizontal: 30, marginBottom: 10 }}>Enter confirmation code</Text>
          <CustomInput />
          <Text style={{color:'#ffff',marginLeft:30,marginTop:10}} onPress={onResendPress}>Resend code</Text>
          <View style={{ paddingRight: 21 }}>
            <ConfirmCode />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: '#ffff' }}>Back to <Text style={{ color: '#7a51ed' }} onPress={onSignIn}>Sign In</Text></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ConfirmEmail


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
  }
})