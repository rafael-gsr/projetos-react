const crud = require('../db/crud')

module.exports = {
    // async getSecao(req,res){
    //     const {id} = req.params
    //     const secoes = await crud.querySecao(id)
    //     res.send(JSON.stringify(secoes))
    // },
    // async deleteSecao(req,res){
    //     const {id} = req.body
    //     const secaoDeletada = await crud.deletarSecao(id)
    //     res.send(JSON.stringify(secaoDeletada))
    // },
    // async updateSecao(req,res){
    //     const secao = req.body
    //     const secaoAtualizada = await crud.atualizarSecao(secao)
    //     res.send(JSON.stringify(secaoAtualizada)) 
    // },
    // async createSecao(req,res){
    //     const {secao_nome,secao_sigla} = req.body
    //     const secaoCriada = crud.criarSecao(secao_nome,secao_sigla)
    //     res.send(JSON.stringify(secaoCriada))
    // },



    async getPagina(req,res){
        const {id} = req.params
        const paginas = await crud.queryPagina(id)
        res.send(JSON.stringify(paginas))
    },
    async deletePagina(req,res){
        const {id} = req.body
        const paginaDeletada = await crud.deletarPagina(id)
        res.send(JSON.stringify(paginaDeletada))
    },
    async updatePagina(req,res){
        const pagina = req.body
        const paginaAtualizada = await crud.atualizarPagina(pagina)
        res.send(paginaAtualizada) 
    },
    async createPagina(req,res){
        const {pagina_nome,pagina_diretorio,pagina_secao_id} = req.body
        const paginaCriada = crud.criarPagina(pagina_nome,pagina_diretorio,pagina_secao_id)
        res.send(JSON.stringify(paginaCriada))
    },

    


    async getItem(req,res){
        const {id} = req.params
        const itens = await crud.queryItem(id)
        res.send(JSON.stringify(itens))
    },
    async deleteItem(req,res){
        const {id} = req.body
        const itemDeletado = await crud.deletarItem(id)
        res.send(JSON.stringify(itemDeletado))
    },
    async updateItem(req,res){
        const item = req.body
        const itemAtualizado = await crud.atualizarItem(item)
        res.send(JSON.stringify(itemAtualizado))
    },
    async createItem(req,res){
        const {item_nome,item_icone,item_pai_id,item_direcionamento} = req.body
        const itemCriado = crud.criarItem(item_nome,item_icone,item_pai_id,item_direcionamento)
        res.send(JSON.stringify(itemCriado))
    },




    async getPaginaItem(req,res){
        const {id} = req.params
        const paginasItems = await crud.queryPaginaItem(id)
        res.send(JSON.stringify(paginasItems))
    },
    async deletePaginaItem(req,res){
        const {id} = req.body
        const paginaItens = await crud.deletarPaginaItem(id)
        res.send(JSON.stringify(paginaItens))
    },
    async updatePaginaItem(req,res){
        const paginaItem = req.body
        const paginaItemAtualizado = await crud.atualizarPaginaItem(paginaItem)
        res.send(JSON.stringify(paginaItemAtualizado))
    },
    async createPaginaItem(req,res){
        const {fk_item_id,fk_pagina_id} = req.body
        const paginaItemCriada = crud.criarPaginaItem(fk_item_id,fk_pagina_id)
        res.send(JSON.stringify(paginaItemCriada))
    },




    async queryEspecifica(req,res){
        const {tabela,propriedade,valor} = req.params
        const itemPesquisado = await crud.procurarEspecífico(tabela,propriedade,valor)
        res.send(JSON.stringify(itemPesquisado))
    },
    
    async encontrarItem(req,res){
        const{pagina} = req.query
        const valoresEncontrados = await crud.encontrarItems(pagina)
        res.send(JSON.stringify(valoresEncontrados))
    }
}