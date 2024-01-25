import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'


export default function ButtonNext() {
    return (
        <View style={styles.buttonContainer}>
            <Button title="<" />
            <Text style={styles.textPrice}>  </Text>
            <Button title=">" />

        </View>
    )
}



const styles = StyleSheet.create({
    buttonContainer: {
        padding: 8,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: 8,
        top: '38%',
        flexDirection: 'row',
        paddingBottom: 10,
        marginTop: 10,

    },
    textPrice: {
        color: '#fff',
        fontWeight: 'bold'
    }


});