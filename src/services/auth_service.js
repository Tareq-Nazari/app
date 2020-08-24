import axios from 'axios'
import jwt from 'jsonwebtoken'
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
      const token = jwt.sign({user : user}, 'secret')
      localStorage.setItem('token' , token)
    }
    return response.data

  })

}

export function isLoggedIn() {

const token = localStorage.getItem('token');
return token != null


}
