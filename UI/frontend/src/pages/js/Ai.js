import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Square, Circle ,Box} from '@chakra-ui/react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";

// import {
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   AlertDescription,
// } from '@chakra-ui/react'

import { Button, ButtonGroup } from '@chakra-ui/react'

// import jwt from 'jsonwebtoken'

const Ai = () => {
  const [quote, setQuote] = useState(0);
  const [username, setUsername] = useState("Joamma");
  const [tempQuote, setTempQuote] = useState(0);

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

    if (data.status === "ok") {
      setQuote(data.quote);
    }
    else {
      alert(data.error);
    }
    setQuote(data.quote);
  }


  async function updateQuote(event) {

    const req = await fetch("http://localhost:4000/api/increment", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": localStorage.getItem("token"),
      }
    });

    const data = await req.json();
    console.log(data);
    if (data.status === "ok") {
      alert("Points updated successfully");
      populateQuote();
    } else {
      alert(data.error);
    }
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
    });
    if (req.data.predictions[0].probability > 0.5) {
      updateQuote();
    }
    console.log(req.data.predictions[0]);
    setPercentage(Math.round(req.data.predictions[0].probability * 100));
    setItem(req.data.predictions[0].tagName);
  }







  // useEffect(() => {console.log(tempFile)}, [tempFile])
  return (
    
    <div>
      <Center>
      <Circle size='800px' bg='purple.500' color='white'>
        <Box>

        <h1>Your Points: {quote}</h1>

<form >
<input type="file" 
    onChange={(e) => setTempFile(e.target.files?.[0]|| null)} />
  {/* <input type="submit" value ="Upload Image" /> */}
  <Button colorScheme='blue' onClick={updateFile}>Upload Image</Button>
</form>

<Center>
<div style={{ width: 200, height: 200 ,fontSize:5}}>
<CircularProgressbar value={percentage} text={`${percentage}%` }  />
</div>
</Center>

<h1 >Predicted Item:{`${item}`}</h1>
        </Box>
      
</Circle>
      </Center>
      


    </div>
  );
};
export default Ai;
