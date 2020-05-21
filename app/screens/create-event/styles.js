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
        opacity:0.6
    },
    profileInfoView:{
        width:Dimension.deviceWidth-40,
        marginLeft:20 ,
        marginTop:40      
    },

    profileEmailView:{
      
        borderBottomColor:'black',
        borderBottomWidth:1,
    },
    categoryView:{
        width:'100%',
        paddingTop: 5,
        paddingBottom:3
       
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
    restrictView:{
        marginTop:20
    },
    ticketView:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:20,
        width:'100%'
    },
    bottomBar:{
      borderBottomWidth:'black',
      borderBottomWidth:1,
      width:'40%'
    },
    bottomCountryBar:{
        borderBottomWidth:'black',
        borderBottomWidth:1,
        width:'100%'
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
        borderBottomWidth:1
    },
    profileBioView:{
         marginTop:20
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
        backgroundColor: 'transparent'
      },
      restrictTitle:{
          color:Colors.grayTextColor
      },
      dateView:{
       width:'70%',
       borderBottomWidth:1
      },
      timeView:{
       width:'30%',
       marginHorizontal:10,
       borderBottomWidth:1,
       padding:12
      }

})
export default styles;
