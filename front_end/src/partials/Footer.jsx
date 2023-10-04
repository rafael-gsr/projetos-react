import footerStyle from '../css/partials/Footer.style'
import RedesSociais from './RedesSociais'

const Footer = () => {
    return(
        <div style={footerStyle.footerMain}>
            <RedesSociais
                nome={'Facebook'}
                logo={'images/iconesRedesSociais/facebook.svg'}
                link={''}
            />
            <RedesSociais
                nome={'Instagram'}
                logo={'images/iconesRedesSociais/instagram.svg'}
                link={''}
            />
            <RedesSociais
                nome={'Linkedin'}
                logo={'images/iconesRedesSociais/linkedin.svg'}
                link={''}
            />
            <RedesSociais
                nome={'Pinterest'}
                logo={'images/iconesRedesSociais/pinterest.svg'}
                link={''}
            />
            <RedesSociais
                nome={'Tiktok'}
                logo={'images/iconesRedesSociais/tiktok.svg'}
                link={''}
            />
            <RedesSociais
                nome={'Twitter'}
                logo={'images/iconesRedesSociais/twitter.svg'}
                link={''}
            />
            <RedesSociais
                nome={'Youtube'}
                logo={'images/iconesRedesSociais/youtube.svg'}
                link={''}
            />
        </div>
    )
}
    
export default Footer