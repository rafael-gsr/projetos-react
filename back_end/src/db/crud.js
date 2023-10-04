const {Item,Pagina,PaginaItem} = require('./dbModel')
const {bancoDeDados} = require('./db')

bancoDeDados.sync()
.then(() => {console.log('Banco sincronizado')})


module.exports={
    // async querySecao(id){
    //     if (id){
    //         try {
    //             let allItens = await Secao.findByPk(id)
    //             .then(response => {
    //                 return response.dataValues
    //             })
    //             return allItens

    //         } catch (error) {
    //             console.log('Houve um erro: ' + error)
    //             return error
    //         }
    //     }

    //     try {
    //         let allItens = await Secao.findAll()
    //         .then(response => {
    //             var items = response.map(element => {
    //                 return element.dataValues
    //             })
    //             return items
    //         })

    //         return allItens
    //     } catch (error) {
    //         console.log('Houve um erro: ' + error)
    //         return error
    //     }
    // },

    // async criarSecao(secao_nome,secao_sigla){
    //     try {
    //         let secaoCriada = await Secao.create({secao_nome,secao_sigla})
    //         console.log('Secao criada com o nome "' + secaoCriada.secao_nome + '" e id "' + secaoCriada.secao_id+'"')
    //         return secaoCriada
    //     } catch (error) {
    //         console.log('Houve um erro: ' + error)
    //     }
    // },

    // async deletarSecao(secao_id){
    //     if(secao_id){
    //         try {
    //             const secaoASerDestruida = await Secao.findByPk(secao_id)
    //             const secaoDestruida = await Secao.destroy({
    //                 where:{secao_id}
    //             }).then(response => {
    //                 if(response == 1 ){
    //                     return true
    //                 }
    //                 return false
    //             })
                
    //             await Pagina.update({pagina_secao_id:null}, {where:{pagina_secao_id:secao_id}})

    //             if(secaoDestruida){
    //                 console.log('Seção com id: "' + secao_id + '" e nome : "' + secaoASerDestruida.secao_nome + '", foi deletada')
    //                 return secaoASerDestruida
    //             }
    //             console.log('Seção não encontrada')
    //         } catch (error) {
    //             console.log('Houve um erro: ' + error)
    //         }
    //     }
    // },

    // async atualizarSecao(secao){
    //     try{
    //             const {secao_id} = secao
    //             const response = await Secao.update({...secao},{
    //                 where:{secao_id}
    //             }).then(response => {
    //                 if(response == 1 ){
    //                     return true
    //                 }
    //                 return false
    //             })
    //             if(response){
    //                 console.log('Seção com id "' + secao_id + '" atualizada')
    //                 return secao
    //             }
    //             console.log('Seção não atualizada')
    //             return 'Seção não atualizada'

    //     }catch(error){
    //         console.log('Houve um erro: ' + error)
    //     }
    // },



    async queryItem(id){
        if (id){
            try {
                let allItens = await Item.findByPk(id)
                .then(response => {
                    return response.dataValues
                })
                return allItens

            } catch (error) {
                console.log('Houve um erro: ' + error)
                return error
            }
        }

        try {
            let allItens = await Item.findAll()
            .then(response => {
                var items = response.map(element => {
                    return element.dataValues
                })
                return items
            })

            return allItens
        } catch (error) {
            console.log('Houve um erro: ' + error)
            return error
        }
    },

    async criarItem(item_nome,item_icone='null',item_pai_id,item_direcionamento){
        try {
            const itemCriado = await Item.create({item_nome,item_icone,item_pai_id,item_direcionamento})
            console.log('Item criado com o nome "' + itemCriado.item_nome + '" e id "' + itemCriado.item_id + '"')
            return itemCriado
        } catch (error) {
            console.log('Houve um erro: ' + error)
        }
    },

    async deletarItem(item_id){
        if(item_id){
            try {
                const itemASerDestruido = await Item.findByPk(item_id)
                const itemDestruido = await Item.destroy({
                    where:{item_id}
                }).then(response => {
                    if(response == 1 ){
                        return true
                    }
                    return false
                })
                
                if(itemDestruido){
                    console.log('Item com id: "' + item_id + '" e nome : "' + itemASerDestruido.item_nome + '", foi deletada')
                    return itemASerDestruido
                }
                console.log('Item não encontrado')
            } catch (error) {
                console.log('Houve um erro: ' + error)
            }
        }
    },

    async atualizarItem(item){
        try{
                const {item_id} = item
                const response = await Item.update({...item},{
                    where:{item_id}
                }).then(response => {
                    if(response == 1 ){
                        return true
                    }
                    return false
                })
                if(response){
                    console.log('Item com id "' + item_id + '" atualizado')
                    return item
                }
                console.log('Item não atualizado')
                return 'Item não atualizado'

        }catch(error){
            console.log('Houve um erro: ' + error)
        }
    },



    async queryPagina(id){
        if (id){
            try {
                let allItens = await Pagina.findByPk(id)
                .then(response => {
                    return response.dataValues
                })
                return allItens

            } catch (error) {
                console.log('Houve um erro: ' + error)
                return error
            }
        }

        try {
            let allItens = await Pagina.findAll()
            .then(response => {
                var items = response.map(element => {
                    return element.dataValues
                })
                return items
            })

            return allItens
        } catch (error) {
            console.log('Houve um erro: ' + error)
            return error
        }
    },

    async criarPagina(pagina_nome,pagina_diretorio,pagina_secao_id){
        try {
            let paginaCriada = await Pagina.create({pagina_nome,pagina_diretorio,pagina_secao_id})
            console.log('Pagina criada com o nome "' + paginaCriada.pagina_nome + '" e id "' + paginaCriada.pagina_id+ '"')
            return paginaCriada
        } catch (error) {
            console.log('Houve um erro: ' + error)
        }
    },
    
    async deletarPagina(pagina_id){
        if(pagina_id){
            try {
                const paginaASerDestruida = await Pagina.findByPk(pagina_id)
                const paginaDestruido = await Pagina.destroy({
                    where:{pagina_id}
                }).then(response => {
                    if(response == 1 ){
                        return true
                    }
                    return false
                })
                
                if(paginaDestruido){
                    console.log('Página com id: "' + pagina_id + '" e nome : "' + paginaASerDestruida.pagina_nome + '", foi deletada')
                    return paginaASerDestruida
                }
                console.log('Pagina não encontrada')
            } catch (error) {
                console.log('Houve um erro: ' + error)
            }
        }
    },

    async atualizarPagina(pagina){
        try{
                const {pagina_id} = pagina
                const response = await Pagina.update({...pagina},{
                    where:{pagina_id}
                }).then(response => {
                    if(response == 1 ){
                        return true
                    }
                    return false
                })
                if(response){
                    console.log('Página com id "' + pagina_id + '" atualizada')
                    return pagina
                }
                console.log('Página não atualizada')
                return 'Página não atualizada'

        }catch(error){
            console.log('Houve um erro: ' + error)
        }
    },



    async queryPaginaItem(id){
        if (id){
            try {
                let allItens = await PaginaItem.findByPk(id)
                .then(response => {
                    return response.dataValues
                })
                return allItens

            } catch (error) {
                console.log('Houve um erro: ' + error)
                return error
            }
        }

        try {
            let allItens = await PaginaItem.findAll()
            .then(response => {
                var items = response.map(element => {
                    return element.dataValues
                })
                return items
            })

            return allItens
        } catch (error) {
            console.log('Houve um erro: ' + error)
            return error
        }
    },

    async criarPaginaItem(fk_item_id,fk_pagina_id){
        try {
            let paginaItemCriada = await PaginaItem.create({fk_item_id,fk_pagina_id})
            console.log('PaginaItem criada com o id da Pagina: "' + paginaItemCriada.fk_pagina_id + '" e id do item: "' + paginaItemCriada.fk_item_id+'"')
            return paginaItemCriada
        } catch (error) {
            console.log('Houve um erro: ' + error)
        }
    },

    async deletarPaginaItem(paginaItem_id){
        if(paginaItem_id){
            try {
                const paginaItemASerDestruido = await PaginaItem.findByPk(paginaItem_id)
                const paginaItemDestruida = await PaginaItem.destroy({
                    where:{paginaItem_id}
                }).then(response => {
                    if(response == 1 ){
                        return true
                    }
                    return false
                })
                
                if(paginaItemDestruida){
                    console.log('Página-Item com id: "' + paginaItem_id + '", foi deletada')
                    return paginaItemASerDestruido
                }
            } catch (error) {
                console.log('Houve um erro: ' + error)
            }
        }
        console.log('Pagina-Item não encontrada')

    },

    async atualizarPaginaItem(paginaItem){
        try{
                const {paginaItem_id} = paginaItem
                const response = await PaginaItem.update({...paginaItem},{
                    where:{paginaItem_id}
                }).then(response => {
                    if(response == 1 ){
                        return true
                    }
                    return false
                })
                if(response){
                    console.log('Página-item com id "' + paginaItem_id + '" atualizada')
                    return paginaItem
                }
                console.log('Página-item não atualizada')
                return 'Página-item não atualizada'

        }catch(error){
            console.log('Houve um erro: ' + error)
        }
    },



    async procurarEspecífico(tabela,propriedade,valor){
        const entidades = [PaginaItem,Pagina,Item,Secao]
        try {
            let allItens = await entidades[tabela].findAll({
                where:{
                    [propriedade]:[valor]
                },
            })
            .then(response => {
                return response.map(item => {return item.dataValues})
            })
            return allItens

        } catch (error) {
            console.log('Houve um erro: ' + error)
            return error
        }
    },
    async encontrarItems(pagina){
    try{
        const paginaEncontrada = await Pagina.findAll({where:{pagina_diretorio:pagina}})
                                        .then(response => {
                                            return(response.map(item => {
                                                return(item.dataValues)
                                            }))
                                        })

        if(paginaEncontrada.length > 1){
            console.log('Erro : Mais de uma página com o diretório ' + pagina)
            return
        }
        if(paginaEncontrada.length == 1){
            const itensEncontrados = await Item.findAll({
                include: {
                    model:PaginaItem,
                    where:{fk_pagina_id: paginaEncontrada[0].pagina_id},
                }
            }).then(response => {
                    return (response.map(item =>{
                        return(item.dataValues)
                    }))
                })
                
            console.log('Retornando ' + itensEncontrados.length + ' itens')
            return itensEncontrados
        }
        console.log('Nenhum item encontrado')
    }catch(error){
        console.log('Houve um erro: ' + error)
    }
    }
}
// module.exports = {queryItem,criarSecao,querySecao}