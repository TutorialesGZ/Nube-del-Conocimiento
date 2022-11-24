import React from 'react'
import { View, Text, Image } from 'react-native'

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
                left: '24%',
                fontWeight: 'bold',
                fontSize: 18
            }}>Signos de puntuación</Text>
        </View>
      <Image
        style={{
          position: 'absolute',
          top: '35%',
          right: '-20%',
          height: '15%',
          width: '30%',
          transform: [{rotate: '90deg'}],
        }}
        //source={require('.../NubeDelConocimientoAppAlumnot/src/img/1.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '-15%',
          height: '15%',
          width: '30%',
        }}
       // source={require('.../src/img/circulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-15%',
          height: '15%',
          width: '30%',
        }}
        //source={require('.../src/img/circulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          top: '45%',
          left: '-20%',
          height: '15%',
          width: '30%',
          transform: [{rotate: '180deg'}],
        }}
        //source={require('.../src/img/circulo.png')}
      />
        <Text style={{
            borderRadius: 100,
            top: '20%',
            fontSize: 14,
            color: '#FFF',
            left: '1%',
            width: '90%',
            backgroundColor: '#2DDA93',
            height: '5%',
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
        }}>Arrastra y suelta cada palabra junto a su definición</Text>
        </View>
  )
}
