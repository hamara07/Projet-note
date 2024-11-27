const mongoose = require('mongoose');

//Un smartphone sera modélisé par nom, marque, description, prix, photo, ram, rom, écran et 
//couleurs disponibles. 

// Définir le schéma du smartphone
const smartphoneSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  marque: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  photo: { type: String, required: true }, 
  ram: { type: String, required: true },
  rom: { type: String, required: true },
  ecrant: { type: String, required: true },
  couleurs: { type: [String], required: true },  // Tableau de couleurs
}, { timestamps: true }); // Ajoute les timestamps (createdAt, updatedAt)

// Créer le modèle à partir du schéma
const Smartphone = mongoose.model('Smartphone', smartphoneSchema);

module.exports = Smartphone;