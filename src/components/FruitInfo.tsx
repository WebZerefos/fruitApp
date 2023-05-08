import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type fruitProps = PropsWithChildren<{
	fruit: Fruit
}>

const FruitInfo = ({ fruit }: fruitProps) => {
	return (
		<View>
			<Image
				source={require(fruit.image)}
				style={styles.image}
			/>
		</View>
	)
}

export default FruitInfo

const styles = StyleSheet.create({
	container: {},
	image: {
		width: '100%',
		height: '100%',
	},
})
