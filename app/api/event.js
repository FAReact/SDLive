import WService from '../helpers/WebService'

var wservice = new WService()

export const createEvent =(data)=>{
  
    return new Promise((resolve,reject) =>{
         wservice.createEvent(data).then(response=>{

             if(response.statusCode === 200 && response.body.status ==='success'){
                 resolve(response.body)
             }
             else{
                 reject(response.body)
             }
         })
         .catch(reject)
    })
}

export const getEvent = () =>{
   
    return new Promise((resolve,reject)=>{
       
        wservice.getEvent().then(response=>{
            if(response.statusCode == 200){
                resolve(response.body)
            }
            else{
                reject(response.body)
            }
        })
        .catch(reject)
    })

}