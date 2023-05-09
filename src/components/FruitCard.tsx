import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

import LinearGradient from 'react-native-linear-gradient'

type fruitProps = PropsWithChildren<{
	fruit: Fruit
}>

const FruitCard = ({ fruit }: fruitProps) => {
	const colors = fruit.gradientColors
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<LinearGradient
					colors={fruit.gradientColors}
					style={styles.gradient}
				>
					<Image
						source={{ uri: fruit.image }}
						style={styles.image}
					/>
				</LinearGradient>
				<View style={styles.textInfo}>
					<Text style={styles.title}>{fruit.title}</Text>
					<Text style={styles.headline}>{fruit.headline}</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default FruitCard

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	gradient: {
		borderRadius: 7,
		marginBottom: 10,
		padding: 5,
	},
	image: {
		width: 80,
		height: 80,
		resizeMode: 'contain',
	},
	textInfo: {
		width: '70%',
		marginLeft: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		marginBottom: 5,
		color: '#606060',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,

		elevation: 1,
	},
	headline: {
		color: '#687387',
		fontWeight: '500',
	},
})
