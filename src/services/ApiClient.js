import axios from "axios"
import { URL_PATH } from "../Constants"
import AuthService from "./AuthService";

class ApiClient {

    async findAllAds(status, onRequestCompleted) {

        let urlQuery = URL_PATH + '/advertisement'

        if (status !== null) {
            urlQuery = urlQuery + '?status=' + status;
        }

        await axios.get(
            urlQuery,
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
            .then((response)=> onRequestCompleted(response.data))
            .catch(function(error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
    }

    async findOneAd(id, onRequestCompleted) {
        await axios.get(
            URL_PATH+'/advertisement/'+id,
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
        .then(response => onRequestCompleted(response.data))
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                console.log(error.request);
              } else {
                console.log('Error', error.message);
              }
        })
    }

    async findAdPhoto({id, onRequestCompleted, onFail}) {
        await axios.get(
            URL_PATH+'/media/photos/'+id,
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
        .then((response) => onRequestCompleted(response.data))
        .catch(function(error){
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }

    async blockAdd(id, body, onRequestCompleted) {
        await axios.put(
            URL_PATH+'/advertisement/'+id, 
            body,
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
        .then(onRequestCompleted())
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }

    async changeAd(id, body, onRequestCompleted){
        await axios.put(
            URL_PATH+'/advertisement/'+id, 
            body,
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
        .then(() => onRequestCompleted())
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }

    async findCategory(onRequestCompleted){
        await axios.get(
            URL_PATH+'/category',
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
        .then(response => onRequestCompleted(response.data))
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }

    async findAllBlockings(onRequestCompleted) {
        await axios.get(
            URL_PATH + '/blocking',
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
          .then(response => onRequestCompleted(response.data))
          .catch(function(error) {
              if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              } else if (error.request) {
                  console.log(error.request);
              } else {
                  console.log('Error', error.message);
              }
          })
    }

    async findUserBlocking(user_id, onRequestCompleted) {
        await axios.get(
            URL_PATH+"/blocking?user_id=" + user_id, 
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
        .then(response => onRequestCompleted(response.data))
        .catch(function(error) {
              if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              } else if (error.request) {
                  console.log(error.request);
              } else {
                  console.log('Error', error.message);
              }
          })
    }

    async findAllStrikes(onRequestCompleted) {
        await axios.get(
            URL_PATH + '/strike', 
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
        .then(response => onRequestCompleted(response.data))
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }

    async findUserStrike(user_id, onRequestCompleted) {
        await axios.get(
            URL_PATH+'/strike?user_id='+user_id,
            { headers: { Authorization: AuthService.getCurrentToken() }})
          .then(response => onRequestCompleted(response.data))
          .catch(function(error) {
              if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              } else if (error.request) {
                  console.log(error.request);
              } else {
                  console.log('Error', error.message);
              }
          })
    }

    async findAllUsers(onRequestCompleted) {
        await axios.get(
            URL_PATH + '/user',
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
        .then((response)=>{
            onRequestCompleted(response.data)
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }
    
    async findUser(user_id, onRequestCompleted) {
        await axios.get(
            URL_PATH+'/user/'+user_id,
            { headers: {Authorization: AuthService.getCurrentToken()}}
        )
        .then(response => onRequestCompleted(response.data))
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }

    async deleteBlocking(id, onRequestCompleted) {
        await axios.delete(
            URL_PATH+'/blocking/'+id,
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
          .then(() => onRequestCompleted())
          .catch(function(error) {
              if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              } else if (error.request) {
                  console.log(error.request);
              } else {
                  console.log('Error', error.message);
              }
          })
    }

    async addBlocking(body, onRequestCompleted){
        await axios.post(
            URL_PATH+"/blocking",
            body,
            { headers: { Authorization: AuthService.getCurrentToken() }}
        )
        .then(() => onRequestCompleted())
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }

    async addStrike(body, onRequestCompleted){
        await axios.post(
            URL_PATH+"/strike",
            body,
            { headers: { Authorization: AuthService.getCurrentToken()}}
        )
        .then(() => onRequestCompleted())
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }
    

}

export default new ApiClient()