const proprietaire =  require("../Model/proprietaire");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET=  process.env.JWT_SECRET;

class propietiaireService {
  async getAllUser() {
    return await proprietaire.findAll();
  }


async getproprietaireById(proprietaireId) {
  return await proprietaire.findByPk(proprietaireId);
}

async addproprietaire(proprietaire) {
  const createdProprietaire = await proprietaire.create(proprietaire);

  const payload = {
    id: createdProprietaire.ID_utilisateur,
    pseudo: createdProprietaire.pseudo,
    role: createdProprietaire.role,
  };
} 

async addproprietaire(propietaire) {
  const createdProprietaire = await proprietaire.create(proprietaire);

  const payload = {
    id: createdProprietaire.ID_utilisateur,
    pseudo: createdProprietaire.pseudo,
    role: createdProprietaire.role,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  return { propietaire: createdProprietaire, token};
}


  async updateproprietaire(id, proprietaire) {
    return await proprietaire.update(proprietaire, {
      where: {
        ID_utilisateur: id,
      },
    });
  }

  async deleteproprietaire(id) {
    return await proprietaire.destroy({
      where: {
        ID_utilisateur: id,
      },
    });
  }

  async authenticateproprietaire(email, password) {
    const Proprietaire = await proprietaire.findOne({ where: { email }});

    if (!Proprietaire){
      console.log("Aucun utilisateur trouvé pour cet email:", email);
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      console.log("Mot de passe incorrect pour l'utilisateur:", email);
      return null;
    }
      return Proprietaire;
  }
}



module.exports = new proprietaire();