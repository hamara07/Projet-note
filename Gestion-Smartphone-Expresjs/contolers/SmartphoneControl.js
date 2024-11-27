const { 
    addSmartphone, 
    fetchAllSmartphones, 
    fetchSmartphoneById, 
    updateSmartphone, 
    deleteSmartphone 
  } = require('../services/SmartphoneService');
  
  // Ajouter un smartphone
  const createSmartphone = async (req, res) => {
    try {
      const smartphoneData = req.body;
      const newSmartphone = await addSmartphone(smartphoneData);
      res.status(201).json(newSmartphone);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Récupérer tous les smartphones
  const getAllSmartphones = async (req, res) => {
    try {
      const smartphones = await fetchAllSmartphones();
      res.status(200).json(smartphones);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Récupérer un smartphone par ID
  const getSmartphoneById = async (req, res) => {
    try {
      const { id } = req.params;
      const smartphone = await fetchSmartphoneById(id);
      res.status(200).json(smartphone);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Mettre à jour un smartphone
  const updateSmartphoneData = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedSmartphone = await updateSmartphone(id, updatedData);
      res.status(200).json(updatedSmartphone);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Supprimer un smartphone
  const deleteSmartphoneData = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedSmartphone = await deleteSmartphone(id);
      res.status(200).json({ message: 'Smartphone deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    createSmartphone,
    getAllSmartphones,
    getSmartphoneById,
    updateSmartphoneData,
    deleteSmartphoneData,
  };