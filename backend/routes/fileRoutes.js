const express = require('express');
const router = express.Router();
const upload = require("../utils/upload");
const { uploadFile } = require("../controllers/fileController");
const Url = require("../models/Url");

router.post('/upload', upload.single('file'), uploadFile);
router.get('/all', async (req, res) => {
    try {
        const urls = await Url.find().sort({ createdAt: -1 });
        res.json(urls);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch URLs" });
    }
});

module.exports = router;