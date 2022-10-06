const express = require("express");
const app = express();
const port = process.env.PORT ||5000;


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


if(process.env.NODE_ENV=="production"){
  const path=require("path");
  app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'client','build')))
    app.sendFile(pat.resolve(__dirname,'client','build','index.html'))
  })
}
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
