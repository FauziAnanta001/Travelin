import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { Logo, SplashBackground } from '../../assets'

const Splash = ({ navigation }) => {
    useEffect(() => {
       setTimeout(() => {
           navigation.replace('SignIn')
        }, 2500)
    }, [navigation])

    return (
        

        <ImageBackground source={SplashBackground} style={styles.background}>
             <Image source={Logo} />
         </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
