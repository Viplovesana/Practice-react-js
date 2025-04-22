
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import 'react-toastify/dist/ReactToastify.css';
import LoginContext from './Logincontext.jsx';



createRoot(document.getElementById('root')).render(
   
             <LoginContext>  <App /></LoginContext>
                
           
    
 

)
