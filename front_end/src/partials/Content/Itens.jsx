import { useState} from 'react'
import conteudo from '../../css/partials/itens.style'
import { Link } from 'react-router-dom'

const Itens = ({item, children}) =>{
    const [submenuOpen,setSubmenuOpen] = useState(false)
    const [itemHover,setItemHover] = useState(false)
    const [sectionHover,setSectionHover] = useState(false)

    if(item.item_pai_id===null){
        if(item.item_direcionamento){
            if(item.item_tipo_direcionamento === 'page'){
                return(
                    <section 
                    // seção link
                        key={item.item_id} 
                        onMouseEnter={()=>setSectionHover(true)}
                        onMouseLeave={()=> setSectionHover(false)}
                        style={sectionHover?
                                conteudo.sectionHover:
                                conteudo.section}
                                >
                        <Link
                            style={conteudo.elementoPaiTitle}
                            to={item.item_direcionamento}
                        >
                            <h3 
                                style={sectionHover?
                                    conteudo.sectionTitleHover:
                                    conteudo.sectionTitle}
                                    >{item.item_nome + item.item_id}</h3>  
                        </Link>
                    </section>
                )
            }
            if(item.item_tipo_direcionamento === 'doc'){
                return(
                    <section 
                    // seção link 
                        key={item.item_id} 
                        onMouseEnter={()=>setSectionHover(true)}
                        onMouseLeave={()=> setSectionHover(false)}
                        style={sectionHover?
                                conteudo.sectionHover:
                                conteudo.section}
                                >
                        <a
                            style={conteudo.elementoPaiTitle}
                            href={require(`../../docs/${item.item_direcionamento}`)}
                        >
                            <h3 
                                style={sectionHover?
                                    conteudo.sectionTitleHover:
                                    conteudo.sectionTitle}
                                    >{item.item_nome  + item.item_id}</h3>  
                        </a>
                    </section>
                )
            }
        }
    }

    if(item.item_pai_id===null){
        if(!item.item_direcionamento){
            return(
                <section 
                /* secão para subitens */
                    key={item.item_id} 
                    onMouseEnter={()=>setSectionHover(true)}
                    onMouseLeave={()=> setSectionHover(false)}
                    style={sectionHover?
                            conteudo.sectionHover:
                            conteudo.section}
                            >
                    <div 
                        style={conteudo.elementoPaiTitle}
                        onClick={()=>setSubmenuOpen(!submenuOpen)}
                    >
                        <h3 
                            style={sectionHover?
                                conteudo.sectionTitleHover:
                                conteudo.sectionTitle}
                                >{item.item_nome + item.item_id}</h3>
                        <img 
                            src='images/icons/seta.svg'
                            alt='seta'
                            style={submenuOpen?
                                conteudo.setaSectionOpen:
                                conteudo.setaSection}
                        />
                    </div>
                    <ul style={submenuOpen?
                                conteudo.ulItensOpen:
                                conteudo.ulItens}
                    >
                        {children}
                    </ul>
                </section>
            )
        }
    }

    if(item.item_pai_id!==null){
        if(item.item_tipo_direcionamento === 'page'){
                    return(
                    <li 
                        key={'subitem'+item.item_id} 
                        /* li sem icone e para pagina */
                        style={conteudo.liItem}
                        >
                        <a
                            onMouseEnter={()=>{setItemHover(true)}}
                            onMouseLeave={()=>{setItemHover(false)}}

                            style={itemHover?
                                    conteudo.itemLinkHover:
                                    conteudo.itemLink}
                            href={'/'}
                        >
                            {item.item_icone?<img style={conteudo.itemIcon} src={item.item_icone} alt="icon"/>:<></>}
                            <p style={conteudo.itemName}>
                                {item.item_nome}
                            </p>
                        </a>
                    </li>
                    )
        }
        if(item.item_tipo_direcionamento === 'doc'){
            return(
                <li 
                    /* li com icone e para documento */
                    key={"subitem"+item.item_id} 
                    style={conteudo.liItem}
                    >
                    <a
                        onMouseEnter={()=>{setItemHover(true)}}
                        onMouseLeave={()=>{setItemHover(false)}}

                        style={itemHover?
                                conteudo.itemLinkHover:
                                conteudo.itemLink}
                        href={require('../../docs/hunter350.pdf')}
                    >
                        {item.item_icone?<img style={conteudo.itemIcon} src={item.item_icone} alt="icon"/>:<></>}
                        <p style={conteudo.itemName}>
                            {item.item_nome}
                        </p>
                    </a>
                </li>
            )
        }
    }
}

export default Itens