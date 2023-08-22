import axios from 'axios';
const url = 'http://localhost:3000/persons/';

const getPersons = () =>{
  const request= axios.get(url);
  return request.then((response) => response.data)
    
}

const addPerson = async (person) => {
  const request = await axios.post(url, person);
  return  request.data; 
}

const deletePerson = (id) => {
    const request = axios.delete(`${url}${id}`)
    return request;
}

export default {addPerson: addPerson, getPersons: getPersons, del: deletePerson}
