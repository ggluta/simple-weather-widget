import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';

export default function Reload({ load }) {
	const iconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
	return (
		<View style={styles.reloadGroup}>
			<Text style={styles.reloadText}>RELOAD</Text>
			<Ionicons onPress={load} name={iconName} size={20} color={colors.FIFTH} />
		</View>
	);
}

const styles = StyleSheet.create({
	reloadGroup: {
		position: 'absolute',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '20%',
		top: 60,
		right: 40,
		color: colors.FIFTH
	},
	reloadText: {
		color: colors.FIFTH
	}
});
