import { ADMIN, BASE_URL, GET_LOGS, LOGIN_API, REGISTER_API } from "./utils";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


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

export const registerAction = (values) => {
  console.log(values)
  axios.post(`${BASE_URL}/${REGISTER_API}`, values)
  .then(response => {
      console.log(response)
      // localStorage.setItem('token', response.data.token)
      toast("User succesfully created!")
      return response.data
  })
.catch(error => {
  toast(error.response.data.message)
 return ;
});
}

export const getLogs = () => {
  console.log()
  let endpoint = GET_LOGS;
  // if(localStorage.getItem('loggedInUser').role == ADMIN) {
  //   endpoint = GET_LOGS
  // }
  return axios.get(`${BASE_URL}/${endpoint}`, {
  })
  .then(response => {
      return response.data
  })
.catch(error => {
  console.log(error);
});
}