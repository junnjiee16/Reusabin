import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

function logout(){
    localStorage.removeItem("token");
    navigate("/");
}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            4SKN
          </Typography>
          {localStorage.getItem("token")!==null ? <Button color="inherit" onClick={logout}>Logout</Button>:<Button color="inherit" onClick={routeChange}>Login</Button> }
          {localStorage.getItem("current")==="login" ? <Button color="inherit" onClick={()=>{navigate("/")}}>SignUp</Button>: null }
          {localStorage.getItem("token")!==null ? <Button color="inherit" onClick={()=>navigate("/Ai")}>Ai</Button>:null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
