
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import './App.css'
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portofolio from './components/portofolio/Portofolio';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div>
            <Sidebar />
            <div className='main'>
                <Home />
                <About />
                <Services />
                <Resume />
                <Portofolio />
                <Footer />
            </div>
        </div>
    );
}

export default App;
