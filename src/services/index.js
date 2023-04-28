import { ADMIN, BASE_URL, GET_LOGS, LOGIN_API, REGISTER_API } from "./utils";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export const loginAction = (values) => {
    return axios.post(`${BASE_URL}/${LOGIN_API}`, values, {
    })
    .then(response => {
        console.log(response)
        localStorage.setItem('token', response.data.token)
        toast("Login successful")
        return response.data
    })
  .catch(error => {
  toast(error.response.data.message)
  });}


export const registerAction = (values) => 
   axios.post(`${BASE_URL}/${REGISTER_API}`, values)
  .then(response => {
      // localStorage.setItem('token', response.data.token)
      toast("User succesfully created!")
      return response.data
  })
.catch(error => {
  toast(error.response.data.message)
 return ;
});

export const getLogs = () => {
  console.log()
  let endpoint = GET_LOGS;
  // if(localStorage.getItem('loggedInUser').role == ADMIN) {
  //   endpoint = GET_LOGS
  // }
  return axios.get(`${BASE_URL}/${endpoint}`, { headers:{
    authorization: `${localStorage.getItem('token')}`}
  })
  .then(response => {
      return response.data
  })
.catch(error => {
  console.log(error);
  toast(error.response.data.message)
});
}