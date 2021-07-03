import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { check, PERMISSIONS, PermissionStatus } from 'react-native-permissions';

export const Permissions = () => {

    const checkLocationPermisson = async () => {

        let permissionStatus : PermissionStatus;
        if( Platform.OS === 'ios'){
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

        }

        console.log(permissionStatus);
        

    }
    return (
        <View style={styles.container}>
            <Text>Permisos:</Text>
            <Button 
                title="Permiso"
                onPress={ checkLocationPermisson} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
