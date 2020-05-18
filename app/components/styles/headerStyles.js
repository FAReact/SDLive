import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    headerContainer:{ 
        width:'100%',
        backgroundColor:Colors.topColor,
        padding:15
    },
    menuIcon:{
        color:'white'
    },
    eventNameView:{
       
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30
    },
    eventTitleView:{

        alignItems:'center'
    },
    eventTitle:{
        fontSize:21,
        color:'white',
        fontFamily:'FranklinGothic',
        

    },
    eventBellView:{
        width:'10%'
    },
    eventBell:{
        width:20,
        height:20,
      
    }
    


        
})

export default styles;