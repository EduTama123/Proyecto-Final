import React from 'react';
import { StyleSheet, Text } from 'react-native';

//componente reutilizable
interface Props {    //propiedades dinamicas para cambiar su valor
    title: string;
    fontSize?: number;
    marginVertical?: number;
    marginHorizontal?: number;
    paddingVertical?: number;
    backgroundColor?: string;
    color?: string;
}

export const TextComponent = ({  //valores por defecto
    title,
    fontSize = 20,
    marginVertical = 0,
    marginHorizontal = 50,
    paddingVertical = 0,
    backgroundColor = 'transparent',
    color = 'black',
}: Props) => {
    return (
        <Text style={[
            styles.text,
            {
                fontSize,
                marginVertical,
                marginHorizontal,
                paddingVertical,
                backgroundColor,
                color
            }
        ]}>
            {title}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    }
});