const fs = require('fs');
const path = require('path');

// This function reads your index.html file and serves its content
module.exports = (req, res) => {
    try {
        const filePath = path.join(process.cwd(), 'index.html');
        const html = fs.readFileSync(filePath, 'utf8');

        // Set the content type header so the browser knows it's an HTML page
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
    } catch (error) {
        console.error('Error serving index.html:', error);
        res.status(500).send('<h1>500 Internal Server Error</h1><p>Could not load the website file.</p>');
    }
};
