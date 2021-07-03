import React from 'react'
import { View, Text, FlatList, ActivityIndicator  } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { useUserPaginated } from '../hooks/useUserPaginated';
import { UserCard } from '../components/UserCard';
export const UsersScreen = () => {
    const { top } = useSafeAreaInsets();

    const {isLoading, simpleUserList} =useUserPaginated();


    return (
        <View style={styles.backgroundPage}>
            {/* <Image  source={ require('../assets/.jpg')} /> */}
            {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20
            }}>Lista de Usuarios</Text>  
            <View style={{...styles.borderBottom, ...styles.globalMargin}} /> */}

            <View style={{ alignItems: 'center'}}>
                
                <FlatList 
                    data={ simpleUserList }
                    keyExtractor={ (user) => user.id.toString() }
                    showsVerticalScrollIndicator={ false }
                    numColumns={2}

                    //Header
                    ListHeaderComponent={(<><Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        top: top + 20
                    }}>Lista de Usuarios</Text>  
                    <View style={{...styles.borderBottom, ...styles.globalMargin}} /></>)}

                    renderItem={ ({item}) => (
                        <UserCard user={item} />
                    )}

                    //Footer
                    ListFooterComponent={
                        isLoading ? <ActivityIndicator 
                            style={{ height: 100 }}
                            size={ 20 } 
                            color="white"
                        /> : <></>
                    }
                />
            </View>

        </View>
    )
}


