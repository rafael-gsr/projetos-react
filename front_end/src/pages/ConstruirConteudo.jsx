import axios from 'axios'
import { useState,useEffect } from 'react'
import conteudo from '../css/partials/itens.style'
import Itens from '../partials/Content/Itens'

const ConstruirConteudo = ({directory}) => {

    const [items,setItems] = useState([]) 
    const [isLoaded,setIsloaded] = useState(false) 
            useEffect(() => {
                axios.get(`http://localhost:5500/encontrar-item?pagina=${directory}`)
                .then(response => {
                    setItems(response.data)
                    setIsloaded(true)
                })
            }, [])

    function loadItems(loaded){
        if(loaded){
            return(items.map(item => {
                if(item.item_pai_id == null){
                    let itensFiltrados = items.filter(subitem => {return subitem.item_pai_id === item.item_id})
                    return(
                        <Itens item={item}>
                            {itensFiltrados.map(itemFilho => {return<Itens item={itemFilho}/>})}
                        </Itens>
                    )
                }
            }))
        }
    }
    loadItems(isLoaded)
    
    
    return(
        <div style={conteudo.divPrincipal}>
            <div style={conteudo.elementoLinha}/>
                {loadItems(isLoaded)}
            <div style={conteudo.elementoLinha}/>
        </div>
    )
}

export default ConstruirConteudo    