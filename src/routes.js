const { Router } = require("express");
const routes = Router();

const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

// Cadastro de Dev
routes.post("/devs", DevController.store);
routes.get("/devs", DevController.index);
routes.get("/search", SearchController.index);

//métodos do controller
// index (lista), show (mostra unico) , store (salvar) , update (alterar), destroy (deletar)

module.exports = routes;
