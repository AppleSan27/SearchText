import "./App.css";
import { sentence } from "https://unpkg.com/txtgen/dist/txtgen.esm.js";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [, setValue] = useState("");
  let body =  document.getElementById('text-area');
  console.log(body);



  const onGenerate = () => {
    setText(sentence());
  };

  function search(text) {
    // получаем текст
    // производим замену текста
    let body_re = body.innerHTML.replace(text, `<span class="search">${text}</span>`,'g');       
    // обновляем весь текст
    body.innerHTML = body_re;
}

  return (
    <div className="App">
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        onChange={({ target }) => {
          if (target.value){
          setValue(target.value);
          search(target.value)}
        }}
      />

      <div id="text-area">
      {text}
        {/* <TextareaAutosize id="text-area"value={text} minRows={5} /> */}
      </div>
      <div>
        <Button onClick={onGenerate}>Generate</Button>
      </div>
    </div>
  );
}

export default App;
