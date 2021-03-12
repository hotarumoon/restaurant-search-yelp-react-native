import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.backgroundStyle}>
            <FontAwesome name="search" stye={ styles.iconStyle} size={30} color= "black"/>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={(newTerm) => {onTermChange(newTerm)}}
                autoCapitalize= "none"
                autoCorrect={false}
                onEndEditing={() => {onTermSubmit()}}
            />
        </View>
)};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#dcdedc',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
        marginHorizontal: 10
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 20,
    }

});
export default SearchBar;