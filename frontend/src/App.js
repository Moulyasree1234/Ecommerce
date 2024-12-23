import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Homepage from './customer/components/Pages/Homepage/Homepage.jsx';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
