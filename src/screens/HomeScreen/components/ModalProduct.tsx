import React, { useState } from 'react'
import { Alert, Image, Modal, Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../../../theme/appTheme'
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

//interface para las proipiedades
interface Props {
    visible: boolean;
    item: Product;
    setShowModal: () => void;
    updateStock: (id: number, quantity: number) => void;
}

export const ModalProduct = ({ visible, item, setShowModal, updateStock }: Props) => {

    //hoohk useWindowsDimensions permite tomar la dimension de la pantalla
    const { width } = useWindowDimensions();

    //hook useState para manejar el estado del contador
    const [quantity, setQuantity] = useState<number>(1);

    //funcion para agregar al carrito
    const handleAddCart = () => {
        updateStock(item.id, quantity); //llamar funcion para actualizar stock
        //cerrar modal
        setShowModal();
        //reiniciar contador
        setQuantity(1);
        Alert.alert('Compra exitosa! ', 'Muchas gracias por comprar nuestro producto');
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true} statusBarTranslucent={true}>
            <View style={styles.containerModal}>
                <View style={{ ...styles.modal, width: width * 0.80 }}>
                    <View style={styles.containerIcon}>
                        <Icon name='cancel'
                            size={26}
                            color={'red'}
                            onPress={setShowModal}
                        />
                    </View>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>{item.name} - $ {item.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.containerImageM}>
                        <Image source={{ uri: item.pathImage }} style={styles.imageModal} />
                    </View>
                    {
                        (item.stock == 0)
                            ? <Text style={styles.textModal}>Producto Agotado</Text>
                            :
                            <View>
                                <View style={styles.containerQuantity}>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)} disabled={quantity == 1}>
                                        <Text style={styles.buttonQuantityText}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.textQuantity}>{quantity}</Text>

                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)} disabled={quantity >= item.stock}>
                                        <Text style={styles.buttonQuantityText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textQuantity}>Total : $ {(item.price * quantity).toFixed(2)}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.buttonAddCart}
                                        onPress={handleAddCart}>
                                        <Text style={styles.buttonAddCartText}>Agregar carrito</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                </View>
            </View>
        </Modal>
    )
}