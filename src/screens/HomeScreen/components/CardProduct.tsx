import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';
import { SECONDARY_BACKGROUNDCOLOR, TERTIARY_COLOR } from '../../../commons/constants';

//interface para las propiedades
interface Props {
    item: Product
}


export const CardProduct = ({ item }: Props) => {
    //hook useState para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    return (

        <View>
            <View style={style.containerCard}>
                <Image source={{ uri: item.pathImage }} style={style.image} />
                <View style={style.containerNose}>
                    <View>
                        <Text style={style.title}>{item.name}</Text>
                        <Text> Precio: ${item.price.toFixed(2)}</Text>
                    </View>
                    <View style={style.containerIcon}>
                        <Icon name='add-shopping-cart'
                            size={30}
                            color={'black'}
                            onPress={() => setShowModal(!showModal)}
                        />
                    </View>
                </View>
            </View>
            <ModalProduct visible={showModal} item={item} setShowModal={() => setShowModal(!showModal)} />
        </View>
    )
}

const style = StyleSheet.create({
    containerCard: {
        backgroundColor: SECONDARY_BACKGROUNDCOLOR,
        borderRadius: 30,
        flex: 1,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    containerNose: {
        width: '100%',
        paddingTop: 10,
        backgroundColor: TERTIARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    image: {
        width: 130,
        height: 130,

    },
    containerIcon: {
        marginVertical: 7
    }
})