import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

interface Props {
    title: string,
    isWoman: boolean
}
export const Divider = ({title, isWoman}: Props) => {
    const color = isWoman ? '#ff4d4f' : '#65D9E4'
    return (
        <>
            <Text style={{...styles.divider, top: 0,}}>{title}</Text>
            <View style={{...styles.bottomBorder, borderColor: color}}/>
            
        </>
    )
}

const styles = StyleSheet.create({
    divider: {
        fontSize: 22,
        fontFamily: 'Arial',
        fontWeight: '600',
        marginTop:10,
    },
    bottomBorder: {
        marginBottom: 10,
        borderBottomWidth: 2,
        width: 40,
        alignSelf: 'flex-start',
        left: 0,
        // borderColor:'#ff4d4f'

    }
})
