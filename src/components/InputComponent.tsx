import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native'
import { INPUT_COLOR } from '../commons/constants'


//componente reutuliable
interface Props {    //recibe propiedades de los componentes
    placeholder: string;
    KeyboardType: KeyboardTypeOptions;
    isPassword?: boolean;
    changeForm: (property: string, value: string) => void; //funcion modificar el estado del formulario
    property: string; //propiedades del objeto del formulario
}


export const InputComponent = ({ placeholder, KeyboardType, isPassword, changeForm, property }: Props) => {
    return (
        <TextInput
            style={styles.inputText}
            placeholder={placeholder}
            keyboardType={KeyboardType}
            secureTextEntry= {isPassword}
            onChangeText={(value) => changeForm(property, value)}
        >
        </TextInput>

    )
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: INPUT_COLOR,
        borderRadius: 5,
        paddingHorizontal: 15,
        borderWidth: 0.5,
        marginBottom: 20
    },
})