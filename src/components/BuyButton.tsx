import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'

import { AntDesign } from "@expo/vector-icons"

export default function BuyButton() {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn}>
                <AntDesign
                    name="shoppingcart"
                    size={24}
                    color={"white"}
                    style={styles.icon}
                />
                <Text style={styles.textBtn}> Buy This </Text>
            </TouchableOpacity>


        </View>
    )
}



const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#3b82f6',
        padding: 8,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        top: '20%'
    },
    btn: {
        flexDirection: 'row',

    },
    textBtn: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        marginRight: 10
    }

});