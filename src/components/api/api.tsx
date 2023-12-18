import axios from 'axios';
import { BASE_URL } from '@env';


const fetchDesks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/desks`);
        console.log(response, "response data from api");
        return response.data;
      } catch (error) {
        console.error('Error fetching desks:', error.response || error.message || error);
        throw error;
      }
      
};

export { fetchDesks };
