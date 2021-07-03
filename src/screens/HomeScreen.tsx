import React, {useContext, useEffect} from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import moment from "moment";
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { PermissionContext } from '../context/PermissionsContext';

interface Props extends DrawerScreenProps<any, any>{};

export const HomeScreen = ({navigation}: Props) => {
    
    const { permissions, askLocationPermission} = useContext( PermissionContext)
    
    const currentDate = moment(new Date()).format("DD-MM-YYYY");
    const currentTime = moment(new Date()).format("HH:mm A");
    const { top } = useSafeAreaInsets();


    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () => (
                <Button 
                    title="Menú"
                    onPress={ () => navigation.toggleDrawer() }
                />
            )
        })


    }, []);

    if( permissions.locationStatus === 'unavailable') {
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems:'center'
            }}>
                <ActivityIndicator size={ 50 } color="black"/>
            </View>
        )
    }

    return (
        <View>
            <View style={{...styles.welcomeContainer, top: top+20,}}>
                <Text style={{...styles.title}}>{"¡ Bienvenido !"}</Text>
                <Text style={{color: "white"}}>Fecha: {currentDate} - {currentTime}</Text>
            </View>

             {permissions.locationStatus !== 'granted' && <View>
                <Text>Es necesario el uso del GPS para esta pantalla:</Text>
                <Button 
                    title="Permiso"
                    onPress={ askLocationPermission } 
                />
                <Text>{ JSON.stringify( permissions, null, 5)}</Text>
            </View>}

            <View>
                <Text>Hola</Text>
                <MapView // remove i
                    style={{
                        height: 400,
                        width: 400,
                    }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    provider={PROVIDER_GOOGLE}
                >
                </MapView>
            </View>
        </View>
    );
};



