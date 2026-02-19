const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// API to get deployment info created by Jenkins
app.get('/api/info', (req, res) => {
    let deployer = "Unknown";
    let status = "No build data";

    if (fs.existsSync('user.txt')) deployer = fs.readFileSync('user.txt', 'utf8').trim();
    if (fs.existsSync('output.txt')) status = fs.readFileSync('output.txt', 'utf8').trim();

    res.json({ deployer, status, lastCheck: new Date().toLocaleString() });
});

app.listen(PORT, () => {
    console.log(`InvenTrack running at http://localhost:${PORT}`);
});