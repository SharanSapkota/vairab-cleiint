import { BASE_URL, LOGIN_API } from "./utils";
import axios from 'axios';

export const loginAction = (values) => {
    console.log(values)
    axios.post(`${BASE_URL}/${LOGIN_API}`, values.values, {
    })
    .then(response => {
        console.log(response)
        localStorage.setItem('token', response.data.token)
        return response.data
    })
  .catch(error => {
    console.log(error);
  });
}