import React from 'react'
import { Image, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TitleComponent } from '../components/TitleComponents';
import { TextComponent } from '../components/TextComponent';
import { ButtonNavigationComponent } from '../components/ButtonNavigationComponent';

export const StartScreen = () => {
    return (
        <View style={styles.containerStart}>
            <View style={styles.decorationStart} />
                <Image
                    style={styles.imagen}
                    source={require('../img/postres.png')}
                />
                <TitleComponent title='SWEET TIME'/>
                <TextComponent title='"Los mejores postres para que disfrutes del momento"' />
                <ButtonNavigationComponent
                    textButton='¡Presiona el botón para empezar!'
                    screen='Login' // Navegará a la pantalla 'Login'
                    marginTop={20}
                />
        </View>
    );
};
