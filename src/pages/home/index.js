import React from 'react';
import {
    ActivityIndicator,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
    Pressable
} from 'react-native';
import { Icon } from '@rneui/base';
import Header from '../../components/Header';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Home = (props) => {
    const isDarkMode = useColorScheme() === 'dark';

    const handlePressHome = () => {
        console.log('Hola desde Home!')
        props.navigation.navigate("Home")
    }
    const handlePressProfile = () => {
        console.log('Hola desde Perfil!')
        props.navigation.navigate("PerfilTab")
    }
    const handlePressLists = () => {
        console.log('Hola desde Lists!')
        props.navigation.navigate("ListsTab")
    }
    const handlePressMapa = () => {
        console.log('Hola desde Mapa!')
        props.navigation.navigate("MapasTab")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                <View style={{ ...styles.gridColumn, justifyContent: 'flex-end', paddingBottom: '5%', flex: 1 }}>
                    <Pressable style={{ ...styles.gridButton, backgroundColor: 'red' }} onPress={handlePressHome}>
                        <Text style={{ ...styles.buttonTitle }}>Home</Text>
                    </Pressable>

                </View>
                <View style={{ ...styles.gridColumn, justifyContent: 'flex-end', paddingBottom: '5%', flex: 1 }}>
                    <Pressable style={{ ...styles.gridButton, backgroundColor: 'pink' }} onPress={handlePressLists}>
                        <Text style={{ ...styles.buttonTitle }}>Lists</Text>

                    </Pressable>
                </View>
            </View>
            <View style={{ ...styles.gridRow, flexDirection: 'row' }}>
                <View style={{ ...styles.gridColumn, justifyContent: 'flex-start', paddingTop: '5%', flex: 1 }}>
                    <Pressable style={{ ...styles.gridButton, backgroundColor: 'blue' }} onPress={handlePressMapa}>
                        <Text style={{ ...styles.buttonTitle }}>Mapa</Text>

                    </Pressable>
                </View>
                <View style={{ ...styles.gridColumn, justifyContent: 'flex-start', paddingTop: '5%', flex: 1 }}>
                    <Pressable style={{ ...styles.gridButton, backgroundColor: 'green' }} onPress={handlePressProfile}>
                        <Text style={{ ...styles.buttonTitle }}>Perfil</Text>

                    </Pressable>
                </View>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        height: HEIGHT,
        width: WIDTH,
        backgroundColor: 'red'
    },
    gridColumn: {
        flex: 1,
        alignItems: 'center'
    },
    gridRow: {
        flex: 1,
    },
    gridButton: {
        backgroundColor: '#606060',
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
        backgroundColor: '#606060'
    }
});

export default Home;
