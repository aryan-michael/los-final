import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/index";
import Quotes from "./pages/Quotes";
import Formdata from "./pages/Formdata";
import Contact from "./pages/contact";
import UserDetails from "./pages/userDetails/userDetails";
import SignUp from "./pages/signup";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider  } from "@mui/material";
import TopBar from "./components/TopBar";
import PersonalDetails from "./pages/personalDetails/personalDetails";

function App() {
const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <>
      <main className="content"><TopBar/></main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pages/personalDetails" element={<PersonalDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages/userDetails" element={<UserDetails />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/form-data" element={<Formdata />} />
      </Routes>
    </>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

/* <div className="App">
      <header className="App-header">
        <Quotes />
      </header>
    </div> */
