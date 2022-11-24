import React from 'react'
import { Image, Text, TouchableNativeFeedback, View } from 'react-native'

export const AdjetivosSustentivosVerbos = () => {
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
                left: '12%',
                fontWeight: 'bold',
                fontSize: 18
            }}>Adjetivos, sustantivos y verbos </Text>
        </View>
      <Image
        style={{
          position: 'absolute',
          top: '55%',
          right: '-20%',
          height: '15%',
          width: '30%',
          transform: [{rotate: '90deg'}],
        }}
        source={require('../img/triangulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '-20%',
          height: '15%',
          width: '30%',
        }}
        source={require('../img/circulo.png')}
      />
      <Image
        style={{
          position: 'absolute',
          bottom: '-3%',
          left: '-10%',
          height: '15%',
          width: '30%',
          transform: [{rotate: '215deg'}],
        }}
        source={require('../img/estrella.png')}
      />

        <Text style={{
            borderRadius: 100,
            top: '20%',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#FFF',
            left: '1%',
            width: '90%',
            backgroundColor: '#2DDA93',
            height: '8%',
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
        }}>Toca cada caja una por una para abrirlas y revelar el 
        elemento contenido dentro </Text>

        <View style={{
            backgroundColor: 'rgba(255,199,1,0.44)',
            borderRadius: 30,
            width: '80%',
            height: '28%',
            left: '10%',
            top: '23%',
            paddingVertical: 15,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                 <TouchableNativeFeedback
                    onPress={() => console.log('xs')}
                    >
                <View
                    style={{
                         backgroundColor: '#D2ECFE',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         elevation: 8,
                         marginHorizontal: 15,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => console.log('xs')}
                    >
                <View
                    style={{
                         backgroundColor: '#D2ECFE',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => console.log('xs')}
                    >
                <View
                    style={{
                         backgroundColor: '#D2ECFE',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                 <TouchableNativeFeedback
                    onPress={() => console.log('xs')}
                    >
                <View
                    style={{
                         backgroundColor: 'rgba(255,255,255,100)',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => console.log('xs')}
                    >
                <View
                    style={{
                        backgroundColor: 'rgba(255,255,255,100)',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => console.log('xs')}
                    >
                <View
                    style={{
                        backgroundColor: 'rgba(255,255,255,100)',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                 <TouchableNativeFeedback
                    onPress={() => console.log('xs')}
                    >
                <View
                    style={{
                         backgroundColor: '#D8D67E',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => console.log('xs')}
                    >
                <View
                    style={{
                         backgroundColor: '#D8D67E',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                    onPress={() => console.log('xs')}
                    >
                <View
                    style={{
                         backgroundColor: '#D8D67E',
                         width: '23%',
                         height: '60%',
                         borderRadius: 20,
                         marginVertical: '.2%',
                         justifyContent: 'center',
                         alignItems: 'center',
                         marginHorizontal: 15,
                         elevation: 8,
                     }}>
                        <Image 
                        source={require('../img/Dino.png')}
                        />
                    </View>
                    </TouchableNativeFeedback>
                
            </View>
        </View>
        <Image style={{
            width: '30%',
            height: '30%',
            resizeMode: 'contain',
            right: '-41%',
            bottom: '-22%'
        }}
        source={require('../img/crayon.png')}
        />
        <Image style={{
            width: '30%',
            height: '30%',
            resizeMode: 'contain',
            right: '-71%',
            bottom: '-12%'
        }}
        source={require('../img/android.png')}
        />
    </View>
  )
}
