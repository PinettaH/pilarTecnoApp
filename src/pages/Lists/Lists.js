import React, { useState, useEffect, useCallback } from 'react';
import {
    RefreshControl,
    View,
    Dimensions,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Text, Avatar, Button, Icon, ListItem } from 'react-native-elements';
import Header from '../../components/Header';
import { getPokemonList, IMG_URL } from '../../api';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const IMAGEN_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Listas = (props) => {
    const [pokemons, setPokemons] = useState()
    const [next, setNext] = useState();
    const [refreshing, setRefreshing] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        getPokemonList().then(data => {
            setPokemons(data.results)
            setNext(data.next)
        })
    }, [pokemons])

    const loadMore = () => {
        setLoadingMore(true);
        getPokemonList(next).then(data => {
            setPokemons([...pokemons, data.results])
            setNext(data.next)
            setLoadingMore(false)
        })
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        console.log("refreshing")
        wait(2000).then(() => setRefreshing(false))
    }, [])

    const renderItem = (item) => {
        const path = item.url.split('/')
        const imgID = path[6]
        return (
            <TouchableOpacity onPress={() => {
                console.log(item)
                props.navigation.navigate('ListsDetail', item = { item })
            }}
                style={{ marginVertical: '1%', alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: '#707070', borderRadius: 5 }}>
                <View style={{ WIDTH }}>
                    <View>
                        <ListItem.Title>{item.name}</ListItem.Title>
                    </View>
                    <Avatar size='large' source={{ uri: `${IMAGEN_URL}/${imgID}.png` }} />
                </View>

            </TouchableOpacity>
        )
    }

    const ItemTmp = ({ title }) => (
        <View>
            <Text>{title}</Text>
        </View>
    )
    const handlePress = () => {
        props.navigation.navigate('ListsDetail')
    }

    return (

        <View style={styles.container}>
            <View style={styles.mainContent}>
                <Header />
                {

                    pokemons &&
                    <View>
                        <FlatList
                            data={pokemons}
                            bounces={false}
                            renderItem={(item, index) => renderItem(item.item, index)}
                            keyExtractor={(item, index) => index}
                            style={{ marginTop: HEIGHT / 20 }}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={() => onRefresh}
                                />
                            }
                            ListFooterComponent={
                                loadingMore ?
                                    (<ActivityIndicator />)
                                    :
                                    (<Button title='Cargar mas' onPress={() => loadMore()} />)
                            }
                        />
                    </View>
                }
            </View>
        </View>
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
    mainContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    }
});

export default Listas;