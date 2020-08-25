import axios from 'axios'
import jwt from 'jsonwebtoken'
import {http} from "./http_service";
export function register(user) {

    axios.post('users/register',{
      name : user.name,
      email : user.email,
      password : user.password,
      address : user.address,
      phone : user.phone,
      role : user.role,

    })

}



export function login(user) {

  axios.post('users/login',{

    email : user.email,
    password : user.password,
  }).then(response => {
    if (response.status === 200) {
      //const token = jwt.sign({user : user}, 'secret')
      const token = JSON.stringify(response)
      localStorage.setItem('token' , token)
    }
    return response.data

  })

}

export function isLoggedIn() {

const token = localStorage.getItem('token');
return token != null


}


export function logout() {
  const token = JSON.parse(localStorage.getItem('token'));
  const authorize = 'Bearer '+ token.data.access_token;
  if(axios({
    method: 'post',
    url: 'http://127.0.0.1/storeBackend/public/api/users/logout',
    data: {},
    headers: {
      Authorization: authorize
    }
  })) {
    localStorage.removeItem('token');
  }

}
  function getAccessToken() {
  const token = localStorage.getItem('token');
  console.log(token)
  if (!token){
    return null
  }
  //return token.access_token
  //const tokenData = jwt.decode(token.user.access_token)
  //return tokenData;

}
