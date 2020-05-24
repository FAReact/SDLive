import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    loginContainer: {
        width: Dimension.pro100,
        flex: 1,
        backgroundColor: 'white',
        height: '100%'
    },
    logoArea: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80
    },
    logoTitleArea: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    loginInfoArea: {
        paddingTop: 20,
        padding: Dimension.px20
    },
    logoTitle: {
        fontSize: 13,
        color: Colors.grayTextColor,
        marginTop: Dimension.px12,
        fontFamily: 'FranklinGothic-Light',



    },
    imageLogo: {
        width: Dimension.px80,
        height: Dimension.px80
    },
    imageSDLive: {
        width: 120,
        resizeMode: 'contain',
        height: 30
    },
    textInputBackground: {
        height: Dimension.px50,
        backgroundColor: Colors.formColor,
        borderRadius: Dimension.px25,
        justifyContent: 'center',
        marginTop: Dimension.px20,
    },
    textInput: {
        height: Dimension.px50,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.grayTextColor,
        borderRadius: Dimension.px25,
        flexDirection: 'row',
        paddingLeft: Dimension.px60,
        paddingRight: Dimension.px30,
        fontSize: 13,
        fontFamily: 'FranklinGothic-Light',

    },
    buttonView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: {
        height: Dimension.px50,
        borderRadius: Dimension.px25,
        marginTop: Dimension.px20,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 220
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontFamily: 'FranklinGothic',

    },
    iconBackground: {
        height: Dimension.px55,
        width: Dimension.px50 * 197 / 177,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',

    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 7,
        resizeMode: 'contain'
    },
    forgotView: {
        alignItems: 'flex-end',
        width: '100%',
        marginTop: 10
    },
    forgotTitle: {
        fontSize: 13,
        color: Colors.grayTextColor,
        marginTop: 10,
    },
    description: {
        marginTop: 40,
        color: Colors.grayTextColor,
        fontSize: 14,
        fontFamily: 'FranklinGothic-Light',
    }
})
export default styles
