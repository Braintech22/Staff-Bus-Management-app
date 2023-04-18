import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home/Home';
import Footer from './components/footer/Footer';
import NavBar from './components/navber/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Pages/index/Index';



function App() {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path = '/' element = { <Home /> }/>
        <Route path = '/map' element = { <Index /> }/>
        </Routes>
        <Footer />
        </BrowserRouter>
    );
}

export default App;