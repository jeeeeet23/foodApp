import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetails from './ResultDetails';


const ResultList = ({ title, pricing, navigation }) => {

   //console.log(pricing);

   if (!pricing.length) {
      return (null);
   };

   return (
   <View style = {styles.container}>
      <Text style = {styles.title}>
         {title}
      </Text>
      {/* <Text>
         Price: {pricing.length}
      </Text> */}
      <FlatList
         showsHorizontalScrollIndicator={false}
         horizontal
         data = {pricing}
         keyExtractor = {(pricing) => pricing.id}
         renderItem = {({ item }) => {
            return (
               <TouchableOpacity 
                  onPress = {() => 
                     navigation.navigate('subscreen', { id: item.id })
                  }
               >
                  <ResultDetails details = {item} />
               </TouchableOpacity>
            )
         }}
      />
   </View>
   )
};

const styles = StyleSheet.create({
   title: {
      marginLeft: 15,
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
   },

   container: {
      marginBottom: 15,
   },

});

export default withNavigation(ResultList);
