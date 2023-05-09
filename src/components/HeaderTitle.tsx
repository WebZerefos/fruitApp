import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type HeaderProps = {
	title: string
}

const HeaderTitle = ({ title }: HeaderProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

export default HeaderTitle

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
	},
	title: {
		fontSize: 40,
		fontWeight: '700',
		color: '#606060',
	},
})
