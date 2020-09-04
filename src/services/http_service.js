import axios from 'axios';
import * as auth from './auth_service'
import {isLoggedIn} from "./auth_service";


export function http() {

  return axios.create({

    headers: {
      'Authorization': 'Bearer '+auth.getAccessToken(),
    }
  })


}
