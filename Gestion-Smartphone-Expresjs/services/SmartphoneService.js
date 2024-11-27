const Smartphone = require('../models/smartphoneModel'); // Importer le modèle

// Ajouter un smartphone à la base de données MongoDB
const addSmartphone = async (smartphoneData) => {
  try {
    // Créer un nouveau document dans MongoDB
    const smartphone = new Smartphone(smartphoneData);
    await smartphone.save(); // Sauvegarder dans la base de données MongoDB
    return smartphone;
  } catch (error) {
    throw new Error('Erreur lors de l\'ajout du smartphone : ' + error.message);
  }
};

// Récupérer tous les smartphones
const fetchAllSmartphones = async () => {
    try {
      const smartphones = await Smartphone.find(); // Récupérer tous les smartphones depuis MongoDB
      return smartphones;
    } catch (error) {
      throw new Error('Erreur lors de la récupération des smartphones : ' + error.message);
    }
  };
  
  // Récupérer un smartphone par son ID
  const fetchSmartphoneById = async (id) => {
    try {
      const smartphone = await Smartphone.findById(id); // Utiliser Mongoose pour chercher le smartphone par ID
      if (!smartphone) {
        throw new Error('Smartphone introuvable');
      }
      return smartphone;
    } catch (error) {
      throw new Error('Erreur lors de la récupération du smartphone : ' + error.message);
    }
  };
  
  // Mettre à jour un smartphone
  const updateSmartphone = async (id, updatedData) => {
    try {
      const smartphone = await Smartphone.findByIdAndUpdate(id, updatedData, { new: true }); // Mettre à jour le smartphone et retourner le document mis à jour
      if (!smartphone) {
        throw new Error('Smartphone introuvable');
      }
      return smartphone;
    } catch (error) {
      throw new Error('Erreur lors de la mise à jour du smartphone : ' + error.message);
    }
  };
  
  // Supprimer un smartphone
  const deleteSmartphone = async (id) => {
    try {
      const smartphone = await Smartphone.findByIdAndDelete(id); // Supprimer le smartphone par ID
      if (!smartphone) {
        throw new Error('Smartphone introuvable');
      }
      return smartphone;
    } catch (error) {
      throw new Error('Erreur lors de la suppression du smartphone : ' + error.message);
    }
  };
  
  module.exports = {
    addSmartphone,
    fetchAllSmartphones, 
    fetchSmartphoneById,
    updateSmartphone,
    deleteSmartphone,
  };