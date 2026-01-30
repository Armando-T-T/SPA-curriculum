import { Link, Route, Routes } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

const App = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
      <AppBar position="static">
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SPA MERN Básica
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Acerca
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <SimpleBar style={{ maxHeight: 420 }}>
          <Box sx={{ p: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
        </SimpleBar>
      </Container>
    </Box>
  );
};

export default App;
