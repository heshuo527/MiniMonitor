const express = require("express");
const cors = require("./config/cors");
const routes = require("./routes");

const app = express();
const PORT = 4000;

app.use(cors); 
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`✅ Monitor server running at http://localhost:${PORT}`);
});
