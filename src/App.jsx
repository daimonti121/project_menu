import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Contaсt } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className='container content main-content'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/contacts' element={<Contaсt />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
