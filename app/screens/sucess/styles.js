import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles =StyleSheet.create({

    successContainer:{
        backgroundColor:'white',
        width:'100%',
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

})

export default styles;