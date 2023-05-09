import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import LinearGradient from 'react-native-linear-gradient'
import HeaderTitle from '../components/HeaderTitle'

import Icon from 'react-native-vector-icons/Feather'
import Separator from '../components/Separator'

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({ route, navigation }: DetailProps) => {
	const [toogle, setToogle] = useState(false)
	const { fruit } = route.params

	const toogleHandler = () => {
		setToogle(!toogle)
	}

	return (
		<View style={styles.container}>
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

					<TouchableOpacity
						onPress={() => navigation.popToTop()}
						style={styles.backButton}
					>
						<View style={styles.backButtontxt}>
							<Icon
								name='arrow-left-circle'
								style={styles.backIcon}
							/>
						</View>
					</TouchableOpacity>
				</LinearGradient>
			</View>
			<View style={styles.infoContainer}>
				<View>
					<HeaderTitle title={fruit.title} />
				</View>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View>
						<Text style={styles.description}>{fruit.description}</Text>
					</View>

					<Pressable
						onPress={toogleHandler}
						style={styles.toogleButton}
					>
						<View style={styles.toogleIcon}>
							<Text style={styles.toogleText}>Nutritional value per 100 g</Text>
							<Icon
								name={toogle ? 'arrow-down-circle' : 'arrow-up-circle'}
								style={styles.icon}
							/>
						</View>
						{toogle && (
							<View>
								{fruit.nutrition.map((n, index) => (
									<View key={index}>
										<View
											style={{ borderWidth: 0.3, borderColor: '#ffffff', marginVertical: 20 }}
										/>
										<Text>{n}</Text>
									</View>
								))}
							</View>
						)}
					</Pressable>
				</ScrollView>
			</View>
		</View>
	)
}

export default Details

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 30,
	},
	imageContainer: {
		flex: 1,
	},
	gradient: {
		alignItems: 'center',
		position: 'relative',
	},
	image: {
		marginTop: 20,
		width: '80%',
		height: '100%',
		resizeMode: 'contain',
	},
	infoContainer: {
		flex: 1,
		paddingHorizontal: 15,
	},
	backButton: {
		position: 'absolute',
		left: 20,
		top: 50,
	},
	backButtontxt: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	backIcon: {
		fontSize: 30,
		color: '#ffffff',
		marginRight: 5,
	},
	backText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#ffffff',
	},
	description: {
		textAlign: 'justify',
		marginBottom: 10,
		lineHeight: 25,
		fontSize: 15,
	},
	toogleButton: {
		backgroundColor: '#cececece',
		padding: 10,
		borderRadius: 15,
	},
	toogleIcon: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 5,
	},
	toogleText: {
		fontSize: 20,
		fontWeight: '600',
	},
	icon: {
		fontSize: 30,
	},
})
