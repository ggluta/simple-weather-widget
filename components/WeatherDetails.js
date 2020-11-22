import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // these views have already < display: flex > by default
import colors from '../utils/colors';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const { PRIMARY_COLOR, SECONDARY_COLOR, THIRST_COLOR, FORTH, FIFTH } = colors;

export default function WeatherDetails({ currentWeather, unitsSystem }) {
	const { main: { feels_like, humidity, pressure }, wind: { speed } } = currentWeather;
	const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`;
	return (
		<View style={styles.weatherDetails}>
			<View style={styles.weatherDetailsRow}>
				<View style={styles.weatherDeatilsBox}>
					<FontAwesome5 name="temperature-low" size={25} color={FIFTH} style={{}} />
					<View style={styles.weatherDetailsRow}>
						<Text style={styles.weatherDetailsItem}>Feels like </Text>
						<Text style={styles.textSecondary}>{feels_like} °</Text>
					</View>
				</View>
				<View style={styles.weatherDeatilsBox}>
					<MaterialCommunityIcons name="water" size={30} color={FIFTH} />
					<View style={styles.weatherDetailsRow}>
						<Text style={styles.weatherDetailsItem}>Humidity </Text>
						<Text style={styles.textSecondary}>{humidity} %</Text>
					</View>
				</View>
			</View>
			<View style={styles.weatherDetailsRow}>
				<View style={styles.weatherDeatilsBox}>
					<MaterialCommunityIcons name="weather-windy" size={25} color={FIFTH} />
					<View style={styles.weatherDetailsRow}>
						<Text style={styles.weatherDetailsItem}>Wind speed </Text>
						<Text style={styles.textSecondary}>{windSpeed}</Text>
					</View>
				</View>
				<View style={styles.weatherDeatilsBox}>
					<MaterialCommunityIcons name="speedometer" size={30} color={FIFTH} />
					<View style={styles.weatherDetailsRow}>
						<Text style={styles.weatherDetailsItem}>Pressure </Text>
						<Text style={styles.textSecondary}>{pressure} hPa</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	weatherDetails: {
		position: 'absolute',
		bottom: 0,
		borderColor: FIFTH,
		width: '100%',
		height: 'auto',
		margin: 10
	},
	weatherDetailsRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	weatherDeatilsBox: {
		flex: 1, // takes all the space
		padding: 20
	},
	weatherDetailsItem: {
		fontSize: 20,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		color: colors.FIFTH
	},
	textSecondary: {
		color: colors.THIRST_COLOR,
		fontWeight: 'bold',
		fontSize: 18,
		margin: 7
	}
});
