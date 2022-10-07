const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("./user_model");
const Webcam = require("node-webcam").create();
const axios = require("axios").default;
const FormData = require("form-data");
const fs = require("fs");
const auth = require("../auth/auth");

//load .env file into process.env
dotenv.config();

//configure express app
const app = express();
app.use(express.json());
app.use(cors());
app.listen("8080", () => {
  console.log(`Bin backend listening on port 8080`);
});

//connect mongoDB
mongoose.connect(process.env.DATABASE_ACCESS, function successMessage() {
  console.log("Database Connected");
});

//Endpoints
app.post("/api/user", auth.verifyToken, (req, res) => {
  try {
    Webcam.capture("../images/test_picture.jpg", function (err, data) {
      let File = new FormData();
      File.append("image", fs.createReadStream("../images/test_picture.jpg"));

      axios
        .post(
          "https://foursknspaihack-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/3e23020a-2da5-495a-83bf-b48b4645ff81/detect/iterations/Iteration3/image",
          File,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Prediction-Key": "fcdd642e9cf94df885f770f60ba51959",
            },
          }
        )
        .then((response) => {
          console.log(response.data.predictions[0]);
          console.log(data);

          if (response.data.predictions[0].probability > 0.1) {
            const user = User.updateOne(
              {
                email: req.email,
              },
              {
                $inc: { quote: 10 },
              },
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Updated Docs : ", docs);
                  return res.status(200).json({ status: "ok" });
                }
              }
            );
          } else {
            throw "Bad Prediction";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  } catch (err) {
    console.log(err);

    return res.status(404).json({});
  }
});
