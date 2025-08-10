import React, { ReactNode } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
//NOTA IMPORTANTE:
//DE MOMENTO NO SE USARÁ ESTE COMPONENTE, AL MOMENTO DE CREAR LA VENTANA DE CARRITO DE COMPRAS
//SE LO USARA PARA MANTENER EL DISEÑO DE TODA LA APLICACION

//Componente reutilizable
interface Props {
    children: ReactNode; //cualquier elemento de react (texto, imagen, etc)
}

export const BodyComponent = ({ children }: Props) => {

    //hook useWindowDimensions permite obtener las dimensiones de la pantalla
    const { height } = useWindowDimensions();
    return (
        <View style = {{
            ...styles.container,
            height: height * 0.88
        }}>
    { children }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 30
    }
});