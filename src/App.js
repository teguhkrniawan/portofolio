
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import './App.css'
import About from './components/about/About';
import Services from './components/services/Services';

function App() {
    return (
        <div>
            <Sidebar />
            <div className='main'>
                <Home />
                <About />
                <Services />
            </div>
        </div>
    );
}

export default App;
