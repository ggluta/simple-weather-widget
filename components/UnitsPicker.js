import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../utils/colors';

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
	return (
		<View style={styles.view}>
			<Picker
				style={{ ...styles.picker }}
				selectedValue={unitsSystem}
				onValueChange={(item) => setUnitsSystem(item)}
				mode="dropdown"
				dropdownIconColor={'#ffffff'}
			>
				<Picker.Item label="C°" value="metric" />
				<Picker.Item label="F°" value="imperial" />
			</Picker>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		position: 'absolute',
		top: 45,
		left: 20
	},
	picker: {
		...Platform.select({
			android: {
				left: 50
			}
		}),
		alignItems: 'center',
		justifyContent: 'center',
		color: colors.FIFTH,
		height: 50,
		width: 100,
	}
});
