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
    closeContainer:{
        paddingTop:30,
        paddingHorizontal:10,
        alignItems:'flex-end'
    },
    closeIcon:{
        fontSize:25,
        color:Colors.topColor
    },
    logoArea:{
       justifyContent: 'center',
       alignItems:  'center',
       paddingTop:30
    },
    logoTitleArea:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30
    },
    loginInfoArea:{
        paddingTop:20,
        padding:Dimension.px20
    },
    logoTitle:{
        fontSize:Dimension.px12,
        color:Colors.grayTextColor,
        marginTop:Dimension.px12,
        fontFamily:'FranklinGothic-Light',
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
        height:Dimension.px50,
        borderRadius:Dimension.px25,
        marginTop:Dimension.px20,
        justifyContent:'center',
        alignItems:'center',
      },
      buttonText: {
        fontSize: 14,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
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
    forgotView:{
        alignItems:'flex-end',
        width:'100%',
        marginTop:10
    },
    forgotTitle:{
        fontSize:Dimension.px12,
        color:Colors.textColor,
        marginTop:10
    },
    menutitle:{
         fontSize:16,
         marginTop:10,
         color:Colors.topColor,
 
        fontFamily:'FranklinGothic-Light',

    }

      } )
      export default styles
