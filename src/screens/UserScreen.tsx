import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParams } from '../navigator/StackNavigator';
import { UserDetails } from '../components/UserDetails';


interface Props extends StackScreenProps<RootStackParams, 'UserScreen'> {};

export const UserScreen = ({navigation, route}: Props) => {
    const { simpleUser, gender} = route.params;
    const { name, username } = simpleUser;
    const urlWomen = '../assets/womanSF.png';
    const urlMen = '../assets/avatarUserSF.png';
    
    const { top } = useSafeAreaInsets();
    return (
        <View style={{height: '100%'}}>
            {/* Header Container 65D9E4 98c7f3*/}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: gender ==='women' ? '#fba4a2': '#98c7f3',
            }}>
                <TouchableOpacity
                    onPress={()=> navigation.goBack()} 
                    // onPress={()=> navigation.pop()} 
                    // onPress={()=> navigation.navigate('UsersScreen')} 
                    activeOpacity={0.8}
                    style={{...styles.backButton, top: top +10}} 
                    
                >
                    <Text style={{...styles.textBack}}> Regresar</Text>
                </TouchableOpacity>
                <Text style={{...styles.userName, top: top +40}}>{name}-</Text>
                <View style={{...styles.borderBottom}} />
                <View style={{...styles.imageContainer}}>
                    <Image 
                        source={ gender ==='women' ? require(urlWomen) : require(urlMen)}
                        style={{
                            height: 200,
                            width: 200    
                        }}
                    />
                </View>
                <Text style={{...styles.userShortName}}>{username}</Text>
            </View>

            {/* Content Container*/}
            
            <UserDetails user={simpleUser} gender={gender} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        // backgroundColor: 'red',
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textBack: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: "bold"
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    userName: {
        color: "white",
        fontSize: 32,
        alignSelf: 'flex-start',
        // alignItems: 'center',
        left: 20,
        marginBottom: 30
    },
    imageContainer: {
        backgroundColor: 'white',
        marginTop: 20,
        borderColor: 'white',
        borderWidth:2,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    borderBottom: {
        borderColor: 'white',
        borderBottomWidth: 2,
        marginTop:15,
        width: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    userShortName: {
        color: "white",
        fontSize: 18,
        alignItems: 'center',
        top:10,
        fontFamily: "Arial",
        letterSpacing: 1,
        fontWeight:'300'
        
    },

})

