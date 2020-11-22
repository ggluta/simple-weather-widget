import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as LocationService from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
import WeatherDetails from './components/WeatherDetails';
import colors from './utils/colors';
import UnitsPicker from './components/UnitsPicker';
import Reload from './components/Reload';

const WEATHER_API_KEY = 'e2ffcc008ccce07207b633e4307c6cea';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
	const [ errorMessage, setErrorMessage ] = useState(null);
	const [ currentWeather, setCurrentWeather ] = useState(null);
	const [ unitsSystem, setUnitsSystem ] = useState('metric');

	useEffect(
		() => {
			load();
		},
		[ unitsSystem ] // every time this changes, it's gonna call 'load'
	);

	async function load() {
		setCurrentWeather(null);
		setErrorMessage(null);

		try {
			let { status } = await LocationService.requestPermissionsAsync();
			if (status !== 'granted') {
				setErrorMessage('Access to location is needed to run the app');
			}
			const location = await LocationService.getCurrentPositionAsync();
			const { latitude, longitude } = location.coords;
			const weatherURL = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
			const response = await fetch(weatherURL);
			const result = await response.json();
			if (response.ok) {
				setCurrentWeather(result);
			} else {
				setErrorMessage(result.message);
			}
		} catch (err) {
			setErrorMessage(err.message);
		}
	}

	if (currentWeather) {
		return (
			<View style={styles.container}>
				<Reload load={load} />
				<UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
				<View>
					<WeatherInfo currentWeather={currentWeather} />
				</View>
				<WeatherDetails currentWeather={currentWeather} unitsSystem={unitsSystem} />
			</View>
		);
	} else if (errorMessage) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{errorMessage}</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.PRIMARY_COLOR,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2
	},
	text: {
		color: '#000'
	}
});
