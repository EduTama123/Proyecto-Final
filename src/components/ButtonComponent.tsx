import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TERTIARY_COLOR } from '../commons/constants';

interface Props { //propiedades
    textButton: string;
    handleLogin: () => void;
    fontSize?: number;
}

export const ButtonComponent = ({ textButton, handleLogin, fontSize=15 }: Props) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={handleLogin}>
            <Text style={[styles.buttonText, {fontSize}]}>{textButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '30%',
        alignSelf: 'center',
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        marginTop: 5,
        borderRadius: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
});