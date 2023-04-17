import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home/Home';
import Footer from './components/footer/Footer';
import NavBar from './components/navber/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return ( <
        >
        <
        BrowserRouter >
        <
        NavBar / >
        <
        Home / >

        <
        Routes >
        <
        Route path = './'
        element = { < Home / > }
        /> <
        /Routes>




        <
        Footer / >

        <
        /BrowserRouter>

        <
        />

    );
}

export default App;