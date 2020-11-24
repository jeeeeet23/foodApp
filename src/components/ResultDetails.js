import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultDetails = ({ details }) => {

   // console.log(details); 

   return (
      <View style = {styles.container}>
         <Image 
            style = {styles.image} 
            source = {{ uri: details.image_url }}  
            
         />
         <Text style = {styles.naming}>
            {details.name}
         </Text>
         <Text>
            {details.rating} ☆, {details.review_count} Reviews
         </Text>
      </View>
   )
};

const styles = StyleSheet.create({
   container: {
      marginLeft: 15,
   },

   image: {
      height: 130,
      width: 250,
      borderRadius: 8,
      marginBottom: 5,
   },

   naming: {
      fontWeight: 'bold',
      fontSize: 15, // default: 14
   },



});

export default ResultDetails;
