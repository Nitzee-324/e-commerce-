const axios = require('axios');

const url = "http://127.0.0.1:5500/Ecommerce-website/html/index.html";

(async () => {
    for (let i = 1; i <= 100; i++) {
        try {
            const response = await axios.get(url);
            console.log(`Visit ${i}: Status ${response.status} | Response Length: ${response.data.length}`);
        } catch (error) {
            console.error(`Visit ${i}: Failed - ${error.message}`);
        }
    }
})();
