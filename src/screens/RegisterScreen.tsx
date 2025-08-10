import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TitleComponent } from '../components/TitleComponents';
import { TextComponent } from '../components/TextComponent';
import { TERTIARY_COLOR } from '../commons/constants';

export const RegisterScreen = () => {
    return (
        <View style={styles.containerForms}>
            <TitleComponent title='SWEET TIME' fontSize={50} marginTop={50} marginHorizontal={0} paddingVertical={20} backgroundColor={TERTIARY_COLOR} />
            <View style={styles.containerImage}>
                <Image
                    source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/032/736/579/non_2x/auditor-icon-vector.jpg'
                    }}
                    style={styles.avatar} />
            </View>
            <TextComponent title='Iniciar Sesión' fontSize={30} />
        </View>

    );
};
