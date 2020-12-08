import React, {useState, useReducer} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {    //action => how to change state
    console.log('hello')
    let x = 5
    let obj =  {x, count2: state.count + 1}

    console.log('obj: ', obj)
    switch (action.type) {
        case 'increment':   //number should be state.count
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return { ...state, count: state.count - action.payload}
        default:
            return state
    }
}
//
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    let counter = 0
    const [count, setCount] = useState(0)
    console.log(Object.keys(useState))
    return (
        <View>
            <Text>Counter Screen WITH HOOKS</Text>
            <Button 
              title="increase Count"
              onPress={() => {
                  //count++
                  setCount(count + 1)
                  //dispatch({ type: 'increment', payload: 1})
              }}
            />
            <Button 
              title="decrease Count"
              onPress={() => {
                  //count--
                  setCount(count - 1)
              }}
            />
            <Text>Count: {count}</Text>

            <Text>Counter Screen WITH REDUCER</Text>
            <Button 
              title="increase Count"
              onPress={() => {
                  //count++
                  //setCount(count + 1)
                  dispatch({ type: 'increment', payload: 1})
              }}
            />
            <Button 
              title="decrease Count"
              onPress={() => {
                  //count--
                  //setCount(count - 1)
                  dispatch({ type: 'decrement', payload: 1})
              }}
            />
            <Text>Reducer state.count: {state.count}</Text>
        </View>
    )

}

const styles = StyleSheet.create({});

export default CounterScreen;