import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert,Image} from 'react-native';

import Jeneng from './Jeneng';

export default class Judul extends Component{
	redirect()
	{
			Alert.alert = ("This Button is ready")
			
	}

	render(){
		return(
			<View style = {styles.container}>
            <Jeneng/>
			<Image source ={require('./wee.jpg')} style={{width: 250, height: 230}}/> 
			<Text style = {warna.aye}> Halo! </Text>
			<Text style = {salon.hore} > Nama : Wijil Puspitajati</Text>
			<Text style = {salon.hore} > Kelas : XI RPL 2 </Text>
			<Text style = {salon.hore} > No. Absen : 36</Text>
            <Text style = {salon.hore} > SMK Telkom Purwokerto</Text>
			   <Text style = {{ marginBottom : 100}}></Text>
			   <Button title = " Next " color = "#d35400" onPress = {() => {this.redirect()}}/>
			</View>


			)
	}
}

const styles = StyleSheet.create({
	container : {
	flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#f6e58d',
	}
});
const warna = {
	aye  : {
		color : "#d35400",
		fontSize : 20,
		fontWeight : 'bold',
	}
}

const salon = {
	hore : {
		color : "#d35400",
		fontSize : 16,
	}
}