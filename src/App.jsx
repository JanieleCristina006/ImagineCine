import "./index.css";
import {ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { RoutesApp } from "./routes";

function App() {
  

  return (
    <>
      <div className="app">
        <ToastContainer outoClose={3000}/>
      <RoutesApp />
      </div>
    </>
  )
}

export default App;
