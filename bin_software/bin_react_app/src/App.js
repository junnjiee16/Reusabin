import Button from "@mui/material/Button";
import "./css/App.css";

function sendUserDetails() {
  fetch("http://localhost:8080/api/user", {
    method: "POST",
    headers: new Headers({
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpZ2giLCJwYXNzd29yZCI6InNpZ2giLCJpYXQiOjE2NjUxMTQ0NjUsImV4cCI6MTY2NTE1MDQ2NX0.cQeiy330EDsU1Fijwd8maSfOhXGhZuS2wbyMRCnE3jw",
    }),
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
