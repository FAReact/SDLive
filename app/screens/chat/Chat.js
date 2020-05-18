import React from 'react'
import { Image,View,Text, ImageBackground, FlatList, TextInput,TouchableOpacity } from 'react-native'
import {Icon} from 'native-base'
import Images from '../../constants/image.js'
import styles from './styles.js'
import Dimension from '../../constants/dimensions.js'
import NavigationService from '../../navigation/NavigationService'
import {messages} from './data'
import LinearGradient from 'react-native-linear-gradient';
import Screens from '../../utils/screens'


const ListItem=({_id, text, createdAt, name, avatar, sendTip})=>{
  if(sendTip){
    return (
      <LinearGradient 
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 1}} 
        colors={['#7817c5', '#90b2df']} 
        style={styles.linearGradient}>  
        <Image style={styles.tipImage} source={Images.TipIcon} />
        <Text style={styles.text}>Send Tip</Text>
                      
      </LinearGradient>
    )
  }
  return (
    <View style={styles.messageBack}>
      <View key={_id} style={styles.messageInnerBack}> 
         <Image style={styles.smImage} source={{uri:avatar}}/>
         <View style={styles.messageTextBack}>
         <Text style={styles.text}>{name}</Text>
         <Text style={styles.text}>{text}</Text>
         </View>
      </View>
    </View>    
  )
}

class Chat extends React.Component {
  state = {
    commit:'',
    messages: messages,
  } 
  onSend=()=>{
    const {messages, commit}=this.state
    if(!commit) return 
    const payload={
      _id: new Date().getTime(),
        text: commit,
        createdAt: new Date()   ,
        name: 'React Native',
        avatar: `https://placeimg.com/${messages.length+1}/${messages.length+1}/any`,
    }
    this.setState({messages:[payload, ...messages, ], commit:null})

  }
  goToProfile = () =>{
    NavigationService.navigate(Screens.Profile);
   }
  render() {
    return (

       <View style={styles.fullView} >
            <ImageBackground
             style={styles.chatBackground}
             source={Images.ChatBackground}
            >
              <View style={styles.headerChatArea}>
                <View style={styles.profileView}>
                  <TouchableOpacity
                  onPress={()=>this.goToProfile()}
                  >
                    <Image style={styles.profileImage} source={Images.ProfileImage}/>
                  </TouchableOpacity>
                 <TouchableOpacity
                 onPress={()=>this.goToProfile()}
                 >
                  <View style={{marginLeft:10}}>
                        <Text style={styles.profileName}>Bikky Roi</Text>
                        <Text style={styles.profileDate}>01:07:25</Text>
                    </View>
                 </TouchableOpacity>
                  
                </View>
                <View>
                   <TouchableOpacity onPress={()=>NavigationService.goBack()}>
                      <Icon name="closecircle" type="AntDesign" style={{color:'white'}}/>
                   </TouchableOpacity>
                </View>
              </View>
              <FlatList     
               inverted         
               horizontal={false}
               data={this.state.messages}             
               keyExtractor={item => item._id}              
               renderItem={({item})=>
               <ListItem {...item}/>
              }
              />
              <View style={styles.messageContainer}>
                <TextInput               
                returnKeyType={'send'}
                onChangeText={text => this.setState({commit:text})}
                placeholderTextColor={'#000000f0'}  
                             onEndEditing={this.onSend}
                placeholder={'Write a comment..'}
                style={styles.messageInput}
                value={this.state.commit}
                />
                <TouchableOpacity onPress={this.onSend} style={styles.sendButtonBack}>
                  <Icon name="md-send" type="Ionicons" style={styles.sendIcon}/>
                </TouchableOpacity>
              </View>               
            </ImageBackground>
            </View>
    )
  }
}

export default Chat;