import React from 'react';
import { useState } from 'react';
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-jsx"
import prism from "prismjs"

const App = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    prism.highlightAll();
  })

  return (
<>
    <main>
      <div className='left'> 
        <div className='code'>
          
        </div>
        <div className='review'>Review</div>
      </div>
      <div className='right'></div>
    </main>
</>
  )
}

export default App;