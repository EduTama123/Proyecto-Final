import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//componente reutilizable
interface Props {    //propiedades dinamicas para cambiar su valor
    title: string;
    fontSize?: number;
    marginTop?: number;
    marginHorizontal?: number;
    backgroundColor?: string;
    paddingVertical?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    color?: string;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const TitleComponent = ({  //valores por defecto
    title,
    fontSize = 50,
    marginTop = 0,
    marginHorizontal = 100,
    paddingVertical = 0,
    backgroundColor = 'transparent',
    borderBottomLeftRadius = 0,
    borderBottomRightRadius = 0,
    color = 'black',
    textAlign= 'center'
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
                borderBottomLeftRadius,
                borderBottomRightRadius,
                color,
                textAlign,
            }
            ]}>
                {title}
            </Text>
        </View>
    )
}
//estilos locales
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        
    },
});