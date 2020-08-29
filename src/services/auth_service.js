import axios from 'axios'
import jwt from 'jsonwebtoken'
import {http} from "./http_service";
let loginRes = null;
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
       loginRes = response
     }


  })
  if (loginRes) {return JSON.stringify(response.data.scope[0])}

}

export function isLoggedIn() {

let token = localStorage.getItem('token');
token = JSON.parse(token);

if (token != null){
  return true
}
else {return false}




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
  const access = token.data.access_token
  if (!token){
    return null
  }
  return JSON.parse(access)


}
  export function getScope() {
    let token = localStorage.getItem('token');
    token = JSON.parse(token)
    token = token.data.scope[0]

    return token

  }

