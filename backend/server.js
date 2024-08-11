const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1237860',
    database: 'banner_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.use(cors());
app.use(bodyParser.json());

const bannerRoutes = require('./routes/Banner');
app.use('/api/banner', bannerRoutes(db));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
