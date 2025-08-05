import React, { ReactNode } from 'react'
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { InputComponent } from './InputComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';

//componente reutilizable
interface Props {
    children: ReactNode; //cualquier elemento de react (texto, imagen, arreglos, inputs, etc)
}

export const BodyComponent = ({ children }: Props) => {

    //hook useWindowDimension permite obtener las dimensiones de la pantalla
    const { height } = useWindowDimensions();
    //Navegacion por hooks de Reack Native  
    const navigation = useNavigation();

    return (
        <View style={{
            ...styles.container,
            height: height * 0.78
        }}>
            {children}
            <Text style={styles.textoSubtitulo}>Ingrese su nombre: </Text>
            <InputComponent/>
            <Text style={styles.textoSubtitulo}>Ingrese su apellido: </Text>
            <InputComponent/>
            <Text style={styles.textoSubtitulo}>Ingrese su correo: </Text>
            <InputComponent/>
            <Text style={styles.textoSubtitulo}>Ingrese su usuario: </Text>
            <InputComponent/>
            <Text style={styles.textoSubtitulo}>Ingrese su contraseña: </Text>
            <InputComponent/>
            {/* Boton de regreso */}
            <TouchableOpacity style={styles.botonEstilo} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                <Text style={styles.textoBotonEstilo}>REGISTRARME</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2e8f0f6',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingTop: 30,

    },
    textoSubtitulo: {
        alignSelf: 'baseline',
        paddingTop: 10,
        right: -10,
        fontSize: 15,
        fontWeight: 'bold',
    },
    botonEstilo: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'center',
    },
    textoBotonEstilo: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});