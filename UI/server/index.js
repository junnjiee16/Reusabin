const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user_model");
const jwt = require("jsonwebtoken");
const auth = require("./auth.js");
const Webcam = require("node-webcam").create();
const axios = require("axios").default;
const FormData = require("form-data");
const fs = require("fs");

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("Database Connected");
});

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      quote: req.body.quote,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", err });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
    if(user){
      console.log(req.body)
      const token = jwt.sign({
        email: user.email,
        password: user.password,
      }, process.env.JWT_SECRET, { expiresIn: "1h" })
      console.log(token)
      return res.json({ status: "ok", user:true , token });
    }else{
      return res.json({status: "error" ,user:false});
    }

});

// app.get("/api/login", async (req, res) => {

//   const token = req.headers['x-access-token'];
// try{
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   const email = decoded.email;
//   const user = await User.findOne({email: email})
//   return {status: "ok", quote: user.quote}
// }
// catch(err){
//   console.log(err)
//   res.json({status:'error',error:'invalid email'})
// }

// });


app.get("/api/dashboard", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });
    res.json({ status: "ok", quote: user.quote , name:user.username});
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error });
  }
});

// app.post("/api/dashboard", async (req, res) => {
//   const token = req.headers["x-access-token"];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const email = decoded.email;
//     const user = await User.updateOne(
// {
//   email: email,
// },
// {
//   quote: req.body.quote,
// }

//       // { email: email },
//       // { $set: { quote: req.body.quote } }
//     );
//     return { status: "ok", quote: user.quote };
//   } catch (error) {
//     console.log(error);
//     res.json({ status: "error", error });
//   }
// });



app.post("/api/increment", async (req, res) => {


  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;
    const user = await User.updateOne(
{
  email: email
},
{
  $inc: { quote: 10 }
}

    )
    res.json({ status: "ok", quote: user.quote });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error });
  }
});


app.post(
  "/api/user",
  auth.verifyToken,
  (req, res) => {
    try {
      Webcam.capture("./images/test_picture.jpg", function (err, data) {
        let File = new FormData();
        File.append("image", fs.createReadStream("./images/test_picture.jpg"));

        axios.post(
            "https://foursknspaihack-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/3e23020a-2da5-495a-83bf-b48b4645ff81/detect/iterations/Iteration3/image",
            File,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                "Prediction-Key": process.env.PREDICTION_KEY,
              },
            }
          )
          .then((response) => {
            if (response.data.predictions[0].probability > 0.5) {
              console.log('good predict')
              updateQuote();
            }

            console.log(response.data.predictions[0]);
            console.log(data);

            return res.status(200).json({ message: "ok" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    } catch (err) {
      console.log(err);

      return res.status(404).json({});
    }
  }
);


app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
