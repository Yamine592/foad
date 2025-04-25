const express = require ('express')
const app = express();
require('dotenv').config()

app.get('/', (req,res) => {
  res.send("HEllo world");
});

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`le serveur est lancé sur http://127.0.0.1:${process.env.PORT}`);
});

