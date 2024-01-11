import axios from 'axios';
import { BASE_URL } from '@env';


const fetchDesks = async () => {
   try {
      /* const response = await axios.get(`${BASE_URL}/api/desks`); */
      const response = await axios.get(`http://127.0.0.1:8000/api/desks`);
      console.log(response, "response data from api");

      // Check if the response status is not in the 2xx range
      if (response.status < 200 || response.status >= 300) {
         throw new Error(`Request failed with status code ${response.status}`);
      }

      return response.data;
   } catch (error) {
      console.error('Error fetching desks:', error.response || error.message || error);
      throw error;
   }
};




export { fetchDesks };


