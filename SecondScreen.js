import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class SecondScreen extends Component {
	render() {
		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d500f9'}}>
				<Text>SecondScreen</Text>
			</View>
		)
	}
};

