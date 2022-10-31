import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableNativeFeedback} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props extends StackScreenProps<any, any>{}

export const Login = ({navigation}:Props) => {
  const [text, setText] = useState('');
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '100%',
          height: '60%',
          borderRadius: 1000,
          top: -350,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            position: 'absolute',
            color: '#FFF',
            top: '75%',
            left: '42%',
          }}>
          Hola
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            position: 'absolute',
            color: '#FFF',
            top: '85%',
            left: '26%',
          }}>
          Aumentamos tú conocimiento
        </Text>
      </View>
      <Image
        style={{
          left: '38%',
          bottom: '37%',
        }}
        source={require('../img/Body.png')}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#2DDA93',
          width: '80%',
          height: '40%',
          top: '35%',
          borderRadius: 50,
          marginHorizontal: '10%',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 'bold',
            left: '30%',
            top: '10%',
          }}>
          Correo electronico
        </Text>
        <TextInput
          style={{
            backgroundColor: '#FFFFFF',
            width: '80%',
            marginHorizontal: '10%',
            top: '15%',
            borderRadius: 10,
          }}
          placeholder="Type here to translate!"
        />
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 'bold',
            left: '40%',
            top: '25%',
          }}>
          Password
        </Text>

        <TextInput
          style={{
            backgroundColor: '#FFFFFF',
            width: '80%',
            marginHorizontal: '10%',
            top: '30%',
            borderRadius: 10,
          }}
          placeholder="Type here to translate!"
        />
        <View style={{
            backgroundColor: '#FFFFFF',
            width: '40%',
            height: '15%',
            borderRadius: 36,
            top: '45%',
            left: '31%',
            shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}>
            <TouchableNativeFeedback
            onPress={() => navigation.navigate('Index')}
            >
                <Text style={{
                             color: '#2DDA93',
                             fontSize: 14,
                             fontWeight: 'bold',
                           marginHorizontal: '15%',
                           marginVertical: '10%'
                }}>
                    Iniciar Sesión
                </Text>
            </TouchableNativeFeedback>
        </View>
      </View>
      <Image
        style={{
          width: '100%',
          height: '10%',
          position: 'absolute',
          top: '92.5%',
        }}
        source={require('../img/Pasto2.png')}
      />
    </View>
  );
};

export default Login;
