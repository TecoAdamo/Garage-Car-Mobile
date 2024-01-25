import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Button } from 'react-native'

import LogoBox from "./logo";

import { CAR_ASSETS_BASE_URL } from "../constants/car";
import BuyButton from "../components/BuyButton";

import { CarModel } from "./props";

import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";


export default function CardView() {

    const [carData, setCarData] = useState<CarModel | null>(null)

    useEffect(() => {
        (async () => {
            await loadCarData(1, setCarData);

        })();
    }, []);

    return (
        <View style={styles.imageContainer}>

            <LogoBox />
            <View style={styles.textContainer}>
                <Text style={styles.carBrand}>Lamborghini</Text>
                <Text style={styles.carName}>{carData?.carName}</Text>
            </View>
            <Image style={styles.image}
                source={{
                    uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`
                }} />
            <BuyButton />
            <View style={styles.buttonContainer}>
                <Button title="<" onPress={() => handlePreviousItem(carData, setCarData)} />
                <Text style={styles.textPrice}> {carData?.price} </Text>
                <Button title=">" onPress={() => handleNextItem(carData, setCarData)} />

            </View>
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
    buttonContainer: {
        padding: 8,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: 10,
        top: '42%',
        flexDirection: 'row',
        paddingBottom: 10,
        marginTop: 10,

    },
    textPrice: {
        color: '#fff',
        fontWeight: 'bold'
    }

});