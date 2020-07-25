const express = require("express");

const routes = express.Router();

routes.post("/users", (request, response) => {
  console.log(body);
  return response.json({
    evento: "Semana do codigo aberto...",
    aluno: "Fabio Edinei"
  });
});
module.exports = routes;
