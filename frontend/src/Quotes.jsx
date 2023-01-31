import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function getQuote() {
    axios.get("http://localhost:5000/").then(response => {
      console.log(response.data);
      setText(response.data.Quote);
      setAuthor(response.data.Author);
    });
  }

  useEffect(() => {
    getQuote()
  }, []);

  return (
    <div>
      <Button onClick={getQuote} variant="light">Generate Quote</Button>
      <h1>{text}</h1>
      <h3>{"-" + author}</h3>
    </div>
  )
}

export default Quotes;