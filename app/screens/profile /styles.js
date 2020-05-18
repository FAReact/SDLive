import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
 
    profileScrollview:{
        width:'100%',
        height:Dimension.deviceHeight-80,
        backgroundColor:'white'
    },
    profileContainer:{
      width:Dimension.pro100,
      height:Dimension.pro100,
      backgroundColor:'white',
      marginBottom:50
    },
    profileImageView:{
        width:Dimension.pro100,
        justifyContent:'center',
        alignItems:'center'
    },
    profileImageMainview:{
         justifyContent:'center',
         alignItems:'center',
         marginTop:Dimension.px30
    },
    profileImage:{
         width:100,
         height:100,
         borderRadius:50
    },
    profileName:{
        opacity:0.6,
        padding:0,
        
    },
    profileInfoView:{
        width:Dimension.deviceWidth-40,
        marginLeft:20 ,
        marginTop:20      
    },
    profileEmailView:{
        padding:5,
        borderBottomColor:'black',
        borderBottomWidth:1,
    },
    profilePasswordView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profilePassword:{
    
        padding:5,
        borderBottomColor:'black',
        borderBottomWidth:1,
       
    },
    profileMultiCityCountryView:{
        width:'100%',
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profileCountryCity:{
        width:Dimension.deviceWidth/2-40,
        borderBottomColor:'black',
        borderBottomWidth:1,
    },
    profileBioView:{
         
    },

    linearGradient: {
        height:Dimension.px50,
        borderRadius:Dimension.px25,
        marginTop:Dimension.px20,
        justifyContent:'center',
        alignItems:'center',
        width:200
      },
      buttonText: {
        fontSize: 14,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },

      modalContainer:{
        width:Dimension.deviceWidth,
        height:Dimension.deviceHeight,
        backgroundColor:'#d7d7d8E5',
       
    },

    successContainer:{
        backgroundColor:'white',
        width:Dimension.deviceWidth,
        height:'100%',
        
    },
    successView:{
        width:'100%',
        marginTop:100,
        justifyContent:'center',
        alignItems:'center'
    },
    successIcon:{
        fontSize:150,
        color:Colors.topColor
    },
    regTitle:{
        color:Colors.topColor,
        marginTop:15
    },
   

      

})
export default styles;
