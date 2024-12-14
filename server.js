const express = require('express');
const path = require('path');
const app = express();

// Statik dosyaları doğrudan proje dizininde sunmak için express.static kullanımı
app.use(express.static(__dirname));  // __dirname ile proje dizinini belirtiyoruz

// Ana sayfaya yönlendirme
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Musteri.html'));
});

// Pop-up sayfası için yönlendirme
app.get('/popup', (req, res) => {
    res.sendFile(path.join(__dirname, 'mhpy.html'));
});
app.get('/popup', (req, res) => {
    res.sendFile(path.join(__dirname, 'mybha.html'));
});
app.get('/popup', (req, res) => {
    res.sendFile(path.join(__dirname, 'mbhk.html'));
});
app.get('/popup', (req, res) => {
    res.sendFile(path.join(__dirname, 'mcha.html'));
});
app.get('/popup', (req, res) => {
    res.sendFile(path.join(__dirname, 'mtbd.html'));
});
app.get('/popup', (req, res) => {
    res.sendFile(path.join(__dirname, 'mbtd.html'));
});

// Sunucuyu başlatma
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
