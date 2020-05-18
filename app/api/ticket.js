import WService from '../helpers/WebService'

var wservice = new WService()


export const buyTicket = (event_id,count) =>{
   
    return new Promise((resolve,reject)=>{

       wservice.buyTicket(event_id,count).then(response=>{
        if (response.statusCode === 200) {
            resolve(response.body)
          
        } else {
            reject(response.body)
        }
       })
       .catch(reject)

    })

}

export const sendTicketGift = (event_id,receiver_email,count) =>{
    return new Promise ((resolve,reject) =>{
        wservice.sendTicketGift(event_id,receiver_email,count).then(response=>{

            if(response.statusCode === 200){
                resolve(response.body)
            }
            else{
                reject(response.body)
            }
           
        })
        .catch(reject)
    })
}