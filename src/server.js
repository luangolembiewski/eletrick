const app =require("./app");
const dotenv = require("dotenv");
dotenv.config();

const PORT = 5000;

app.listen(PORT, ()=>console.log(`Server rodando na porta ${PORT}`));