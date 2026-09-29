import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './cv.css'
import CV from './CV'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CV />
  </StrictMode>
)
