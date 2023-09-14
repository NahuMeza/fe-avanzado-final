import axios from 'axios';
import { useEffect, useState } from 'react';

export const useDentist = ({id}) => {
    const [dentist, setDentist] = useState(null);
    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {setDentist(response.data)})
    .catch((error) => {console.log(error)})    
    }, [id])
    return {dentist};
}