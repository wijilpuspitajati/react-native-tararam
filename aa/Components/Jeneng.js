import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Jeneng extends Component{
    render(){
        return(
            <Text style={gaya.jeneng}>BIODATA</Text>
        )
    }
}
const gaya ={
    jeneng: {
        color: '#d35400',
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor: '#f6e58d'
    }
}