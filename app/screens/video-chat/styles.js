import {StyleSheet,Dimensions} from 'react-native'

let dimensions = {                                            //get dimensions of the device to use in view styles
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  };
const styles = StyleSheet.create({
    chatBackground:{
        width:'100%',
        resizeMode:'contain',
        height:'100%',
        alignItems:'center'
    },
    buttonBar: {
      height: 50,
      backgroundColor: '#0093E9',
      display: 'flex',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    },
    viewAgoraContainer:{
        width: 150,
        height: 150,
        top:5,
        right:10,
        borderRadius:50,
        position: 'absolute',
        zIndex: 100,
    },
    localVideoStyle: {
      width: 100,
      height: 100,
      top:100,
      right:10,
      position: 'absolute',
      zIndex: 100,
    },
    iconStyle: {
      fontSize: 34,
      paddingTop: 15,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBottom: 15,
      borderRadius: 0,
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:20
    },
    profileName:{
      fontSize:16,
      fontWeight:'normal',
      color:'white',
     
  },
  profileDate:{
      color:'white',
      opacity:0.6
  },
  messageContainer:{
    width:'90%', 
    alignItems:'center',
    marginVertical:10, 
    flexDirection:'row', 
    justifyContent:'space-between',
    backgroundColor:'transparent',
    marginLeft:10,
 
},
messageInput:{
    color:'black',
    height:38,
    width:'85%',
    backgroundColor:'white', 
    paddingHorizontal:20,
    borderRadius:20
},
sendButtonBack:{
    width:40,
    height:40,
    borderRadius:20,
    marginLeft:20 ,
    backgroundColor:'#750ccd',
    justifyContent:'center',
    alignItems:'center'
},
sendIcon:{
    color:'white',
    fontSize:22,
    marginLeft:7
},
messageBack:{
    width:Dimension.deviceWidth*0.95, 
    alignItems:'flex-start'
},
messageInnerBack:{
    minWidth:'70%',
    backgroundColor:'#4c4b4c80',
    marginVertical:8, 
    borderRadius:40,
    padding:5, 
    paddingRight:10,
    flexDirection:'row', 
    justifyContent:'flex-start',
    alignItems:'center'
},
smImage:{
     width:40,
     height:40, 
     borderRadius:20
    },
messageTextBack:{
     paddingLeft:10,
     maxWidth:'80%'
},
text:{
    color:'white',
    marginLeft:5
},
linearGradient:{
    width:Dimension.px100,
    height:Dimension.px50,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
},
tipImage:{
    width:20,
    height:20
}
  });

  export default styles;
  