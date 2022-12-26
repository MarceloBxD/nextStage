import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { AppProvider } from './contexts/contextApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AppProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </React.StrictMode>,
    </AppProvider>
  </ChakraProvider>
)
