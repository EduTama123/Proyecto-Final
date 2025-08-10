import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const BackgroundGradiendComponent = () => {
    return (
            <Image
            style={styles.fondoDegradado}
            source={require('../img/fondoDegradado.png')} />

    )
}

const styles = StyleSheet.create({
    fondoDegradado:{
        width: '100%',
        height: '100%',
    }
});