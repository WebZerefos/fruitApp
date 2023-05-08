import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'

// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
//components
import FruitCard from '../components/FruitCard'
import Separator from '../components/Separator'

//data
import { data } from '../data/data'
import HeaderTitle from '../components/HeaderTitle'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: HomeProps) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<FlatList
					data={data}
					keyExtractor={(item) => item.id}
					ListHeaderComponent={<HeaderTitle title='Fruits' />}
					ItemSeparatorComponent={Separator}
					renderItem={({ item }) => (
						<Pressable>
							<FruitCard fruit={item} />
						</Pressable>
					)}
				/>
			</View>
		</SafeAreaView>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {},
})
