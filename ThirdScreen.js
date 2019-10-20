import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ThirdScreen extends Component {
	render() {
		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#651fff'}}>
				<Text>ThirdScreen</Text>
			</View>
		)
	}
};

