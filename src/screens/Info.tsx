import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import LinearGradient from 'react-native-linear-gradient'

type InfoProps = NativeStackScreenProps<RootStackParamList, 'Info'>

const Info = ({ route, navigation }: InfoProps) => {
	const { fruit } = route.params

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.imageContainer}>
				<LinearGradient
					colors={fruit.gradientColors}
					style={styles.gradient}
				>
					<Image
						source={{ uri: fruit.image }}
						style={styles.image}
					/>
					<View>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>{fruit.title}</Text>
						</View>
						<View style={styles.headline}>
							<Text style={styles.headlineTxt}>{fruit.headline}</Text>
						</View>
					</View>

					<TouchableOpacity
						onPress={() => navigation.navigate('Details', { fruit: fruit })}
						style={styles.startButton}
					>
						<Text style={styles.textButton}>Start</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		</SafeAreaView>
	)
}

export default Info

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageContainer: {
		flex: 1,
	},
	gradient: {
		height: '100%',
		marginHorizontal: 10,
		alignItems: 'center',
		borderRadius: 30,
	},
	image: {
		width: '100%',
		height: 300,
		marginTop: '30%',
		resizeMode: 'contain',
	},
	titleContainer: {
		alignItems: 'center',
	},
	title: {
		fontSize: 50,
		fontWeight: '700',
		marginBottom: 5,
		color: '#ffffff',
		shadowColor: '#ffffff',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,

		elevation: 1,
	},
	headline: {
		marginHorizontal: 10,
		marginVertical: 10,
	},
	headlineTxt: {
		fontSize: 20,
		color: '#ffffff',
		textAlign: 'center',
	},
	startButton: {
		borderWidth: 1,
		borderColor: '#ffffff',
		paddingVertical: 15,
		paddingHorizontal: '15%',
		borderRadius: 50,
		marginTop: 15,
	},
	textButton: {
		fontSize: 20,
		color: '#ffffff',
		fontWeight: 'bold',
	},
})
