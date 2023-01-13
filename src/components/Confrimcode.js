import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ConfirmCode = () => {
    const navigation = useNavigation()
    return (
        <View style={[styles.bg,{marginLeft:230,paddingVertical:5,borderRadius:10,marginTop:15}]}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Text style={[styles.textnext]}>Next</Text>
            </TouchableOpacity>
        </View>

    )
}

export default ConfirmCode

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#7a51ed',
        alignItems:'center',
    },
    textnext:{
        color:'#ffff',
        fontSize:20,
        fontWeight:'bold'
    }
})