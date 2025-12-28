import React from 'react';
import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import * as Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx"
import axios from "axios";

window.Prism = Prism;

const App = () => {
  const [code, setCode] = useState(`function sum(){
            return 1+1;
            }`);
  const [review, setReview] = useState(``);
  useEffect(() => {
    window.Prism.highlightAll();
  },[])

  async function reviewCode(){
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    .then(res => {
      setReview(response.data)
      console.log(res.data.response); 
    })
    .catch(err => console.error(err));
  }

  return (
<>
    <main>
      <div className='left'> 
        <div className='code'> 
        <Editor className='editor'
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => Prism.highlight(code, Prism.languages.javascript)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14,
        border : null,
        height : "100%",
        width : "100%", 
      }}
    />
        </div>
        <div
        onClick={reviewCode} 
        className='review'>Review</div>
      </div>
      <div className='right'></div>
    </main>
</>
  )
}


export default App;