import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App1 from './App1.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <StrictMode>
    {/* <h1>hello</h1> */}
    <App1 />
  </StrictMode>
</BrowserRouter>
)
