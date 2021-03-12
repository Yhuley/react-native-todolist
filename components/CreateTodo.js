import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'

const CreateTodo = ({addItem}) => {
    const [input, setInput] = useState('')

    const changeHandler = val => {
        setInput(val)
    }

    const submitHandler = (input) => {
        addItem(input)
        setInput('')
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                value={input}
                placeholder={'new todo...'}
                onChangeText={changeHandler}
            />
            <Button title={'add todo'} onPress={() => submitHandler(input)} color={'#0F3F75'}/>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
        height: 40,
        borderRadius: 3,
        paddingHorizontal: 5
    }
})

export default CreateTodo