import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class FirstScreen extends Component {
	render() {
		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f50057'}}>
				<Text>FirstScreen</Text>
			</View>
		)
	}
};

