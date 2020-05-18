import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
    fullView:{
        width:Dimension.pro100,
        height:Dimension.pro100,
        backgroundColor:'#9f392e'
    },
    chatBackground:{
        width:'100%',
        resizeMode:'contain',
        height:'100%',
        alignItems:'center'
    },
    headerChatArea:{
        width:'100%',
        marginTop:Dimension.px40,
        width:'95%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    profileView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
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
        width:'95%', 
        alignItems:'center',
        marginVertical:10, 
        flexDirection:'row', 
        justifyContent:'space-between'
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
})

export default styles;