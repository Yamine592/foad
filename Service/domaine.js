const domaine =  require("../Model/domaine");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET=  process.env.JWT_SECRET;

class domaineService {
  async getAllUser() {
    return await domaine.findAll();
  }


async getdomaineById(domaineId) {
  return await domaine.findByPk(domaineId);
}

async adddomaine(domaine) {
  const createddomaine = await domaine.create(domaine);

  const payload = {
    id: createddomaine.ID_utilisateur,
    pseudo: createddomaine.pseudo,
    role: createddomaine.role,
  };
} 

async adddomaine(propietaire) {
  const createddomaine = await domaine.create(domaine);

  const payload = {
    id: createddomaine.ID_utilisateur,
    pseudo: createddomaine.pseudo,
    role: createddomaine.role,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  return { domaine: createddomaine, token};
}


  async updatedomaine(id, domaine) {
    return await domaine.update(domaine, {
      where: {
        ID_utilisateur: id,
      },
    });
  }

  async deletedomaine(id) {
    return await domaine.destroy({
      where: {
        ID_utilisateur: id,
      },
    });
  }

  async authenticatedomaine(email, password) {
    const domaine = await domaine.findOne({ where: { email }});

    if (!domaine){
      console.log("Aucun utilisateur trouvé pour cet email:", email);
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      console.log("Mot de passe incorrect pour l'utilisateur:", email);
      return null;
    }
      return domaine;
  }
}



module.exports = new domaine();