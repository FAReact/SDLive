export const messages=[
    {
      _id: 1,
      text: 'Wow... so pretty!',
      createdAt: new Date(),
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    {
      _id: 2,
      text: 'Awesome. Love it ❤️',
      createdAt: new Date()   ,
      name: 'React Native',
        avatar: 'https://placeimg.com/141/141/any',
           
    },
    {
      _id: 3,
      text: 'Wow... so pretty!',
      createdAt: new Date(),
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    {
      _id: 4,
      text: 'Render FlatList footer at the bottom of the list even if content is not enough',
      createdAt: new Date()   ,
      name: 'React Native',
      avatar: 'https://placeimg.com/141/141/any',           
    },
          
  ]


  export const performers =[

      {
          id: 1,
          perform_id:14,
          event_id:2,
          type: 'multi-user',
          event_name:'Love'
      },
      {
        id: 2,
        perform_id:15,
        event_id:4,
        type: 'hosted',
        event_name:'Life'
      }
  ]

  export const performer = {
    id: 1,
    perform_id:14,
    event_id:2,
    type: 'multi-user',
    event_name:'Love'
}


  export const event={
    
    performer:{
        id:14,
        evnet_id:2,
        type:'multi-user',
        event_name:'Love'
    },
    user: [
        {
            id:1,
            user_id:2,
            event_id:2,
            type: 'premimum'
        },
        {
           id:2,
           user_id:8,
           event_id:2,
           type: 'normal'
        },
        {
           id:3,
           user_id:3,
           event_id:2,
           type: 'normal'
        }
    
       ]  
  }
      
 
  
