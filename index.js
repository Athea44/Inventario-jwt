const express = require("express");
const { getConnection } = require('./src/databases/configuration');
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
const userRoute = require("./src/routes/user");
const tiposEquipo = require('./src/routes/tipoEquipo');
const marcaRoute = require("./src/routes/marca");
const estadoRoute = require("./src/routes/estado");
const inventarios = require('./src/routes/inventario');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const authRoute = require('./src/routes/auth');

getConnection();

const app = express();

app.use(cors());
const port = process.env.PORT || 4001;


app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.json());

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

app.use('/api/usuarios', userRoute);
app.use('/api/login', authRoute)
app.use('/api/tiposequipo', tiposEquipo);
app.use('/api/marca', marcaRoute);
app.use('/api/estado', estadoRoute);
app.use('/api/inventarios', inventarios);


app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, () => console.log("Server listening to!!!", port));