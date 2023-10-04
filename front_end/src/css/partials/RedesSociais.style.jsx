import '../design/fonts.css'
import {colors} from '../design/colors.jsx'
import linkStyle from '../design/linkStyle'

const redesSociaisStyle = {
    divMain:{
        ...linkStyle,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        cursor:'pointer',
        padding:'0 10px'
    },
    logo:{
        height:'27px',
    },
    nome:{
        paddingLeft:'5px',
        fontFamily: 'Poppins',
        fontWeight:'500',
        color: colors.primaryColor
    },
}

export default redesSociaisStyle