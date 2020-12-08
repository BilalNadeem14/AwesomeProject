import React, { useState, useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {   //action means howToChangStateObject
    // state === { red: num, green: num, blue: num}
    // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    // followig the convention approach 
    // action === {type: 'change_red' ||... , payload: 15 || -15 
    // || 'green' || 'blue', amount: 15 || -15}
    
    switch (action.type) {
        case 'change_red':
        return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : {...state, red: state.red + action.payload}
/*          
        case 'red': 
        if(state.red + action.amount > 255 || state.red + action.amount < 0) {
            console.log('if stmt executed, state.red: ', state.red)
            return state;
           }
           else {
            console.log('if not worked, state.red: ', state.red)
           return {...state, red: state.red + action.amount} 
           }*/
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : {...state, green: state.green + action.payload} 
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : {...state, blue: state.blue + action.payload}
        default:
            return state;
    }
}


const SquareScreen = () => {
    // const [red, setRed] = useState(0); 
    // const [green, setGreen] = useState(0); 
    // const [blue, setBlue] = useState(0); 
    

    const [state, dispatch] = useReducer(reducer,  { red: 0, green: 0, blue: 0})
    const { red, green , blue } = state;

    const update = () => {
        {console.log('state.red: before dispatch call', state.red)}
        dispatch({ type: 'change_red', payload: COLOR_INCREMENT})
        //state.red = state.red + 1 //this will change the state but will not rerender
        {console.log('state.red: after dispatch call', state.red)}

    }
    //console.log('right after useReducer state.red: ', state.red)
    //dispatch means: runMyReducer

    //console.log(red)
/*
    const setColor = (color, change) => {
        switch (color) {
            case 'red':
              red + change > 255 || red + change < 0 ? null: setRed(red + change)
              return;   
            case 'green':
                green + change > 255 || green + change < 0 ? null: setGreen(green + change)
                return;            
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null: setBlue(blue + change)
                return;
            default:
                return;
        }

    
    /*    //color will be equal to what we are going to change, color === 'red' || 'green', 'blue'
        if (color === 'red') {
            if(red + change > 255 || red + change < 0) {
                return;
            }
            else {
                setRed(red + change)
            }    
        }
    }
*/
//{/*red*/} {/*blue*/}  {/*green*/}
    return (
         <View>
            
            <ColorCounter 
              onIncrease={update}
                //   () => dispatch({ type: 'change_red', payload: COLOR_INCREMENT})} 
              onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}
              color='Red'/>
            <Text>printing red... {state.red}</Text>   
            <ColorCounter 
              onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})}
              onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
              color='Blue'
              />
            <Text>printing blue... {blue}</Text> 
            <ColorCounter
              onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT})}
              onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT})}
              color='Green'/>
            <Text>printing green... {state.green}</Text> 
            <View style={{ 
                height: 150, 
                width: 150, 
                backgroundColor: `rgb(${state.red}, ${state.green}, ${blue})`
                }}
            />
         </View>
     )
}

export default SquareScreen