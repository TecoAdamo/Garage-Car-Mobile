import React from "react";
import { View, Image, StyleSheet } from 'react-native'

import Logo from "../../assets/Lamborghini.png"

export default function LogoBox() {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.imagemLogo} source={Logo} />
        </View>

    )
}

const styles = StyleSheet.create({
    logoContainer: {
        bottom: '22%',
        height: 90,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    imagemLogo: {
        flex: 1,
        width: '65%',
        resizeMode: 'contain'
    }
});