import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

//componente reutilizable
interface Props {    //propiedades dinamicas para cambiar su valor
    textButton: string;
    screen?: string;
    width?: any;
    paddingVertical?: number;
    marginVertical?: number;
    borderRadius?: number;
    backgroundColor?: string;
    fontSize?: number;
}

export const ButtonNavigationComponent = ({  //valores por defecto
    textButton,
    screen,
    width = '70%',
    paddingVertical = 15,
    marginVertical = 20,
    borderRadius = 30,
    backgroundColor = '#f2d5b3',
    fontSize = 15
}: Props) => {

    //Navegacion por hooks de Reack Native    
    const navigation = useNavigation();

    //Funcion para navegar en cualquier ventana
    const funcionNavegacion = () => {
        if (screen) {
            navigation.dispatch(CommonActions.navigate({ name: screen }));
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    width,
                    paddingVertical,
                    marginVertical,
                    borderRadius,
                    backgroundColor
                }
            ]}
            onPress={funcionNavegacion}
        >
            <Text style={[styles.buttonText, { fontSize }]}>
                {textButton}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
});