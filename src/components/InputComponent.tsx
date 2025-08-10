import React from 'react';
import { DimensionValue, KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';
import { INPUT_COLOR } from '../commons/constants';

interface Props {
    placeholder: string;
    KeyboardType: KeyboardTypeOptions;
    isPassword?: boolean;
    changeForm: (property: string, value: string) => void;
    property: string;
    width?: DimensionValue;
    height?: number;
    marginVertical?: number;
    paddingHorizontal?: number;
}

export const InputComponent = ({   //valores por defecto
    placeholder,
    KeyboardType,
    isPassword = false,
    changeForm,
    property,
    width = '100%',
    height = 47,
    marginVertical = 0,
    paddingHorizontal = 15
}: Props) => {
    return (
        <TextInput
            style={[
                styles.inputText,
                {
                    width,
                    height,
                    marginVertical,
                    paddingHorizontal
                }
            ]}
            placeholder={placeholder}
            keyboardType={KeyboardType}
            secureTextEntry={isPassword}
            onChangeText={(value) => changeForm(property, value)}
        />
    );
};

const styles = StyleSheet.create({
    inputText: {
        fontSize: 17,
        backgroundColor: INPUT_COLOR,
        borderRadius: 50,
        borderWidth: 1,
        bottom: 3
    },
});