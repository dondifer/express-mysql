const express = require("express");

const PORT = 3000;

const app = express();
app.use(express.json());

app.use("/categ", require("./routes/categorias"));
app.use("/prod", require("./routes/productos"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
