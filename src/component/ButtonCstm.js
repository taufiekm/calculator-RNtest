import React, {Component} from 'react'
import {Text ,StyleSheet ,TouchableOpacity, } from 'react-native'

const ButtonCstm = (props) => {
    return (

        <TouchableOpacity
            onPress={props.onPress}
            style={styles.Button}
        >
            
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )

}
export default ButtonCstm;

const styles = StyleSheet.create({
    Button : {
      padding: 8,
      margin:10,
      marginHorizontal: 6,
      borderRadius: 10,
      borderWidth: .5,
      borderColor: 'tomato',
      minWidth: '15%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })