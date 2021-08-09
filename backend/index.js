const express        = require('express');
const cors           = require('cors');
const {dbconnection} = require('./db/db');
const roleRoutes     = require('./routes/role.router');

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/roles', roleRoutes);

app.listen( process.env.PORT, () =>
    console.log("Backend server running on port: " + process.env.PORT )
);

dbconnection();
