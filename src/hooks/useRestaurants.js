import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
   const [results, setResults] = useState([]);
   const [errorMessage, setErrorMessage] = useState('');

   // console.log(results);

   const searchAPI = async (searchTerm) => {
      // console.log('rerender searchAPI');
      try {
         const response = await yelp.get('/search', {
            params: { // any key-value pair will automatically be appended to our request URL.
               limit: 50,
               term: searchTerm,
               location: "New York"
            }
         });
         setResults(response.data.businesses); // .data will be the actual json file that we recieved from the server.
      } catch (err) {
         setErrorMessage('Something went wrong');
      };
   };

// Call searchAPI when component is first rendered.
// searchAPI('pasta'); // BAD CODE. // this rerenders the searchAPI mmultiple times.

   useEffect(() => {
      searchAPI('');
   }, []);

   return [searchAPI, results, errorMessage];

};