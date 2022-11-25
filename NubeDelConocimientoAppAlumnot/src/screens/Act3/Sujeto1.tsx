import React from 'react'
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'

export const Sujeto1 = () => {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#FFFF'
    }}>
        <View style={{
            backgroundColor: '#2DDA93',
            position: 'absolute',
            width: '80%',
            height: '45%',
            borderRadius: 180,
            top: -250,
            left: 50,

        }}>
            <Text style={{
                color: '#FFF',
                bottom: '-75%',
                left: '40%',
                fontWeight: 'bold',
                fontSize: 18
            }}>Sujeto</Text>
        </View>
      <Image
        style={{
          position: 'absolute',
          top: '30%',
          right: '-15%',
          height: '15%',
          width: '30%',
       
        }}
        source={require('../Act3/estrella.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '-20%',
          height: '15%',
          width: '30%',
        }}
        source={require('../Act3/circulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-18%',
          height: '15%',
          width: '30%',
          transform: [{rotate: '180deg'}],
        }}
        source={require('../Act3/circulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          top: '45%',
          left: '-15%',
          height: '15%',
          width: '30%',
        }}
        source={require('../Act3/triangulo.png')}
      />

      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '40%',
        color: '#2DDA93',
        paddingHorizontal: '18%',
      }}>
        "La casa estaba terminada"
      </Text>
      
        <Text style={{
            borderRadius: 20,
            top: '10%',
            fontSize: 25,
            color: '#FFF',
            left: '1%',
            width: '90%',
            fontWeight: 'bold',
            backgroundColor: '#2DDA93',
            height: '15%',
            paddingVertical: 8,
            paddingHorizontal: 50,
            marginHorizontal: 20,
        }}>¿Cuál es el sujeto de la oración mostrada?</Text>

        <View style={{
            flexDirection: 'row',
            height: '10%',
            top: '30%',
        }}>
        <TouchableNativeFeedback
        onPress={() => console.log('Opcion1')}
        >
          <View
            style={{
              backgroundColor: '#D2ECFE',
              width: '25%',
              height: '50%',
              borderRadius: 40,
              paddingVertical: 5,
              left: '10%',
              bottom: '-5%',
              elevation: 8,
              marginLeft: 20,
              marginRight: 160
            }}>
            <Text
              style={{
                marginLeft: '27%',
                marginTop: '2%',
                color: '#000',
              }}>
              La casa
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
        onPress={() => console.log('Opcion1')}
        >
          <View
            style={{
              backgroundColor: 'rgba(255,199,1,100)',
              width: '25%',
              height: '50%',
              borderRadius: 40,
              paddingVertical: 5,
              left: '10%',
              bottom: '-5%',
              elevation: 8,
            }}>
            <Text
              style={{
                marginLeft: '27%',
                marginTop: '2%',
                color: '#000',
              }}>
              estaba
            </Text>
          </View>
        </TouchableNativeFeedback>
        </View>
        <TouchableNativeFeedback
        onPress={() => console.log('Opcion1')}
        >
          <View
            style={{
              backgroundColor: '#D8D67E',
              width: '25%',
              height: '5%',
              borderRadius: 40,
              paddingVertical: 5,
              left: '35%',
              bottom: '-25%',
              elevation: 8,
            }}>
            <Text
              style={{
                marginLeft: '19%',
                marginTop: '2%',
                color: '#000',
              }}>
              terminada
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Image 
        //source={require('../Act3/Robot_sujeto.png')}
      />
        </View>
  )
}
