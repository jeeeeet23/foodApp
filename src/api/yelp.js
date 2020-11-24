// access yelp api by importing this file.

import axios from 'axios';

export default axios.create({ // can create an instance of axios.
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
      Authorization:
         'Bearer dVOLrsUr989Hmdc_ZO5ca5f8MUccHRWkYGzzJYHK6t8BHI5bioF9QcXtiznFn9FJrYRU1lZDtFDlxVc-h99xT_3WHFFuNpZQEcvZFjU7iOO2sYy0Fmps6YlvG167X3Yx'
   }
});

// yelp.get('/search') // baseURL helps to shorten the request.
