import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Liverpool from './Page/Liverpool';
import Manchester from './Page/Manchester';
import Maceio from './Page/Maceio';
import Btn from './Components/Btn';
import Sobre from './Page/Sobre';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/Liverpool' element={<Liverpool />} />
        <Route path='/Manchester' element={<Manchester />} />
        <Route path='/Maceio' element={<Maceio />} />
        <Route path='/Sobre' element={<Sobre />} />

      </Routes>
      <Btn />
      <Footer />
    </Router>
  );
}

export default App;
