const express = require("express");

const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`We can not containt the beast that is breaking out of port ${PORT}`));