import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';

interface Props extends StackScreenProps<any, any>{}

export const Index = ({navigation}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#D2FCFF',
      }}>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '100%',
          height: '65%',
          borderRadius: 800,
          top: '-50%',
          right: '-10%',
        }}></View>
      <Text></Text>
      <Image
        style={{
          position: 'absolute',
          top: '25%',
          left: '-10%',
        }}
        source={require('../img/nube.png')}
      />
      <Image
        style={{
          position: 'absolute',
          top: '25%',
          left: '77%',
        }}
        source={require('../img/nube.png')}
      />
      <Text
        style={{
          color: '#2DDA93',
          fontWeight: 'bold',
          fontSize: 22,
          position: 'absolute',
          top: '24%',
          left: '23%',
        }}>
        Nube del Conocimiento
      </Text>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.0287)',
          width: '90%',
          height: '8%',
          top: '40%',
          marginHorizontal: '5%',
          borderRadius: 40,
          paddingVertical: '5%',
        }}>
        <TouchableNativeFeedback
        onPress={() => console.log('Play')}
        >
          <View
            style={{
              backgroundColor: '#FFF',
              width: '20%',
              height: '150%',
              borderRadius: 40,
              paddingHorizontal: '5%',
              marginLeft: '8%',
            }}>
            <Text
              style={{
                color: '#2DDA93',
                marginLeft: '15%',
              }}>
              Play
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback 
         onPress={() => navigation.navigate('PerfilAlumno')}
        >
          <View
            style={{
              backgroundColor: '#FFF',
              width: '20%',
              height: '150%',
              borderRadius: 40,
              left: '40%',
              top: '-150%',
            }}>
            <Text
              style={{
                position: 'absolute',
                color: '#2DDA93',
                paddingLeft: '25%',
              }}>
              Perfil
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
        onPress={() => console.log('Salir')}
        >
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#FFF',
              width: '20%',
              height: '150%',
              borderRadius: 40,
              marginVertical: '.2%',
              left: '70%',
              top: '100%',
            }}>
            <Text
              style={{
                marginLeft: '27%',
                marginTop: '2%',
                color: '#2DDA93',
              }}>
              Salir
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View
        style={{
          backgroundColor: '#2DDA93',
          width: '100%',
          height: '65%',
          borderRadius: 800,
          bottom: '-5%',
          right: '0%',
        }}></View>
      <Image
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '41%',
        }}
        source={require('../img/gofer.png')}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#FFF',
          width: '50%',
          height: '5%',
          paddingLeft: '30%',
          paddingVertical: '5%',
          borderRadius: 100,
          bottom: '10%',
          left: '25%',
        }}>
        <Text
          style={{
            color: '#2DDA93',
            fontWeight: 'bold',
          }}>
          TutorialesGZ
        </Text>
      </View>
    </View>
  );
};
