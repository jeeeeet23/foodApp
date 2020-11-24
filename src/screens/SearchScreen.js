import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchAPI, results, errorMessage] = useRestaurants();

   const filterByPrice = (price) => {
      // price === '$' || '$$' || '$$$'
      // return the appropriate results.
      return results.filter (pricing => {
         return pricing.price === price;
      });
   };
   
   return (
      <>
         <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchAPI(term)} //  console.log('term  was submitted') for testing.   
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         {/* <Text>We have found {results.length} results.</Text> */}
         {/* <Text>{term}</Text>  for testing purpose */}
         <ScrollView>
            <ResultList 
               pricing = {filterByPrice('$')} 
               title = "Cost Effective"   
            />
            <ResultList 
               pricing = {filterByPrice('$$')} 
               title = "Bit Pricier" 
            />
            <ResultList 
               pricing = {filterByPrice('$$$')} 
               title = "Big Spender"
            />
         </ScrollView>
      </>
   );
};

const styles = StyleSheet.create({
   title: {
      fontSize: 35,
   },

});

export default SearchScreen;
