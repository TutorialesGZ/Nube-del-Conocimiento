import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../screens/Inicial';
import Login  from '../screens/Login';
import {Index} from '../screens/Index';
import { PerfilAlumno } from '../screens/PerfilAlumno';


export type RootStackParams = {
  Inicial: undefined,
  Login: undefined,
  Index: {correo: string, nombre: string, password: string, aPaterno: string, aMaterno: string},
  PerfilAlumno: {correo: string, nombre: string, password: string, aPaterno: string, aMaterno: string},
}

const Stack = createStackNavigator();

export const Rutas = () => {
  return (
    <Stack.Navigator
     screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: 'white'
        }
     }}
    >
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="PerfilAlumno" component={PerfilAlumno} />
    </Stack.Navigator>
  );
}