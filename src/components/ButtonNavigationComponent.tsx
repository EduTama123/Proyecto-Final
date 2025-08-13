import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

//componente reutilizable
interface Props {    //propiedades dinamicas para cambiar su valor
    textButton: string;
    screen?: string;
    onPress?: () => void;
    width?: any;
    paddingVertical?: number;
    marginVertical?: number;
    marginTop?: number;
    borderRadius?: number;
    backgroundColor?: string;
    fontSize?: number;
}

export const ButtonNavigationComponent = ({  //valores por defecto
    textButton,
    screen,
    onPress,
    width = '70%',
    marginTop = 0,
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
        if (onPress) {
            onPress(); // Si hay función personalizada, la ejecuta
        } else if (screen) {
            // Navega a la pantalla especificada
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
                    marginTop,
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