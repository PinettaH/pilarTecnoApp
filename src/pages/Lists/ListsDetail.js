import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Header from '../../components/Header';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Detalle = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                <Text style={{ fontSize: 20 }}>Detalle</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        height: HEIGHT,
        width: WIDTH,
    },
    gridColumn: {
        flex: 1,

        alignItems: 'center'
    },
    gridRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridButton: {
        width: WIDTH * .4,
        height: WIDTH * .4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 3,
    },
    buttonTitle: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
        elevation: 3,
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    }
});

export default Detalle;