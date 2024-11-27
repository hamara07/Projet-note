const express = require('express');
const {
  createSmartphone,
  getAllSmartphones,
  getSmartphoneById,
  updateSmartphoneData,
  deleteSmartphoneData,
} = require('../controllers/smartphoneController'); 

const router = express.Router();

router.post('/', createSmartphone);

router.get('/', getAllSmartphones);  

router.get('/:id', getSmartphoneById);

router.put('/:id', updateSmartphoneData);

router.delete('/:id', deleteSmartphoneData);

module.exports = router;