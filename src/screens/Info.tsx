import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import LinearGradient from 'react-native-linear-gradient'

import Icon from 'react-native-vector-icons/Feather'

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
					<Animatable.Image
						animation='zoomIn'
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
						<Text style={styles.textButton}>
							Start{' '}
							<Icon
								name='arrow-right-circle'
								style={styles.icon}
							/>
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.goBack()}
						style={styles.backButton}
					>
						<Icon
							name='arrow-left-circle'
							style={styles.backIcon}
						/>
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
		position: 'relative',
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
		paddingVertical: 10,
		borderRadius: 50,
		marginTop: 15,
		width: '40%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textButton: {
		fontSize: 25,
		color: '#ffffff',
		fontWeight: 'bold',
	},
	icon: {
		fontSize: 25,
	},
	backButton: {
		position: 'absolute',
		left: 30,
		top: 30,
	},
	backIcon: {
		fontSize: 30,
		color: '#ffffff',
	},
})
