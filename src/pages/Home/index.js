import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { Bus, car, Hotel, Kereta, Navbar,Other, Pesawat, Resto, Rs, User } from '../../assets/icon'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Home = () => {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <View>
            <Text style={{ color: '#000000', fontSize: 30, fontWeight: 'bold', marginLeft: 160, marginTop: 20}}>Home</Text>
            <Image source={require('../../assets/icon/User.png')} style={{width: 45, height: 45, marginLeft: 320, marginTop: 20}} />
            <Image source={require('../../assets/icon/hotel-2.png')} style={{marginLeft: 40, marginTop: 20}} />
            <Image source={require('../../assets/icon/hotel3.png')} style={{marginLeft: 40, marginTop: 20}} />
            <Image source={require('../../assets/icon/hotel4.png')} style={{marginLeft: 40, marginTop: 20}} />
            <Image source={require('../../assets/icon/Travel.png')} style={{marginLeft: 160, marginTop: 10}} />
            <Text style={{ color: '#000000', fontSize: 30, fontWeight: 'bold', marginLeft: 150, marginTop:3}}>Travel</Text>
            <Image source={require('../../assets/icon/bed.png')} style={{marginLeft: 160, marginTop: 10}} />
            <Text style={{ color: '#000000', fontSize: 30, fontWeight: 'bold', marginLeft: 150, marginTop:3}}>Hotel</Text>
        </View>
    </View>
    )
}

export default Home

const styles = StyleSheet.create({})
    root: {
        alignItems: 'center';
        justifyContent: 'center';
        flex: 1;
    };
    title: {
        fontSize: 22;
        fontWeight: 'bold';
        color: '#000';
    };