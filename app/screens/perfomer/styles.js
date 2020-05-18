import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
    perfromContainer:{
       flex:1,
       backgroundColor:Colors.loginBackground
    },
    profileBackground:{
        width:Dimension.pro100,
        height:130*1445/817,
        resizeMode:'contain',  
    },
    headerArea:{
        width:Dimension.pro100,
        marginTop:Dimension.px40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10

    },
    arrow:{
        width:Dimension.px40,
        height:Dimension.px18,
        resizeMode:'contain'
    },
    threeDot:{
         width:5,
         height:25,       
    },
    profileImage:{
       width:Dimension.px50,
       height:Dimension.px50,
       borderRadius:Dimension.px25
    },
    profileViewArea:{
        width:'100%',
        padding:Dimension.px15,
        marginTop:Dimension.px60,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    profileInfoArea:{
        marginLeft:Dimension.px10
    },
    profileName:{
        fontSize:Dimension.px15,
        fontWeight:'bold',
        color:'white'
    },
    profileEmail:{
       opacity:0.7,
       color:'white',
    },

    //card contents
    
    cardContainer:{
       minWidth:'90%',
       backgroundColor:'white',
       marginTop:20,
       marginLeft:20,
       marginRight:20,
       borderRadius:10,
       padding:20,
       shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,   
        elevation:10
    },
    cardProfieView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    cardLink:{
       marginTop:20
    },
    cardContentview:{
      marginTop:15
    },
    cardFollowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20
    },
    otherImage:{
        width:28,
        height:28,
        borderRadius:19,
        borderColor:'yellow',
        borderWidth:1,
        marginLeft:-8
    },
    socialView:{
        position:'absolute',
        bottom:0,
        marginBottom:10,
        width:Dimension.pro100,
        justifyContent:'center',
        alignItems:'center'
    },
    socialTitle:{
        fontSize:16,
        color:'white'
    },
    socialIconView:{
        flexDirection:'row',
        marginTop:10
    },
    socialIcon:{
        fontSize:25,
        color:'#7D47B7',
        marginLeft:5
    },
    eventTitle:{
        color:Colors.grayTextColor,
        fontSize:12,
        fontFamily:'FranklinGothic-Light'
    },
    eventName:{
       color:'#707070',
       fontFamily:'FranklinGothic',
       fontSize:13
    }    
})

export default styles;