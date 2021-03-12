import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import CreateTodo from "./components/CreateTodo";

export default function App() {
    const [todos, setTodos] = useState([
        {key: '1', text: 'go to school'},
        {key: '2', text: 'read the book'},
        {key: '3', text: 'take a shower'},
        {key: '4', text: 'go to school'}
    ])

    const deleteTodo = key => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.key !== key))
    }
    const addTodo = text => {
        if (text.trim().length > 0) {
            setTodos(prevTodos => [{key: Date.now().toString(), text: text}, ...prevTodos])
        } else {
            Alert.alert('OOPS!', 'the todo can`t be empty', [{text: 'Understood'}])
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header/>
                <View style={styles.content}>
                    <CreateTodo addItem={addTodo}/>
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) => (
                                <ToDoItem item={item} deleteItem={() => deleteTodo(item.key)}/>
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 15,
        flex: 1
    },
    list: {
        marginTop: 10,
        flex: 1
    }
});
