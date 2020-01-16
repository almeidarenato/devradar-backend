const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(
  "mongodb://omnistack:omnistack@cluster0-shard-00-00-jyjzr.mongodb.net:27017,cluster0-shard-00-01-jyjzr.mongodb.net:27017,cluster0-shard-00-02-jyjzr.mongodb.net:27017/semana10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Métodos HTTP
// GET , POST , PUT , DELETE

// Tipos de Parametros
// Query Params - req.query visíveis na url , filtros, ordenaçao e paginaçao ex: localhost/teste?teste=nome
// Route Params - req.params (identificar recurso na alteraçao ou remoção) apenas no put e delete ex
// Body Params - req.body post e put (para enviar + de 1 informaçao de diversos formatos)

/*
app.get("/", (request, response) => {
  return response.json({ message: "Hello Omnistack" });
});
*/
/* app.get("/users", (req, res) => {
  return console.log(req.query);
}); */

/*
app.put("/users/:id", (req, res) => {
  return console.log(req.params);
});
*/
/* use para toda a aplicaçao entender oque será usado */

app.use(express.json());
app.use(routes);

app.listen(3338);
