import { Button, StyleSheet } from "react-native";

//genstion de estilos
export const styles = StyleSheet.create({
    imagenFondo: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogin: {
        alignSelf: 'center',
        borderRadius: 8,
        width: '93%',
    },
    containerUsuario: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 10,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
    },
})