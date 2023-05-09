import { View, Text } from 'react-native'
import React from 'react'

// Navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Home from './screens/Home'
import Details from './screens/Details'
import Info from './screens/Info'

export type RootStackParamList = {
	Home: undefined
	Info: { fruit: Fruit }
	Details: { fruit: Fruit }
}

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#ffffff',
	},
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Info'
					component={Info}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Details'
					component={Details}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
