import React from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { Avatar, Bubble, GiftedChat, Message, Send } from 'react-native-gifted-chat'
import Images from '../../constants/image.js'
import styles from './styles.js'

class Chat extends React.Component {
  state = {
    messages: [],
  }
 
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 2,
          text: 'Wow... so pretty!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: 'Awesome. Love it ❤️',
          createdAt: new Date()   ,
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/141/141/any',
          },       
        },
        {
          _id: 2,
          text: 'Wow... so pretty!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: 'Awesome. Love it ❤️',
          createdAt: new Date()   ,
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },       
        },
                       
      ],
    })
  }
 
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  renderSend(props) {
    return (
        <Send
            {...props}
        >
            <View style={{marginRight: 10, marginBottom: 5}}>
                <Image style={{width:20,height:20,position:'absolute'}} source={Images.SendBtn} resizeMode={'center'}/>
            </View>
        </Send>
    );
}
 
  render() {
    return (
            <ImageBackground
             style={styles.chatBackground}
             source={Images.ChatBackground}
            >
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    renderUsernameOnMessage
                    alwaysShowSend={true}
                    placeholder={'Write a comment...'}
                    showUserAvatar={true}                   
                    showAvatarForEveryMessage
                    // renderTime={()=>{}}
                    user={{
                      _id: 1,
                      name: 'React Native',
                      avatar: 'https://placeimg.com/140/140/any',
                    }}
                />
            </ImageBackground>
            
    )
  }
}

export default Chat;