
import WService from '../helpers/WebService'

var wservice = new WService()

export const initData = () =>{
  
    return new Promise((resolve,reject)=>{
        
        wservice.initData().then((response)=>{
            if (response.statusCode === 200) {
                resolve(response.body)
            } else {
                reject(response.body)
            }
        })
        .catch(reject)
        

    })

}