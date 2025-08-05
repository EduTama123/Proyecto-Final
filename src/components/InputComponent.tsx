import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { INPUT_COLOR } from '../commons/constants'

export const InputComponent = () => {
    return (
        <TextInput
            style={styles.inputText}
            keyboardType='default'
        />
    )
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: INPUT_COLOR,
        alignSelf: 'center',
        height: 50,
        width: '98%',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#000000ff',
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 16,
    },

})