import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import { RootStackParams } from '../Navigator/Rutas';

interface Props extends StackScreenProps<RootStackParams,'PerfilAlumno'>{}

export const PerfilAlumno = ({route,navigation}: Props) => {
  const params = route.params;
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#2DDA93',
          height: '40%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            width: '100%',
            height: '135%',
            borderRadius: 800,
            top: '-10%',
            right: '-60%',
          }}></View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            width: '55%',
            height: '82.5%',
            borderRadius: 800,
            top: '-10%',
            right: '55%',
          }}></View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            width: '55%',
            height: '82.5%',
            borderRadius: 800,
            top: '80%',
            right: '55%',
          }}></View>
        <Image
          source={require('../img/perfil.png')}
        />
        <Text
          style={{
            color: '#FFF',
            fontWeight: 'bold',
            marginTop: 15,
            fontSize: 18,
          }}>
          {params.nombre + " "}
          {params.aPaterno + " "}
          {params.aMaterno}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 24,
          color: '#000',
          fontWeight: 'bold',
          marginLeft: '20%',
          marginTop: '10%',
        }}>
        Apodo
      </Text>
      <TextInput
        style={{
          backgroundColor: '#2DDA93',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
          width: '70%',
          marginLeft: '18%',
          borderRadius: 100,
          paddingLeft: '5%',
        }}
        placeholder = {params.nombre}
      />
      <View
        style={{
          marginTop: '5%',
          backgroundColor: '#2DDA93',
          width: '30%',
          height: '4%',
          borderRadius: 36,
          left: '31%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          marginLeft: '6%'
        }}>
        <TouchableNativeFeedback
        /*onPress={() => navigation.navigate('Index')}*/
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 10,
              fontWeight: 'bold',
              marginHorizontal: '15%',
              marginVertical: '5%',
            }}>
            Establecer Apodo
          </Text>
        </TouchableNativeFeedback>
      </View>
      <Text
        style={{
          fontSize: 24,
          color: '#000',
          fontWeight: 'bold',
          marginLeft: '20%',
          marginTop: '5%',
        }}>
        Correo electrónico
      </Text>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '70%',
          marginLeft: '18%',
          borderRadius: 100,
          paddingLeft: '5%',
          paddingTop: '2%',
          height: '6%',
        }}>
        <Text
          style={{
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {
            params.correo
          }
        </Text>
      </View>
      <Text
        style={{
          fontSize: 24,
          color: '#000',
          fontWeight: 'bold',
          marginLeft: '20%',
          marginTop: '10%',
        }}>
        Contraseña
      </Text>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '70%',
          marginLeft: '18%',
          borderRadius: 100,
          paddingLeft: '5%',
          paddingTop: '2%',
          height: '6%',
        }}>
        <Text
          style={{
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {
            params.password
          }
        </Text>
      </View>
    </View>
  );
};
