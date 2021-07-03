import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { User } from '../interfaces/userInterfaces';
import { Divider } from './Divider';

interface Props {
    user: User,
    gender: string
}

export const UserDetails = ({ user, gender }: Props) => {
    const { address, company } = user;
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
                // backgroundColor: 'red'
            }}
        
        >
            <View style={{...styles.container, marginTop: 390}}>

                <Divider title="Datos Personales" isWoman={gender === 'women'? true : false} />

                <Text style={{...styles.title}}>
                    <Text style={{fontWeight: 'bold'}}>Usuario:</Text>
                    <Text style={{color: 'grey', fontWeight: '300'}}>{' '}{user.username}</Text> 
                </Text>
                <Text style={{...styles.title}}>
                    <Text style={{fontWeight: 'bold'}}>E-mail:</Text>
                    <Text style={{color: 'grey'}}>{' '}{user.email}</Text>
                </Text>
                <Text style={{...styles.title}}>
                    <Text style={{fontWeight: 'bold'}}>{'Teléfono'}</Text>
                    <Text style={{color: 'grey'}}>{' '}{user.phone}</Text>
                </Text>

                <Divider title="Dirección" isWoman={gender === 'women'? true : false} />


                <Text style={{...styles.title}}>
                    <Text style={{color: 'grey'}}>{' '}{`${address.street}, ${address.suite} - ${address.city} ${address.zipcode} `}</Text>
                </Text>

                <Divider title="Compañia" isWoman={gender === 'women'? true : false} />

                <Text style={{...styles.title}}>
                    <Text style={{fontWeight: 'bold'}}>Nombre:</Text>
                    <Text style={{color: 'grey', fontWeight: '300'}}>{' '}{company.name}</Text> 
                </Text>
                <Text style={{...styles.title}}>
                    <Text style={{color: 'grey', fontStyle: 'italic'}}>{`"${company.catchPhrase}"`}</Text>
                </Text>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Arial'

    },
})
