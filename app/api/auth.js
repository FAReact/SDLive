
import WService from '../helpers/WebService'

var wservice = new WService()


export const signIn = (email, password) => {

    return new Promise((resolve, reject) => {
        wservice.signIn(email, password)
            .then((response) => {
                console.log("user logging")
                console.log(response)
                if (response.body.status === 'success') {
                    resolve(response.body)
                  
                } else {
                    reject(response.body)
                }
            })
            .catch(reject)
    })
}

export const signUp = (name,email,birthday,user_type,password)=>{

    return new Promise((resolve,reject)=>{
        wservice.signUp(name,email,birthday,user_type,password)
          .then(response =>{

              if (response.statusCode === 200 && response.body.email) {
                resolve(response.body.email)
            } else {
                reject(response.body)
            }

          })
          .catch(reject)
    })
}

export const profile = (id) => {
    return new Promise((resolve, reject) => {
        wservice.profile(id)
            .then((response) => {
                console.log(response)
                if (response.statusCode === 200 && response.body) {
                    resolve(response.body)
                } else {
                    reject(new Error(response.body.message))
                }
            })
            .catch(reject)
    })
}