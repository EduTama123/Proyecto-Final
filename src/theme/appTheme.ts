import { StyleSheet } from 'react-native';
import { SECONDARY_BACKGROUNDCOLOR, PRIMARY_BACKGROUNDCOLOR, MENU_COLOR } from "../commons/constants";

//genstion de estilos
export const styles = StyleSheet.create({
    containerStart: {
        flex: 1,
        backgroundColor: PRIMARY_BACKGROUNDCOLOR,
    },
    containerBackground: {
        flex: 1,
        backgroundColor: SECONDARY_BACKGROUNDCOLOR,
    },
    decorationStart: {
        flex: 1,
        position: 'absolute',
        bottom: '52%',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 270,
    },
    imagen: {
        width: '100%',
        height: '62%',
        position: 'relative',
        left: 10,
        top: 14,
    },
    containerImage: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    containerForm: {
        marginVertical: 10,
        marginHorizontal: 30,
    },
    containerInput: {
    },
    containerInputSuperpuesto: {
        width: '50%',
        position: 'absolute',
        right: 0
    },
    iconForm: {
        position: 'absolute',
        bottom: 11,
        right: 15
    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        padding: 20,
        margin: 15,
        backgroundColor: MENU_COLOR,
        borderRadius: 10
    },
    iconModal: {
        backgroundColor: 'green',
        position: 'absolute',
        right: 0,
        bottom: 0,
    }
})