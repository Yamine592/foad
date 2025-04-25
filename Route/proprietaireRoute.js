const express = require ('express');
const proprietaireController = require("../Controller/proprietaireController");
const { verify } = require('jsonwebtoken');
const router = express.Router();

router.get("/", (request,response) => {
  proprietaireController.getAllproprietaire(request, response);
});

router.get("/id", (request,response) => {
  proprietaireController.getproprietaireById(request, response);
});

router.delete ("/id", verifyToken, (request, response) => {
  proprietaireController.deleteproprietaire(request, response);
});

router.post ("/register", (request,response) => {
  proprietaireController.addproprietaire(request,response);
});

router.patch("/id", verifyToken, (request,response) => {
  proprietaireController.updateproprietaire(request, response)
});

router.delete("/id", verify, (request,response) => {
  proprietaireController.deleteproprietaire(request, response);;
});


module.exports= router;