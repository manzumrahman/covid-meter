import './css/App.css';
import Header from './Header';
import Updates from './Updates';
import CountrywiseTable from './CountrywiseTable';
import Chart from './Chart';
import "animate.css"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Updates></Updates>
      <CountrywiseTable></CountrywiseTable>
      <Chart></Chart>
    </div>
  );
}

export default App;
