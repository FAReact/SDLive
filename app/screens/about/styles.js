import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    
    paymentContainer:{
      width:Dimension.pro100,
      height:Dimension.pro100,
      backgroundColor:'white'
    },
    paymentView:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:Dimension.pro40
    },
    payment:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    paypal:{
        padding:20,
        width:120,
        backgroundColor:'#7D47B7',
        borderRadius:50,
        marginLeft:10,
        alignItems:'center'
       
    },
    card:{
        padding:20,
        width:120,
        backgroundColor:'white',
        borderRadius:50,
        borderWidth:1,
        borderColor:'#7D47B7',
        alignItems:'center'

      
    },
    title:{
        color:Colors.grayTextColor,
        fontSize:16,
        fontFamily:'FranklinGothic',
        padding: 30
    }


})

export default styles;