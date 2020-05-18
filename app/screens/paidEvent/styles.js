import Dimension from '../../constants/dimensions'
import {StyleSheet} from 'react-native'
import Colors from '../../constants/color'

const styles = StyleSheet.create({
    
    paidContainer:{
        // padding:5,
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    paidHeaderView:{
       
        backgroundColor:Colors.topColor,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        width:'100%'        
    },
    paidTitle:{
      fontSize:21,
      color:'white',
      fontFamily:'FranklinGothic',
      marginTop:40

    },
    paidTitleView:{
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
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
        width: Dimension.deviceWidth / 2-10,
        height: 300,
        marginTop:10,
        marginHorizontal:5,
        borderRadius:10,
      } ,
      modalContainer:{
          width:Dimension.deviceWidth,
          height:'100%',
          backgroundColor:'#d7d7d8F6',

      },

       emailIcon:{
        fontSize:18,
        color:"#7d47b7",
               
    },
    datePickerWrapper:{
        padding:5,
        borderColor:'white',
        borderRadius:25,height:40,
        backgroundColor:'white',
        width:'50%',flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginLeft:5,
        paddingLeft:15
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

          content:{
              width:'100%',
              padding:20,
            
          }

})

export default styles;