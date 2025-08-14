import { StyleSheet } from 'react-native';
import { SECONDARY_BACKGROUNDCOLOR, PRIMARY_BACKGROUNDCOLOR, MENU_COLOR, TERTIARY_COLOR } from "../commons/constants";

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
        left: 6,
        top: 19,
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
        alignSelf: 'center',
        padding: 15,
        marginVertical: 10,
        backgroundColor: PRIMARY_BACKGROUNDCOLOR,
        borderRadius: 10,
        width: '90%'
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
        bottom: 25,
        right: 25
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
    headerModal: {
        alignSelf: 'center',
        width: '90%',
        marginBottom: 10
    },
    containerIcon: {
        position: 'absolute',
        right: 0,
        padding: 5,
    },
    titleModal: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    imageModal: {
        width: 160,
        height: 160,
        borderRadius: 10
    },
    containerImageM: {
        alignItems: 'center',
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        height: 40,
        width: 40,
        backgroundColor: TERTIARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 25
    },
    buttonQuantityText: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonAddCart: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: SECONDARY_BACKGROUNDCOLOR,
        marginTop: 15,
        paddingVertical: 10,
        borderRadius: 10,
        height: 45,
        width: '80%'
    },
    buttonAddCartText: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold'
    },
    textModal: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        backgroundColor: 'red',
        width: '65%',
        padding: 10,
        borderRadius: 10
    }
})