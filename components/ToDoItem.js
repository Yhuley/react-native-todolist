import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const ToDoItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity>
            <View  style={styles.item}>
                <MaterialIcons name={'delete-outline'} size={24} onPress={deleteItem}/>
                <Text style={styles.text} >{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        marginTop: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        marginHorizontal: 10
    }
})

export default ToDoItem