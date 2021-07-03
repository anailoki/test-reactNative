import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { User } from '../interfaces/userInterfaces';

const windowWidth = Dimensions.get('window').width;

interface Props {
    user: User
}
const women = [1,3,4,5,9,10];

export const UserCard = ({ user }: Props) => {

    const isWomen  = women.includes(user.id) ? true : false;
    const urlWomen = '../assets/womanSF.png';
    const urlMen = '../assets/avatarUserSF.png';
    const navigation = useNavigation ();
    

    return (
        <TouchableOpacity 
            activeOpacity={ 0.9} 
            onPress={()=> navigation.navigate('StackNavigator', { 
                screen: 'UserScreen',
                params:{
                    simpleUser: user,
                    gender: isWomen ? 'women' : 'men'
                }
            })}
            // onPress={()=> navigation.navigate('UserScreen', { 
                
            //     simpleUser: user,
            //     gender: isWomen ? 'women' : 'men'
            // })}
        >
            <View style={{...styles.cardContainer, width: windowWidth * 0.4}}>
                
                <Image 
                    source={ isWomen ? require(urlWomen) : require(urlMen)}
                    style={{
                        ...styles.logo
                        
                    }}
                />
                <View>
                    <Text style={{...styles.name}}>
                        { user.name}
                    </Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: '#f0f0f0',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        // color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        top: 12,
        left: 10,
        right:5,
        paddingRight: 10
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -20,
        bottom: -20
        // opacity: 0.5
    }
})
