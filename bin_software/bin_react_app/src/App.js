import Button from "@mui/material/Button";
import "./css/App.css";

function sendUserDetails() {
  fetch("http://localhost:8080/api/user", {
    method: "POST",
    // headers: "Bearer " + localStorage.getItem("token"),
  })
    .then((response) => {
      console.log(response.ok);
      if (response.ok) {
        alert("Connection Successful!");
      } else {
        alert("Connection Failed");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return;
}

function App() {
  return (
    <div>
      <Button variant="contained" onClick={sendUserDetails}>
        Connect to a bin
      </Button>
      <div className="padding" />
    </div>
  );
}

export default App;
