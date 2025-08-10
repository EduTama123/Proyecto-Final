import React from 'react';
import { StyleSheet, Text, DimensionValue } from 'react-native';

//componente reutilizable
interface Props {    //propiedades dinamicas para cambiar su valor
    title: string;
    width?: DimensionValue;
    fontSize?: number;
    marginVertical?: number;
    marginHorizontal?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    backgroundColor?: string;
    color?: string;
}

export const TextComponent = ({  //valores por defecto
    title,
    width,
    fontSize = 20,
    marginVertical = 0,
    marginHorizontal = 50,
    paddingVertical = 0,
    paddingHorizontal = 0,
    textAlign = 'center',
    backgroundColor = 'transparent',
    color = 'black',
}: Props) => {
    return (
        <Text style={[
            styles.text,
            {
                width,
                fontSize,
                marginVertical,
                marginHorizontal,
                paddingVertical,
                paddingHorizontal,
                textAlign,
                backgroundColor,
                color
            }
        ]}>
            {title}
        </Text>
    );
};
//estilos locales
const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    }
});