const xlsx = require("xlsx");
const Url = require("../models/Url");

exports.uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            console.log("No file received");
            return res.status(400).json({ error: "No file uploaded" });
        }

        const file = req.file;

        const workbook = xlsx.read(file.buffer, { type: "buffer" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(sheet);
        console.log("DATA:", data);
        const urls = data
            .map(row => row.url)
            .filter(url => typeof url === "string" && url.startsWith("http"));

        // Save URLs to MongoDB    
        res.json({ urls });

    } catch (error) {
        console.error("Error processing file:", error);
        res.status(500).json({ error: "Failed to process the file" });
    }
};