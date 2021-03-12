import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 10,
        backgroundColor: '#0F3F75',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
})

export default Header