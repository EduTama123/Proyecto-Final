import React, { ReactNode } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { MENU_COLOR } from '../commons/constants';

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
        backgroundColor: MENU_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        marginTop: 30
    }
});