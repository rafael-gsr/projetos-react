const router = require('express').Router()
const routesController = require('./routesController')

// router.get('/secao', routesController.getSecao)
// router.get('/secao/:id', routesController.getSecao)
// router.delete('/secao', routesController.deleteSecao)
// router.put('/secao',routesController.updateSecao)
// router.post('/secao',routesController.createSecao)

router.get('/pagina', routesController.getPagina)
router.get('/pagina/:id', routesController.getPagina)
router.delete('/pagina', routesController.deletePagina)
router.put('/pagina', routesController.updatePagina)
router.post('/pagina',routesController.createPagina)

router.get('/item', routesController.getItem)
router.get('/item/:id', routesController.getItem)
router.delete('/item', routesController.deleteItem)
router.put('/item', routesController.updateItem)
router.post('/item', routesController.createItem)

router.get('/pagina-item',routesController.getPaginaItem)
router.get('/pagina-item/:id',routesController.getPaginaItem)
router.delete('/pagina-item', routesController.deletePaginaItem)
router.put('/pagina-item',routesController.updatePaginaItem)
router.post('/pagina-item',routesController.createPaginaItem)

router.get('/query-especifica/:tabela/:propriedade/:valor', routesController.queryEspecifica)
router.get('/encontrar-item', routesController.encontrarItem)

module.exports = router