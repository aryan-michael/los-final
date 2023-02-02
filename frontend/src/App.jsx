import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/index";
import Quotes from "./pages/Quotes";
import Formdata from "./pages/Formdata";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider  } from "@mui/material";
import TopBar from "./components/TopBar";

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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
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
