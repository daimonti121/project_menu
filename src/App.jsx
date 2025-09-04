import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Contaсt } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Recipe } from './pages/recipe';

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className='container content main-content'>
                    <Routes>     
                        <Route path='/' exact element={<Home />}></Route>
                        <Route path='/contacts' element={<Contaсt />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/category/:name' element={<Category />}></Route>
                        <Route path='/meal/:id' element={<Recipe />}></Route>
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
