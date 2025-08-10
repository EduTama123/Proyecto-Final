import { StyleSheet } from 'react-native';
import { SECONDARY_BACKGROUNDCOLOR, PRIMARY_BACKGROUNDCOLOR } from "../commons/constants";

//genstion de estilos
export const styles = StyleSheet.create({
    containerStart: {
        flex: 1,
        backgroundColor: PRIMARY_BACKGROUNDCOLOR,
    },
    containerForms: {
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
    container: {
        width: '100%',
        height: '70%',
        marginVertical: '30%',
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
    },
    containerImage: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    containerForm: {
        marginVertical: 5
    },
    iconForm: {
        position: 'absolute',
        bottom: 26,
        right: 6
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    imagen: {
        width: '100%',
        height: '62%',
        position: 'relative',
        left: 10,
        top: 14,
    },
})