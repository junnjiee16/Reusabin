import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
// import jwt from 'jsonwebtoken'

const Ai = () => {
  const [quote, setQuote] = useState("");
  const [tempFile, setTempFile] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [item, setItem] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = {};
      // const user = jwt.decode(token)
      if (!user) {
        localStorage.removeItem("token");
        // navigate("/login")
        navigate("/");
      } else {
        populateQuote(user.quote);
      }
    } else {
      navigate("/");
    }
  }, []);


  async function populateQuote() {
    const req = await fetch("http://localhost:4000/api/dashboard", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();

    if (data.status === "ok"){
        setQuote(data.quote)
    }else{
        alert(data.error)
    }
    setQuote(data.quote);
  }


  async function updateFile(event) {
    event.preventDefault();
    let File = new FormData();
    File.append('image', tempFile);
    const req = await axios.post('https://foursknspaihack-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/3e23020a-2da5-495a-83bf-b48b4645ff81/detect/iterations/Iteration3/image', File, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Prediction-Key': "fcdd642e9cf94df885f770f60ba51959"
      }
    })
    
    console.log(req.data.predictions[0])
    setPercentage(req.data.predictions[0].probability * 100);
    setItem(req.data.predictions[0].tagName);
    

    }
    
  
    // useEffect(() => {console.log(tempFile)}, [tempFile])
  return (
    <div>
      <h1>Your Quote: {quote}</h1>
      <form onSubmit={updateFile}>
      <input type="file"
          onChange={(e) => setTempFile(e.target.files?.[0]|| null)} />
        <input type="submit" value ="Upload Image" />
      </form>

      <div style={{ width: 200, height: 200 ,fontSize:10}}>
  <CircularProgressbar value={percentage} text={`${percentage}%` }  />
</div>
    <h1>Predicted Item:{`${item}`}</h1>


    </div>
  );
};
export default Ai;
