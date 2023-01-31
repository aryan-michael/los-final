import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [length, setLength] = useState("");

  function getQuote() {
    axios.get("http://localhost:5000/").then(response => {
      console.log(response.data);
      setText(response.data.statement.Quote);
      setAuthor(response.data.statement.Author);
      setLength(response.data.totalQuotesGen)
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
      <h3>{length}</h3>
    </div>
  )
}

export default Quotes;
