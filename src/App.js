import './App.css';
import Header from './Header';
import { Route, Routes } from "react-router-dom";
import TinderCards from "./TinderCards";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<TinderCards/>} />
        <Route path="/chat" element={<h1>This is Chat Page</h1>} />
        <Route path="/profile" element={<h1>This is Profile Page</h1>}>
        </Route>
      </Routes>
    </div>
    // Header
    // Tinder Card 
    // Buttons 
  );
}

export default App;
