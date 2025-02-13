import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';//import css of toastify from its document ok..


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <ToastContainer/> 
       <App />
  </BrowserRouter>
)
