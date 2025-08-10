import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SECONDARY_BACKGROUNDCOLOR } from '../commons/constants';

//componente reutilizable
interface Props {    //propiedades dinamicas para cambiar su valor
    title: string;
    fontSize?: number;
    marginTop?: number;
    marginHorizontal?: number;
    backgroundColor?: string;
    paddingVertical?: number;
    color?: string;
}

export const TitleComponent = ({  //valores por defecto
    title,
    fontSize = 50,
    marginTop = 0,
    marginHorizontal = 100,
    paddingVertical = 0,
    backgroundColor = 'transparent',
    color = 'black'
}: Props) => {

    return (
        <View>
            <Text style={[styles.title,
                {
                    fontSize,
                    marginTop,
                    marginHorizontal,
                    paddingVertical,
                    backgroundColor,
                    color
                }
            ]}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    },
});