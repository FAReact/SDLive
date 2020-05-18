import WService from '../helpers/WebService'

var wservice = new WService()

export const profileUpgrade = (name,image,email,password,birthday,country,city,bio,interests,facebook,twitter,instagram,profile_picture) =>{
  
    return new Promise((resolve,reject)=>{
        
        wservice.profileUpgrade(name,image,email,password,birthday,country,city,bio,interests,facebook,twitter,instagram,profile_picture).then((response)=>{
            if (response.statusCode === 200) {
                resolve(response.body)
              
            } else {
                reject(response.body)
            }
        })
        .catch(reject)
        
    })

}