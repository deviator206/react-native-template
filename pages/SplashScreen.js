
import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import AppStorage from '../storage/AppStorage';
import AppConstant from '../misc/AppConstant';



function SplashScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Splash Screen</Text>

            <Image
                style={styles.stretch}
                source={require('../images/maxresdefault.jpg')}
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 350,
        height: 300,
        resizeMode: 'stretch',
    },
});

export default SplashScreen;
