import logo from './logo.svg';
import './App.css';
import ListTask from './components/ListTask';
import Addtask from './components/Addtask';

function App() {
  return (
    <div className="App">
      <Addtask />
      <ListTask />
      
    </div>
  );
}

export default App;
