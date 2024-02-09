import { useState } from 'react'
import remarkGfm from 'remark-gfm'
import './App.css'
import Markdown from 'react-markdown'
function App() {
    const [text, setText] = useState("# Markdown");

  return (
    <>
        <div style={{textAlign: "left", border: "1px solid gray", borderRadius: "5px", padding: "10px"}}>
            <textarea type="text" onChange={e=> { setText(e.target.value)}}/>
            <Markdown remarkPlugins={[remarkGfm]}>
                {text}
            </Markdown>

        </div>

    </>
  )
}
export default App
