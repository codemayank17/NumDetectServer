let express = require("express");
let app = express();
const cors = require("cors");

app.use(cors());

app.use(function (req, res, next) {
  console.log(`${new Date()} - ${req.method} request for ${req.url}`);
  next();
});

app.use(express.static("./static"));
const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Serving static on http://localhost:" + port);
});
