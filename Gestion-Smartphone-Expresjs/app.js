const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const smartphoneRoutes = require('./routes/smartphoneRoutes');

const app = express();

// Middleware pour parser les requêtes JSON
//app.use(bodyParser.json());
app.use(express.json());

// Connexion à MongoDB
mongoose
    .connect("mongodb+srv://<username>:<password>@cluster0.dkx8r.mongodb.net/apprenant_bd?retryWrites=true&w=majority&appName=Cluster0")
    
     .then((cnx) => {
        console.log(`Database connected : ${cnx.connection.host}`);
     })
     .catch((error) => {
        console.log(`Database connection error : ${error}`);
     });

// Utilisation des routes pour les smartphones
app.use('/api/smartphones', smartphoneRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});