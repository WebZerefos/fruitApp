import { View, Text } from 'react-native'
import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Home from './screens/Home'
import Details from './screens/Details'
import Info from './screens/Info'

export type RootStackParamList = {
	Home: undefined
	Info: { fuit: Fruit }
	Details: { fuit: Fruit }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Info'
					component={Info}
				/>
				<Stack.Screen
					name='Details'
					component={Details}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
