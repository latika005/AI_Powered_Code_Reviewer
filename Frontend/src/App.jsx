import React from 'react';
import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import * as Prism from "prismjs";
import Markdown from "react-markdown";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx"
import axios from "axios";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";


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
    setReview(response.data.response);
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
      <div className='right'>
      <Markdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeHighlight]}
    components={{
      h2({ children }) {
        return <h2 className="heading">{children}</h2>;
      },
      li({ children }) {
        return (
          <li className="list-item">
            {children}
          </li>
        );
      },
      code({ inline, children }) {
        return inline ? (
          <code className="inline-code">{children}</code>
        ) : (
          <code className="block-code">{children}</code>
        );
      },
    }}
  >
    {review}
  </Markdown>
      </div>
    </main>
</>
  )
}


export default App;