import headerStyle from '../css/partials/Header.style'
import {Link} from 'react-router-dom'
import linkStyle from '../css/design/linkStyle'
const Header = () => {
    return(
    <div style={headerStyle.headerMain}>
        <Link
        style={linkStyle}
        to={'/'}>    
            <div style={headerStyle.logotipo}>
                    <img 
                        src={'/images/favicon.svg'} 
                        alt='logo'
                        style={headerStyle.logo}
                    />
                    <p style={headerStyle.intranet}>
                        React JS
                    </p>
            </div>
        </Link>
    </div>
    )
}

export default Header