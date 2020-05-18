import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    container:{
      backgroundColor:Colors.loginBackground
    },
    loginContainer:{
        width:Dimension.pro100,
        flex:1,
        backgroundColor:Colors.loginBackground,
        height:'100%'
    },
    logoArea:{
       justifyContent: 'center',
       alignItems:  'center',
       paddingTop:80
    },
    logoTitleArea:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20,
        fontFamily:'FranklinGothic-Light',
    },
    loginInfoArea:{
        paddingTop:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      
    },
    viewerView:{
       padding:20,
       borderColor:Colors.mainColor,
       borderWidth:1,
       borderRadius:30,
       minWidth:115,
       alignItems:'center'
    },
    viewerText:{
        color:Colors.mainColor,
        fontSize:13,
        fontFamily:'FranklinGothic',

    },   
    performText:{
        color:'white',
        fontSize:13,
        fontFamily:'FranklinGothic',

    },
    logoTitle:{
        fontSize:13,
        color:Colors.grayTextColor,
        marginTop:Dimension.px12,
        fontFamily:'FranklinGothic',
    },
    imageLogo:{
        width:Dimension.px80,
        height:Dimension.px80
    },
    imageSDLive:{
        width:120,
        resizeMode:'contain',
        height:30
    },
    textInputBackground:{
        height:Dimension.px50,
        backgroundColor: '#eaebec',
        borderRadius:Dimension.px25,
        marginTop:Dimension.px20,       
    },
    textInput:{
        height:Dimension.px50,
        justifyContent:'center',
        alignItems:'center',
        color:'#322e2e',
        borderRadius:Dimension.px25,       
        flexDirection:'row',       
        paddingRight:Dimension.px25
    },
    linearGradient: {
        padding:20,
        borderRadius:30,
        minWidth:115,
        alignItems:'center',
        marginLeft:10
      },
      viewerGradient: {
        height:Dimension.px50,
        borderRadius:Dimension.px25,
        marginTop:Dimension.px20,
        justifyContent:'center',
        alignItems:'center',
        width:Dimension.deviceWidth/2-20,
        marginHorizontal:10,
      },
     
      iconBackground:{
        height:Dimension.px50,
        width:Dimension.px50* 197/177,
        justifyContent:'center',
        alignItems:'center'  ,
        position:'absolute'      
    },
    icon:{
        width:15,
        height:15   ,
        marginRight:7,
        resizeMode:'contain'
    },
    userTypeView:{
       alignItems:'center',
       justifyContent:'center',
       width:'100%',
       marginTop:Dimension.pro20
    },
    userTypeTitle:{
        fontSize:16,
        color:Colors.grayTextColor,
        fontFamily:'FranklinGothic',
        
    }
      } )
      export default styles
