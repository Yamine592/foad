const Maitre = require("./Maitres");
const Chien = require("./Chiens");
const Puce = require("./Puces");
const Examen = require("./Examens");
const Passer = require("./Passer");
const prorpietaire = require("./proprietaire");





// relation 1 à N (maitre -> chien)
Maitre.hasMany(Chien, {
  foreignKey: "id_maitre",
  as: "chiens",
});
Chien.belongsTo(Maitre, {
  foreignKey: "id_maitre",
  as: "maitre",
});

// relation 1 à 1 (chien -> puce)
Chien.hasOne(Puce, {
  foreignKey: "id_chien",
  as: "puces",
});
Puce.belongsTo(Chien, {
  foreignKey: "id_chien",
  as: "chiens",
});
// relation N a N (chien -> examen)

Chien.belongsToMany(Examen, {
  through: Passer,
  foreignKey: "id_chien",
  as: "examens",
});
Examen.belongsToMany(Chien, {
  through: Passer,
  foreignKey: "id_Examen",
  as: "chiens",
});



module.exports = {
  Maitre,
  Chien,
  Puce,
  Examen,
  Passer,
  prorpietaire,
};