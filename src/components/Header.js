import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/themed';
import { Header as HeaderRNE } from '@rneui/themed';

const Header = (props) => {
    const { title = 'Pilar Tecno', leftComponent, rightComponent } = props

    return (
        <>
            <HeaderRNE
                leftComponent={leftComponent ? leftComponent : ({
                    icon: 'menu',
                    color: '#fff',
                })}

                rightComponent={
                    rightComponent ? rightComponent :
                        (
                            <View style={styles.headerRight}>
                                <TouchableOpacity
                                    style={{ marginLeft: 10 }}
                                    onPress={() => console.log('Cohete!')}>
                                    <Icon type="antdesign" name="rocket1" color="white" />
                                </TouchableOpacity>
                            </View>

                        )
                }
                centerComponent={{ text: title, style: styles.heading }}
            />
        </>
    );
}
const styles = StyleSheet.create({

    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Header;
