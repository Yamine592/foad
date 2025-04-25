const express = require ('express');
const domaineController = require("../Controller/domaineController");
const { verify } = require('jsonwebtoken');
const router = express.Router();

router.get("/", (request,response) => {
  domaineController.getAllproprietaire(request, response);
});

router.get("/id", (request,response) => {
  domaineController.getproprietaireById(request, response);
});

router.delete ("/id", verifyToken, (request, response) => {
  domaineController.deleteproprietaire(request, response);
});

router.post ("/register", (request,response) => {
  domaineController.addproprietaire(request,response);
});

router.patch("/id", verifyToken, (request,response) => {
  domaineController.updateproprietaire(request, response)
});

router.delete("/id", verify, (request,response) => {
  domaineController.deleteproprietaire(request, response);;
});


module.exports= router;