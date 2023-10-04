import { colors } from '../design/colors'
import '../../css/design/fonts.css'

const conteudo = {
    divPrincipal:{
        backgroundColor:'white',
        display:'flex',
        width:'80vw',
        minHeight:'70vh',
        margin:'1rem auto',
        borderRadius:'20px',
        flexDirection:'column',
        justifyContent:'space-between',
        fontFamily:'Poppins'
    },
    elementoLinha:{
        margin: '4vh auto',
        width: '75vw',
        height: '8px',
        borderRadius: '100px',
        background: `linear-gradient(90deg, ${colors.primaryColor} 0%, ${colors.secondaryColor} 37%, ${colors.primaryColor} 70%, ${colors.secondaryColor} 100%)`,
    },

    //-----------------------------------------------------

    section:{
        margin:'0.5rem auto',
        width:'73vw',
        borderRadius:'1rem',
        transition: 'all 300ms ease-in-out',
        boxShadow:`-3px 5px 7px ${colors.lightShadow}`
    },
    sectionHover:{
        transition: 'all 300ms ease-in-out',
        margin:'0.5rem auto',
        width:'73vw',
        borderRadius:'1rem',
        boxShadow:`-3px 5px 7px ${colors.lightShadow}`,
        translate:'5px -4px',
        
    },
    
    //-----------------------------------------------------

    elementoPaiTitle:{
        display:'flex',
        alignItems:'center',
        textDecoration:'none'
    },

    sectionTitle:{
        display:'inline-flex',
        fontWeight:'500',
        fontSize:'26px',
        color:colors.primaryColor,
        cursor:'pointer',
        width:'fit-content',
        padding:'1.5rem 0 1.5rem 2rem',
        margin:'0',
        maxWidth:'65vw',
        transition: 'all 300ms ease-in-out',
        
    },
    sectionTitleHover:{
        transition: 'all 300ms ease-in-out',
        display:'inline-flex',
        fontWeight:'500',
        fontSize:'26px',
        color:colors.primaryColorActive,
        cursor:'pointer',
        width:'fit-content',
        padding:'1.5rem 0 1.5rem 2rem',
        margin:'0',
        maxWidth:'65vw',
    },
    
    //-----------------------------------------------------
    
    setaSection:{
        display:'inline-flex',
        textAlign:'center',
        cursor:'pointer',
        userSelect:'none',
        padding:'0.5rem',
        transition: 'all 300ms ease-in-out',
        height:'1.9rem',
    },
    setaSectionOpen:{
        transition: 'all 300ms ease-in-out',
        display:'inline-flex',
        textAlign:'center',
        cursor:'pointer',
        userSelect:'none',
        padding:'0.5rem',
        height:'1.9rem',
        transform:'rotate(180deg)',
    },
    
    ulItens:{
        display:'flex',
        margin:'0',
        overflow:'hidden',
        flexWrap:'wrap',
        padding:"0",
        height:'0',
        opacity:0,
        transition: 'all 300ms ease-in-out',

    },
    ulItensOpen:{
        opacity:1,
        margin:'0',
        display:'flex',
        overflow:'hidden',
        flexWrap:'wrap',
        padding:"0.5rem",
        height:'fit-content',
        transition: 'all 300ms ease-in-out',
    },
    
    liItem:{
        listStyle:'none',
        width:'10rem',
        padding:'0 1rem 1rem 1rem'
    },
    
    itemLink:{
        borderRadius:'20px',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        color:colors.primaryColor,
        textDecoration: 'none',
        transition: 'all 200ms ease-in-out',

    },

    itemLinkHover:{
        borderRadius:'20px',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        color:colors.primaryColor,
        textDecoration: 'none',

        transition: 'all 200ms ease-in-out',
        boxShadow: `0 0 6px ${colors.primaryColorActive}`,
        outline: `1px solid ${colors.primaryColorActive}`,
        translate:'3px -3px',
    },
    
    itemIcon:{
        paddingTop:'1rem',
        height:'4rem',
        paddingBottom:'0.5rem',
        userSelect:'none',  
    },
    
    itemName:{
        fontSize:'',
        fontWeight:'500',
        color:colors.primaryColor
    },
}

export default conteudo