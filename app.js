const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

//rutas

app.listen(port, () => {
    console.log(`Server MULTERTRY a la escucha del puerto ${port}`);
});