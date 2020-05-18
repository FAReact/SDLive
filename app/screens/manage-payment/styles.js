import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
    cardContainer:{
        width:Dimension.pro100,
        height:Dimension.deviceHeight-100,
        padding:30,
        backgroundColor:'white'
    },
    cardInfoTitleView:{
       width:'100%',
       alignItems:'center',
       marginTop:Dimension.pro40,
       marginBottom:20
    },
    cardInfoTitle:{
        fontSize:20,
        color:Colors.grayTextColor,
        fontFamily:'FranklinGothic'
    },
    cardHolderView:{
        padding:5,
        borderBottomWidth:1,
        marginHorizontal:10,
    },
    otherView:{
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    expiryView:{
        flexDirection:'row'
    },
    expiry:{
        marginLeft:10,
        borderBottomWidth:1,
        width:100,
        backgroundColor:'white',
        alignItems:'center'

    },
    cvv:{

        borderBottomWidth:1,
        backgroundColor:'white',
        width:100,
        alignItems:'center'

    },
    paypal:{
        padding:20,
        width:200,
        backgroundColor:'#7D47B7',
        borderRadius:50,
        marginLeft:10,
        alignItems:'center'
       
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
    linearGradient: {
        minWidth:220,
        height:Dimension.px50,
        borderRadius:Dimension.px25,
        marginTop:Dimension.px20,
        justifyContent:'center',
        alignItems:'center',
        width:200
      },
      buttonText: {
        fontSize: 15,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontFamily:'FranklinGothic',
      },


})

export default styles;