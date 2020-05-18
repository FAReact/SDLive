import Dimension from '../../constants/dimensions'
import {StyleSheet} from 'react-native'
import Colors from '../../constants/color'

const styles = StyleSheet.create({
    
    paidContainer:{
        // padding:5
    },
    paidHeaderView:{
        marginTop:Dimension.px30,
        backgroundColor:Colors.topColor,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        width:'100%'        
    },
    paidTitle:{
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    },
    paidTitleView:{
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.topColor
    },
    paidControlView:{
       width:Dimension.pro100,
       justifyContent:'space-between',
       alignItems:'center',
       flexDirection:'row',
       padding:10
    },
    card: {
        // backgroundColor: '#d7d7d8',
        width: Dimension.deviceWidth / 2-10,
        height: 300,
        marginTop:10,
        marginHorizontal:5,
        borderRadius:10,
      } 

})

export default styles;