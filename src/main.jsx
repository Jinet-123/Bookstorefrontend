import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contextshare from './context/Contextshare.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Authcontext from './context/Authcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Contextshare>
      <GoogleOAuthProvider clientId="29719828474-i2pb1p8fba2cugjm60punfvmmuvpgu7b.apps.googleusercontent.com"><Authcontext><App /></Authcontext></GoogleOAuthProvider>
      </Contextshare>
   
    </BrowserRouter>
   
  </StrictMode>,
)
