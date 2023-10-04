import Footer from '../partials/Footer'
import Header from '../partials/Header'
import homeStyle from '../css/pages/Home.style'
import ConstruirConteudo from './ConstruirConteudo'

const Home =  ({directory}) => {

    return(
        <div style={homeStyle.divMain}>
            <Header/>
            <ConstruirConteudo
                directory={directory}
            />
            <Footer/>
        </div>
    )
}

export default Home