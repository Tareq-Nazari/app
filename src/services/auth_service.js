import axios from 'axios'

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
  })

}
