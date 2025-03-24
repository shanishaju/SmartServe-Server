require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pfServer = express();
pfServer.use(cors());
pfServer.use(express.json());
const PORT = 4000 || process.env.PORT;
pfServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

