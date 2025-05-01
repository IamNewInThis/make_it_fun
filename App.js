import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import Pruebas from './views/Pruebas';
import PlayersList from './views/PlayersList';
import AddPlayers from './views/AddPlayers';
import WheelScreen from './views/WheelScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Pruebas" component={Pruebas} />
        <Stack.Screen name="PlayersList" component={PlayersList} options={{ headerShown: false }} />
        <Stack.Screen name="AddPlayer" component={AddPlayers} options={{ headerShown: false }} />
        <Stack.Screen name="Wheel" component={WheelScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

