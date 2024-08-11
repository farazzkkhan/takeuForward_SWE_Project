const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        const sql = 'SELECT * FROM banner_settings WHERE id = 1';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.json(result[0]);
        });
    });

    router.post('/update', (req, res) => {
        const { description, timer, link, is_visible } = req.body;
        const sql = 'UPDATE banner_settings SET description = ?, timer = ?, link = ?, is_visible = ? WHERE id = 1';
        db.query(sql, [description, timer, link, is_visible], (err, result) => {
            if (err) throw err;
            res.json({ success: true });
        });
    });

    return router;
};