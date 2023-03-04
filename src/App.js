
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import './App.css'
import About from './components/about/About';

function App() {
    return (
        <div>
            <Sidebar />
            <div className='main'>
                <Home />
                <About />
            </div>
        </div>
    );
}

export default App;
