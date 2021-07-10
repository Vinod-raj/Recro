import axios from 'axios';

export const getPost = (page) => {
    try { 
            let resonse = axios.get(`http://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=10`);
            return resonse;        
    }
    catch(error) {
        console.log(error.message)
    }
}





