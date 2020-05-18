/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { View, StyleSheet, NativeModules, ScrollView,FlatList, TextInput,Text, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { RtcEngine, AgoraView } from 'react-native-agora';
import ConfettiCannon from 'react-native-confetti-cannon';
import {Icon} from 'native-base';
// import { Actions } from 'react-native-router-flux';
import NavigationService from '../../navigation/NavigationService'
import Images from '../../constants/image'
import styles from './styles'
import {messages} from './data'
import LinearGradient from 'react-native-linear-gradient';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import requestCameraAndAudioPermission from '../../utils/permission'
const { Agora } = NativeModules;                  //Define Agora object as a native module
const db = firestore();
const {
  FPS30,
  AudioProfileDefault,
  AudioScenarioDefault,
  Adaptative,
} = Agora;                                        //Set defaults for Stream

const ListItem=({_id, text, createdAt, name, avatar, sendTip})=>{
 
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



class Video extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {                    //Request required permissions from Android
        requestCameraAndAudioPermission().then(_ => {
          console.log('requested!');
        });
      }
    this.state = {
      peerIds: [],                                //Array for storing connected peers
      uid: Math.floor(Math.random() * 100),       //Generate a UID for local user
      appid: '93a35a04e47b4c09807a4a8358171faa',                    //Enter the App ID generated from the Agora Website
      channelName:this.props.navigation.getParam('channelName'),        //Channel Name for the current session
      vidMute: false,                             //State variable for Video Mute
      audMute: false,                             //State variable for Audio Mute
      joinSucceed: false,  
      commit:'',
      messages: messages, //State variable for storing success
    };
    const config = {                            //Setting config of the app
      appid: this.state.appid,                  //App ID
      channelProfile: 0,                        //Set channel profile as 0 for RTC
      videoEncoderConfig: {                     //Set Video feed encoder settings
        width: 720,
        height: 1080,
        bitrate: 1,
        frameRate: FPS30,
        orientationMode: Adaptative,
      },
      audioProfile: AudioProfileDefault,
      audioScenario: AudioScenarioDefault,
    };
    RtcEngine.init(config);                     //Initialize the RTC engine
  }
  componentDidMount() {
    RtcEngine.on('userJoined', (data) => {
      const { peerIds } = this.state;             //Get currrent peer IDs
      if (peerIds.indexOf(data.uid) === -1) {     //If new user has joined
        this.setState({
          peerIds: [...peerIds, data.uid],        //add peer ID to state array
        });
      }
    });
    RtcEngine.on('userOffline', (data) => {       //If user leaves
      this.setState({
        peerIds: this.state.peerIds.filter(uid => uid !== data.uid), //remove peer ID from state array
      });
    });
    RtcEngine.on('joinChannelSuccess', (data) => {                   //If Local user joins RTC channel
      RtcEngine.startPreview();                                      //Start RTC preview
      this.setState({
        joinSucceed: true,                                           //Set state variable to true
      });
    });
    RtcEngine.joinChannel(this.state.channelName, this.state.uid);  //Join Channel
    RtcEngine.enableAudio();                                        //Enable the audio
  }
  /**
  * @name toggleAudio
  * @description Function to toggle local user's audio
  */
  toggleAudio() {
    let mute = this.state.audMute;
    console.log('Audio toggle', mute);
    RtcEngine.muteLocalAudioStream(!mute);
    this.setState({
      audMute: !mute,
    });
  }
  /**
  * @name toggleVideo
  * @description Function to toggle local user's video
  */
  toggleVideo() {
    let mute = this.state.vidMute;
    console.log('Video toggle', mute);
    this.setState({
      vidMute: !mute,
    });
    RtcEngine.muteLocalVideoStream(!this.state.vidMute);
  }
  /**
  * @name endCall
  * @description Function to end the call
  */
  endCall() {
    RtcEngine.destroy();
    // Actions.home();
  }
  /**
  * @name peerClick
  * @description Function to swap the main peer videostream with a different peer videostream
  */
  peerClick(data) {
    let peerIdToSwap = this.state.peerIds.indexOf(data);
    this.setState(prevState => {
      let currentPeers = [...prevState.peerIds];
      let temp = currentPeers[peerIdToSwap];
      currentPeers[peerIdToSwap] = currentPeers[0];
      currentPeers[0] = temp;
      return { peerIds: currentPeers };
    });
  }

  onSend=()=>{
    const {messages, commit}=this.state
    if(!commit) return 
    const payload={
         _id: new Date().getTime(),
        text: commit,
        createdAt: new Date(),
        name: 'React Native',
        avatar: `https://placeimg.com/${messages.length+1}/${messages.length+1}/any`,
    }
    const type='performer'
    this.putMessageFirebaseStore(payload,type)
    this.setState({messages:[payload, ...messages, ], commit:null})
  }
  
  putMessageFirebaseStore =(payload,type)=>{
    const {channelName} = this.state
    var date = new Date().toString();
    if(type ==='performer'){
       db.collection('groupChat').doc(`chat-${channelName}-name-birthday`).collection('performMsg').doc(`chat-${date}`).set(payload);
    }
    else{
      db.collection('groupChat').doc('new-city-id').set(data);
    }
   
  }
  handleSomeKindOfEvent = () => {
    this.explosion && this.explosion.start();
  }
  onBack (){
    RtcEngine.destroy();
    NavigationService.goBack()
  }
  render() {
  
    var groupRef = db.collection('groupChat').doc('JeYlHn6A0C8bpnhxkKjF').collection('performMsg').doc('XhSzjf9lSAjC5SOl6gkx');
    var getDoc = groupRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
    
  
    return (
        <View 
        style={{flex:1,backgroundColor:'#7D47B7'}}>
         <View style={{padding:15,width:'100%',positon:'abolute',backgroundColor:'#7D47B7',top:0,zIndex:1,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}} >
           <View style={{flexDirection:'row'}}>
             <Image style={styles.profileImage} source={Images.ProfileImage}/>
             <View style={{marginLeft:10}}>
                <Text style={styles.profileName}>Bikky Roi</Text>
                <Text style={styles.profileDate}>01:07:25</Text>
              </View>
           </View>
           <TouchableOpacity
            onPress={()=>this.onBack()}
           >
              <Icon name="closecircle" type="AntDesign" style={{color:'white'}}/>
           </TouchableOpacity>
         </View>
        {
          this.state.peerIds.length > 1
            ? <View style={{ flex: 1 }}>
              <View style={{ height: dimensions.height * 3 / 4 - 50 }}>
                <AgoraView style={{ flex: 1 }}
                  remoteUid={this.state.peerIds[0]} mode={1} key={this.state.peerIds[0]} />
              </View>
              <View style={{ height: dimensions.height / 4 }}>
                <ScrollView horizontal={true}
                  decelerationRate={0}
                  snapToInterval={dimensions.width / 2} 
                  snapToAlignment={'center'} 
                  style={{ width: dimensions.width, height: dimensions.height / 4 }}>
                  {
                    this.state.peerIds.slice(1).map((data) => (
                      <TouchableOpacity style={{ width: dimensions.width / 2, height: dimensions.height / 4 }}
                        onPress={() => this.peerClick(data)} key={data}>
                        <AgoraView style={{ width: dimensions.width / 2, height: dimensions.height / 4 }}
                          remoteUid={data} mode={1} key={data} />
                      </TouchableOpacity>
                    ))
                  }
                </ScrollView>
              </View>
            </View>
            : this.state.peerIds.length > 0
              ? <View style={{ height: dimensions.height - 50 }}>
                <AgoraView style={{ flex: 1 }}
                  remoteUid={this.state.peerIds[0]} mode={1} />
              </View>
              : <Text></Text>
        }
        {
          !this.state.vidMute                                              //view for local video
            ? 
             <AgoraView
             style={styles.localVideoStyle} 
             zOrderMediaOverlay={true} 
             showLocalVideo={true} mode={1} />
            : <View />
        }
        
         <View style={{position:'absolute',bottom:0,width:'100%',paddingHorizontal:10,height:350,flexDirection:'column',backgroundColor:'transparent'}}>
         <FlatList     
               inverted  
               horizontal={false}
               data={this.state.messages}             
               keyExtractor={item => item._id}              
               renderItem={({item})=>
               <ListItem {...item}/>
              }
              />
             <View style={{padding:10,position:'absolute',bottom:60,right:10,alignItems:'flex-end'}}>
                <TouchableOpacity
                 onPress={()=>this.handleSomeKindOfEvent()}
                >
                       <Image style={{width:40,height:40}} source={Images.Clapping}/>     
                </TouchableOpacity>
                
              </View>
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
                <TouchableOpacity 
                onPress={this.onSend} 
                style={styles.sendButtonBack}>
                  <Icon name="md-send" type="Ionicons" style={styles.sendIcon}/>
                </TouchableOpacity>
              </View>    
         </View>
         <ConfettiCannon
        count={200}
        origin={{x: -10, y: 0}}
        autoStart={false}
        ref={ref => (this.explosion = ref)}
      />
      </View>
    );
  }
}

let dimensions = {                                            //get dimensions of the device to use in view styles
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};


export default Video;
