
import './App.css';
import { Movieinput } from './components/Movieinput';
import { Movielist } from './components/Movielist';

function App() {
  return (
    <div className="App">
      <Movieinput/>
     <Movielist/>
    </div>
  );
}

export default App;
