import './App.css';
// import NavBar from './component/NavBar';
import Main from './component/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesList from './component/MoviesList';


function App() {
  return (
    <div className="App">
      <div>
       
        <Main />
        
      </div>

      <div className="footer">
        <p> Created with ❤️ by Achr@f</p>
      </div>
    </div>
  );
}

export default App;
