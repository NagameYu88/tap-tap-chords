import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppL from './AppL.tsx'
import AppR from './AppR.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppL />
    <AppR />
  </StrictMode>,
)
