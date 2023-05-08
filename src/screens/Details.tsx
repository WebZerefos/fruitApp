import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import LinearGradient from 'react-native-linear-gradient'

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({ route }: DetailProps) => {
	const { fruit } = route.params

	return (
		<View>
			<Text>{fruit.title}</Text>
		</View>
	)
}

export default Details

const styles = StyleSheet.create({})
