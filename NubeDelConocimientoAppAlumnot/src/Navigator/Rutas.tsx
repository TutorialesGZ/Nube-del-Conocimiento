import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../screens/Inicial';
import Login  from '../screens/Login';
import {Index} from '../screens/Index';
import { PerfilAlumno } from '../screens/PerfilAlumno';
import { PrototipoMapa } from '../screens/PrototipoMapa';
import { SignosDePuntuacionAct1 } from '../screens/SignosDePuntuacionAct1';


export type RootStackParams = {
  Inicial: undefined,
  Login: undefined,
  Index: {numControl: string,correo: string, nombre: string, password: string, aPaterno: string, aMaterno: string, apodo: string},
  PerfilAlumno: {numControl: string, correo: string, nombre: string, password: string, aPaterno: string, aMaterno: string, apodo: string},
  Mapa: undefined,
  SignosDePuntuacionAct1: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

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
      <Stack.Screen name="Mapa" component={PrototipoMapa} />
      <Stack.Screen name="SignosDePuntuacionAct1" component={SignosDePuntuacionAct1} />
    </Stack.Navigator>
  );
}