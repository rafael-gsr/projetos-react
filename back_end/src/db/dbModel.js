const {DataTypes} = require("sequelize")
const {bancoDeDados} = require("./db") 

const Pagina = bancoDeDados.define('PAGINA',{
    pagina_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        unique:true,
        primaryKey:true,
    },
    pagina_nome:{
        type: DataTypes.STRING,
    },
    pagina_diretorio:{
        type: DataTypes.STRING,
        allowNull:false,
    }
})

const Item = bancoDeDados.define('ITEM',{
    item_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        unique:true,
        primaryKey:true,
    },
    item_nome:{
        type: DataTypes.STRING,
    },
    item_icone:{
        type: DataTypes.STRING,
        defaultValue:'../images/question-square.svg'
    },
    item_direcionamento:{
        type:DataTypes.STRING,
        defaultValue:'/'
    },
    item_tipo_direcionamento:{
        type:DataTypes.STRING,
    }
})

Item.hasOne(Item,{
    foreignKey:'item_pai_id',
    sourceKey:'item_id'
})



const PaginaItem = bancoDeDados.define('PAGINA-ITEM',{
    paginaItem_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        unique:true,
        allowNull:false
    }
})

Item.hasOne(PaginaItem,{
    foreignKey:'fk_item_id',
    sourceKey:'item_id'
})
Pagina.hasOne(PaginaItem,{
    foreignKey:'fk_pagina_id',
    sourceKey:'pagina_id'
})


module.exports = {Pagina,Item,PaginaItem}