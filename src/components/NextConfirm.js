import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NextConfirm = () => {
    const navigation = useNavigation()
    return (
        <View style={[styles.bg,{marginLeft:230,paddingVertical:5,borderRadius:10,marginTop:15}]}>
            <TouchableOpacity onPress={() => navigation.navigate('ConfirmEmail')}>
                <Text style={[styles.textnext]}>Next</Text>
            </TouchableOpacity>
        </View>

    )
}

export default NextConfirm

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#85978E',
        alignItems:'center',
    },
    textnext:{
        color:'#000000',
        fontSize:20,
        fontWeight:'bold'
    }
})