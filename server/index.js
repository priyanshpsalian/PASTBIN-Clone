const express = require("express");
const app = express();
const port = 5000;


const cors = require("cors");
// const User=require("./src/routes/User/User");
// const Admin=require("./src/routes/AdminSignUpAndRegister/Admin");
const Text = require("./src/routes/texts/text");
const expressSession=require("express-session");
var cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cors());
// app.use(cookieParser('secret'));
// app.use(expressSession());
// app.use("/user",User);

// app.use("/admin",Admin);
app.use("/",Text);
// app.get("/", (req, res) => {
//   res.send("kk");
// });



app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
