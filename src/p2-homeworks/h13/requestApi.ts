import axios from 'axios'


//API
export const requestAPI = {
    sendRequest(success:boolean){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success},)
    }
}

// Thunk

