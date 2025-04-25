const Passer = require("./Passer");
const domaine = require("../Service/domaine");
const etang = require ("../etang");
const permis = require ("../permis");
const proprietaire = require("../proprietaire");



// relation N a N 
proprietaire.belongsToMany(domaine, {
  through: entretenir,
  foreignKey: "id_proprietaire",
  as: "domaine",
});
domaine.belongsToMany(proprietaire, {
  through: entretenir,
  foreignKey: "id_domaine",
  as: "proprietaire",
});

// relation 1 à 1 (client -> permis)

client.hasOne(permis, {
  foreignKey: "id_client",
  as: "permis",
});
permis.belongsTo(client, {
  foreignKey: "id_permis",
  as: "client",
});

// relation 1 à N (poisson -> etang)
poisson.hasMany(etang, {
  foreignKey: "id_poisson",
  as: "etang",
});
permis.belongsTo(poisson, {
  foreignKey: "id_permis",
  as: "poisson",
});



module.exports = {
  Passer,
  proprietaire,
  domaine,
  entretenir,
  detenir,

};