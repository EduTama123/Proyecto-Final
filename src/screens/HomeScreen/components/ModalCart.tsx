import React from 'react'
import { FlatList, Modal, StyleSheet, Text, useWindowDimensions, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../../../theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Cart } from '../HomeScreen';
import { PRIMARY_BACKGROUNDCOLOR } from '../../../commons/constants';

interface Props {
    visible: boolean;
    setShowModal: () => void;
    cart: Cart[];
    clearCart: () => void;
}

export const ModalCart = ({ visible, setShowModal, cart, clearCart }: Props) => {

    const { width } = useWindowDimensions();

    //funcion para calcular el total a pagar
    const totalPay = (): number => {
        let total = 0;
        cart.forEach(product => {
            total += product.total;
        })
        return total;
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true} statusBarTranslucent={true}>
            <View style={styles.containerModal}>
                <View style={{ ...styles.modal, width: width * 0.85 }}>
                    <View style={styles.containerIcon}>
                        <Icon name='cancel'
                            size={26}
                            color={'red'}
                            onPress={setShowModal}
                        />
                    </View>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Mis productos</Text>
                    </View>
                    {
                        (cart.length == 0)
                            ? <Text style={styles.textModal}>Carrito vacío</Text>
                            :
                            <View>
                                <View>
                                    <View style={localStyles.headerTable}>
                                        <Text style={localStyles.textHeaderTable}>Producto</Text>
                                        <View style={localStyles.headerTableInfo}>
                                            <Text style={{ ...localStyles.textHeaderTable, marginHorizontal: 7 }}>Precio</Text>
                                            <Text style={{ ...localStyles.textHeaderTable, marginHorizontal: 5 }}>Cant.</Text>
                                            <Text style={{ ...localStyles.textHeaderTable, marginHorizontal: 12 }}>Total</Text>
                                        </View>
                                    </View>
                                    <FlatList
                                        data={cart}
                                        renderItem={({ item }) =>
                                            <View style={localStyles.headerTable}>
                                                <Text style={localStyles.textProductName}>{item.name}</Text>
                                                <View style={localStyles.headerTableInfo}>
                                                    <Text style={{ marginVertical: 10, width: '25%', marginLeft: 16 }}>$ {item.price.toFixed(2)}</Text>
                                                    <Text style={{ marginVertical: 10, width: '10%', marginLeft: 12 }}>{item.quantity}</Text>
                                                    <Text style={{ marginVertical: 10, width: '27%', marginLeft: 11 }}>$ {item.total.toFixed(2)}</Text>
                                                </View>
                                            </View>
                                        }
                                        keyExtractor={item => item.id.toString()} />
                                </View>
                                <View style={localStyles.containerTotalPay}>
                                    <Text style={localStyles.textTotalPay}>Total a pagar : $ {totalPay().toFixed(2)}</Text>
                                </View>
                                <TouchableOpacity style={styles.buttonAddCart} onPress={() => {
                                    clearCart();
                                    setShowModal();
                                }}>
                                    <Text style={styles.buttonAddCartText}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        </Modal>
    )
}

const localStyles = StyleSheet.create({
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTableInfo: {
        flexDirection: 'row',
    },
    textHeaderTable: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_BACKGROUNDCOLOR
    },
    textProductName: {
        width: '44%',
        marginTop: 10,
        textAlign: 'justify'
    },
    containerTotalPay: {
        alignItems: 'flex-end',
        marginTop: 10,
        right: 10
    },
    textTotalPay: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})