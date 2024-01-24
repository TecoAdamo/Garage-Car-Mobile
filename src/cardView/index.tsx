import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'

import LogoBox from "./logo";

import { CAR_ASSETS_BASE_URL } from "../constants/car";
import BuyButton from "../components/BuyButton";
import ButtonNext from "../components/ButtonNext";


export default function CardView() {
    return (
        <View style={styles.imageContainer}>

            <LogoBox />
            <View style={styles.textContainer}>
                <Text style={styles.carBrand}>Lamborghini</Text>
                <Text style={styles.carName}>Model</Text>
            </View>
            <Image style={styles.image}
                source={{
                    uri: `${CAR_ASSETS_BASE_URL}1.png`
                }} />
            <BuyButton />
            <ButtonNext />
        </View>
    )
}



const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        bottom: '20%',
        alignItems: 'center',
    },
    carBrand: {
        color: 'white',
        fontSize: 18,
        fontStyle: 'italic',
        marginBottom: 5,
    },
    carName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: '90%',
        height: '20%', // Ajuste conforme necessário
        resizeMode: 'contain',
        top: '8%'
    },

});