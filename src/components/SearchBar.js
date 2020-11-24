import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
   return(
      <View style={styles.backgroundStyle}>  
         <Ionicons style={styles.iconStyle} name="ios-search" size={30} />
         <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   title: {
      fontSize: 35,
   },

   backgroundStyle: {
      marginTop: 10,
      backgroundColor: '#E8E8E8',
      height: 50,
      borderRadius: 10,
      marginHorizontal: 15,
      flexDirection: 'row',
      marginBottom: 10,
   },

   inputStyle: {
      //borderColor: 'black',
      //borderWidth: 1,
      flex: 1,
      fontSize: 18,

   },

   iconStyle: {
      fontSize: 35,
      alignSelf: 'center', // keeps the search input bigger. alignItems reduces it.
      marginHorizontal: 15,

   },
   
});

export default SearchBar;
