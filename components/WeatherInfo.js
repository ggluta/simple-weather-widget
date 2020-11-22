import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../utils/colors';

export default function WeatherInfo({ currentWeather }) {
	const { main: { temp }, weather: [ { icon, main, description } ], name } = currentWeather;
	const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;
	return (
		<View style={styles.container}>
			<Text style={styles.locationName}>{name}</Text>
			<Image style={styles.weatherIcon} source={{ uri: iconURL }} />
			<Text style={styles.temperature}>{temp}°</Text>
			<Text style={styles.weatherDescription}>{description}</Text>
			<Text style={styles.mainForecast}>{main}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	locationName: {
		fontSize: 25,
		color: colors.FIFTH,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
	weatherIcon: {
		width: 100,
		height: 100
	},
	temperature: {
		fontSize: 70,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: colors.THIRST_COLOR
	},
	weatherDescription: {
		textTransform: 'uppercase',
		fontSize: 15,
		color: colors.FIFTH,
		fontWeight: 'bold'
	},
	mainForecast: {
		fontSize: 20,
		marginTop: 10,
		textTransform: 'uppercase',
		color: colors.FIFTH,
		fontWeight: 'bold'
	}
});
