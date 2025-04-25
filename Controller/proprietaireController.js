const proprietaire = require ("../Service/proprietaire");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");




class proprietaireController {
  async getAllproprietaire(request, response) {
    try {
      const proprietaire =  await proprietaireService.getAllproprietaire();
      return response.json(users);
    }catch (error) {
      console.log(error);
      return response.status(500).json({ error: "Erreur lors de la récupérations des propriétaires" });
    }
  }

  async  getproprietaireById(request, response) {
    try {
      const proprietaire = await proprietaireService.getproprietaireById(request.params.id);
      if (!proprietaire) {
        return response.status(404).json ({ error: "proprietaire non trouvé"});
      }
      return response.json(proprietaire);
    } catch (error) {
      console.log(error)
      return response.status(500).json ({ error: "erreur lors de la récupération des prorpietaire"});
    }
  }

  async updateproprietaire (request,response) {
    try {
      const existingproprietaire = await proprietaireService.getproprietaireById(request.params.id);
    if (!existingproprietaire) {
      return response.status(404).json ({ error: "Proprietaire non trouvé" });
    }
  
    const validateData= userSchema.partial().parse(request.body);

    if (validateData.password) {
      validateData.password = await bcrypt.hash(validateData.password, 10);
    }
  
    const updateproprietaire =  await proprietaireService.updateproprietaire(request.params.id, validateData);
    return response.json(updateproprietaire);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return response.status(400).json ({ errors: error.errors });
    }
    console.error(error);
    return response.status(500).json({ error: "erreur lors de la mise a jour du proprietaire"});
  }
}
  
  async deleteproprietaire(request, response) {
    try {
      const existingproprietaire= await proprietaireService.getproprietaireById(request.params.id);
      if (!existingproprietaire) {
        return response.status(404).json({ error: "proprietaire non trouvé" });
      }
      
      await proprietaire.deleteproprietaire(request.params.id);
      return response.status(500).json ({ error: "erreur lors de la suppression d'un proprietaire"});
      } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "erreur lors de la suppresion du propietaire"});
      }
} 
}


module.exports = new proprietaireController();