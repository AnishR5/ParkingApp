import './App.css';
import Header from './components/Header';
import ParkingForm from './components/ParkingForm';
import ParkingPlace from './components/ParkingPlace';

function App() {
  return (
    <div className="App">
      <Header/>
      <div >
      <ParkingPlace/>
      <ParkingForm/>
      </div>
    </div>
  );
}

export default App;
