import '../design/fonts.css'
import {colors} from '../design/colors.jsx'

const headerStyle = {
    logo:{
        height: '50px',
    },
    logotipo:{
        display:'flex',
        alignItens:'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerMain:{
        widht:'100vw',
        height:'75px',
        display:'flex',
        justifyContent:'center',
        backgroundColor: colors.white,
        alignItems:'center',
    },
    intranet:{
        marginLeft:'5px',
        fontSize:'40px',
        fontWeight:'600',
        margin:'0',
        fontFamily:'Poppins',
        color: colors.primaryColor,
    }
}

export default headerStyle