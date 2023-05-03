import * as React from 'react';
import { StyleSheet, View, TextInput, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';

export interface BuscaProps {

}

export function Busca(props: BuscaProps) {
    const [searchText, setSearchText] = React.useState('');

    const handleSearch = () => {
    // handle search here
    }
    
    return (
        // <View style={styles.head}>
        //     <Input placeholder='Buscar'
        //         leftIcon={{ name: 'search', color: 'white' }} 
        //         style={{height: 10,}}/>
        // </View>
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="#888" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
                value={searchText}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    head:{
        backgroundColor:'#9ACD32',
        // paddingTop: 20,
        padding: 0,
        margin: 0,
        height: 50,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333333',
        borderRadius: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        height: 40,
      },
      input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
      },
      icon: {
        marginRight: 10,
      },
});