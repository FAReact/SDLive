import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const successStyles =StyleSheet.create({

    successContainer:{
        backgroundColor:Colors.loginBackground,
        width:'100%',
        height:'100%'
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
        width:200,
        alignItems:'center'
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

export default successStyles;