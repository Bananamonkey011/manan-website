import './App.css';
import NavigationBar from './components/NavigationBar';
import Landing from './components/Landing';
import BG from './images/BG.png';

function App() {
  return (
    <div>
      {/* <img className="bg" src={BG} alt="BG" /> */}
      <NavigationBar />
      <Landing />
    </div>
  );
}

export default App;
