const express = require('express');
const scraper = require('./cosmisscans');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>API Scraper CosmicScans Aktif!</h1><p>Gunakan endpoint /home, /search?keyword=..., dll.</p><p>© Copyright Xena</p>');
});

// Menghubungkan semua fungsi dari cosmisscans.js ke endpoint API
app.get('/home', scraper.home);
app.get('/list', scraper.mangaList);
app.get('/detail', scraper.detail);
app.get('/search', scraper.search);

app.listen(PORT, () => {
    print(`Server berjalan di http://localhost:${PORT}`);
});