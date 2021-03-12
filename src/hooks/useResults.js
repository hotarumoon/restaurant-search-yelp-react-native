import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp'


export default() => {
    const [results, setResults] =  useState([]);
    const [errMessage, setErrMessage] = useState(' ');

    const searchApi = async searchTerm => {
       try{ 
           const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }catch(e){
            setErrMessage('Something went wrong');
        }
    };

    //The following code will execute only one time (when component is rendered) because the second arg is empty array
    useEffect(() => {
        searchApi('pasta');
    }, []);
    
    return[searchApi, results, errMessage];
};