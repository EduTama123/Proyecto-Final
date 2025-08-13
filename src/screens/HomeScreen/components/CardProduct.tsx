import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';
import { PRIMARY_BACKGROUNDCOLOR, SECONDARY_BACKGROUNDCOLOR } from '../../../commons/constants';

//interface para las propiedades
interface Props {
    item: Product
    updateStock: (id: number, quantity: number) => void;
}


export const CardProduct = ({ item, updateStock }: Props) => {
    //hook useState para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    return (

        <View>
            <View style={style.containerCard}>
                <Image source={{ uri: item.pathImage }} style={style.image} />
                <View style={style.containerCartText}>
                    <View>
                        <Text style={style.title}>{item.name}</Text>
                    </View>
                    <View style={style.containerIcon}>
                        <Icon name='add-shopping-cart'
                            size={40}
                            color={'black'}
                            onPress={() => setShowModal(!showModal)}
                        />
                    </View>
                </View>
            </View>
            <ModalProduct visible={showModal} item={item} setShowModal={() => setShowModal(!showModal)} updateStock={updateStock}/>
        </View>
    )
}

const style = StyleSheet.create({
    containerCard: {
        backgroundColor: SECONDARY_BACKGROUNDCOLOR,
        borderRadius: 22,
        flex: 1,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    containerCartText: {
        width: '100%',
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: PRIMARY_BACKGROUNDCOLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
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