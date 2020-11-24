import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const SubScreen = ({ navigation }) => {
   
   const [res, setRes] = useState(null);
   const id = navigation.getParam('id');
   
   // console.log(res);
   // console.log(id);

   const Clicked = async id => {
      const response = await yelp.get(`/${id}`);
      setRes(response.data);
   };

   useEffect(() => {
      Clicked(id)
   }, []);

   
   if (!res) {
      return(null);
   };

   return (
      <>
         <Text style={styles.title}>{res.name}</Text>
         <FlatList 
            data={res.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
               return (
                  <Image 
                     style={styles.image}   
                     source={{ uri: item }}
                  />
               )
            }}
         />
      </>
   )
};

const styles = StyleSheet.create({
   image: {
      height: 200,
      width: 300,
      borderRadius: 8,
      marginBottom: 5,
      marginLeft: 10,
      marginTop: 5,
   },

   title: {
      fontSize: 16,
      fontWeight: '400',
      marginBottom: 5,
      marginLeft: 10,
      marginTop: 5,
   },

});

export default SubScreen;
