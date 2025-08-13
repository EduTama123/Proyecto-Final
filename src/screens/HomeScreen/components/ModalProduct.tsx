import React from 'react'
import { Modal, Text, View } from 'react-native'
import { styles } from '../../../theme/appTheme'
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

//interface para las proipiedades
interface Props {
    visible: boolean;
    item: Product;
    setShowModal: ()=> void;
}

export const ModalProduct = ({ visible, item, setShowModal}: Props) => {
    return (
        <Modal visible={visible} animationType='fade' transparent={true} statusBarTranslucent={true}>
            <View style={styles.containerModal}>
                <View style={styles.modal}>
                    <View>
                        <Icon name= 'cancel' 
                        size={20} 
                        color={'red'}
                        onPress={setShowModal}
                        style={styles.iconModal}
                        />
                    </View>
                    <Text>{item.name}</Text>
                </View>
            </View>
        </Modal>
    )
}