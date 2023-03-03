
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import './App.css'

function App() {
  return (
      <div>
          <Sidebar />
          <div className='main'>
              <Home />
          </div>
      </div>
  );
}

export default App;
