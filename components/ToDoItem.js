import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

const ToDoItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity onPress={deleteItem}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
})

export default ToDoItem