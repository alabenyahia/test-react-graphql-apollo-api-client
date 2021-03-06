import './App.css';
import Routing from "./Routing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className="App__content">
            <Routing/>
        </div>
    </div>
  );
}

export default App;
